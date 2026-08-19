-- Autoblog do blog do auditoria.coesasolar.com.br (coesa-auditoria).
-- Plano B (19/08/2026): tabelas prefixadas coesa_* no schema public do
-- Supabase do CF Gauss (fvyknyvetpbxtdagrxqr) — o Supabase do próprio site
-- (ztailhc...) está em conta inacessível. Migration já aplicada via MCP;
-- este arquivo é o registro.

create extension if not exists pgcrypto;

create table if not exists public.coesa_articles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  meta_desc text,
  content text not null,
  cover_url text,
  keyword text,
  status text not null default 'published' check (status in ('generating', 'published', 'failed')),
  published_at timestamptz not null default now()
);

create index if not exists coesa_articles_published_at_idx on public.coesa_articles (published_at desc);
create index if not exists coesa_articles_status_idx on public.coesa_articles (status);

create table if not exists public.coesa_blog_run_log (
  id uuid primary key default gen_random_uuid(),
  run_date date unique not null,
  keyword text,
  status text not null check (status in ('running', 'success', 'error')),
  error text,
  created_at timestamptz not null default now()
);

alter table public.coesa_articles enable row level security;
alter table public.coesa_blog_run_log enable row level security;

create policy coesa_articles_public_read on public.coesa_articles
  for select to anon, authenticated
  using (status = 'published');

-- Escrita sem service_role: RPCs SECURITY DEFINER que validam o CRON_SECRET
-- (hash sha256) e escrevem. Mesmo padrão dos gates admin_tem_* do cfgauss-site.
-- O HASH abaixo é o sha256 do CRON_SECRET da instalação — se o segredo for
-- rotacionado, atualizar aqui (select encode(extensions.digest('<novo>', 'sha256'), 'hex');).

create or replace function public.coesa_blog_claim_run(p_secret text)
returns boolean
language plpgsql security definer set search_path = ''
as $$
declare existing_status text;
begin
  if p_secret is null
     or encode(extensions.digest(p_secret, 'sha256'), 'hex') <> '<HASH_DO_CRON_SECRET>' then
    return false;
  end if;

  select status into existing_status
  from public.coesa_blog_run_log where run_date = current_date;

  if existing_status = 'success' then
    return false;
  elsif existing_status is null then
    insert into public.coesa_blog_run_log (run_date, status)
    values (current_date, 'running');
  else
    update public.coesa_blog_run_log
    set status = 'running', error = null
    where run_date = current_date;
  end if;

  return true;
end $$;

create or replace function public.coesa_blog_insert_article(
  p_secret text, p_slug text, p_title text, p_meta_desc text,
  p_content text, p_cover_url text, p_keyword text)
returns text
language plpgsql security definer set search_path = ''
as $$
declare v_final text;
begin
  if p_secret is null
     or encode(extensions.digest(p_secret, 'sha256'), 'hex') <> '<HASH_DO_CRON_SECRET>' then
    return null;
  end if;

  for v_final in select c from unnest(array[p_slug, p_slug || '-2', p_slug || '-3']) as c loop
    begin
      insert into public.coesa_articles (slug, title, meta_desc, content, cover_url, keyword, status)
      values (v_final, p_title, p_meta_desc, p_content, p_cover_url, p_keyword, 'published');
      return v_final;
    exception when unique_violation then
      -- tenta o próximo candidato
    end;
  end loop;

  return null;
end $$;

create or replace function public.coesa_blog_insert_run_log(
  p_secret text, p_keyword text, p_status text, p_error text)
returns void
language plpgsql security definer set search_path = ''
as $$
begin
  if p_secret is null
     or encode(extensions.digest(p_secret, 'sha256'), 'hex') <> '<HASH_DO_CRON_SECRET>' then
    return;
  end if;

  update public.coesa_blog_run_log
  set keyword = p_keyword, status = p_status, error = p_error
  where run_date = current_date and status = 'running';
end $$;

grant execute on function public.coesa_blog_claim_run(text) to anon, authenticated;
grant execute on function public.coesa_blog_insert_article(text, text, text, text, text, text, text) to anon, authenticated;
grant execute on function public.coesa_blog_insert_run_log(text, text, text, text) to anon, authenticated;
