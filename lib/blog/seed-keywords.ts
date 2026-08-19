// Port do engine My_Blog_Makes_Neil_Proud.
import { AUTOBLOG_PROFILE } from '@/lib/autoblog-profile';

export const SEED_KEYWORDS = AUTOBLOG_PROFILE.editorial.seedKeywords;

export function getNextSeedKeyword(dayOfYear: number): string {
  return SEED_KEYWORDS[dayOfYear % SEED_KEYWORDS.length];
}
