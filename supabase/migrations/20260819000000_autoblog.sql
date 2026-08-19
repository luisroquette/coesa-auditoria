-- Autoblog do blog do auditoria.coesasolar.com.br (coesa-auditoria).
-- Plano B (19/08/2026): tabelas prefixadas coesa_* no schema public do
-- Supabase do CF Gauss (fvyknyvetpbxtdagrxqr) — o Supabase do próprio site
-- (ztailhc...) está em conta inacessível. Migration já aplicada via MCP;
-- este arquivo é o registro.

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

-- Sem policy em coesa_blog_run_log: o service role bypassa RLS e é usado
-- apenas pelas rotas server-side de geração.
