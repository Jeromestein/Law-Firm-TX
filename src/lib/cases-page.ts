import { getDictionary, type CaseEntry, type CaseSection, type CasesPageContent } from "./dictionaries";
import { defaultLocale, isSupportedLocale, type Locale } from "./i18n";

export type { CaseEntry, CaseSection, CasesPageContent };

export function getCasesContent(locale: Locale | string): CasesPageContent {
  const normalized = isSupportedLocale(locale) ? locale : defaultLocale;
  return getDictionary(normalized).casesPage;
}
