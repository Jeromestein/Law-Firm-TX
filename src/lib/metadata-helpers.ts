import { getDictionary } from "./dictionaries";
import { defaultLocale, isSupportedLocale, locales, type Locale } from "./i18n";

export function resolveLocale(localeParam: string | undefined): Locale {
  if (localeParam && isSupportedLocale(localeParam)) return localeParam;
  return defaultLocale;
}

export function getLocaleData(localeParam: string | undefined) {
  const locale = resolveLocale(localeParam);
  const dictionary = getDictionary(locale);
  const ogLocale = locale === "zh" ? "zh_CN" : "en_US";

  return { locale, dictionary, ogLocale };
}

export function languageAlternates(pathSuffix = ""): Record<string, string> {
  const cleaned = pathSuffix.startsWith("/") ? pathSuffix : `/${pathSuffix}`;
  const suffix = cleaned === "/" ? "" : cleaned;

  return locales.reduce<Record<string, string>>((acc, locale) => {
    acc[locale] = `/${locale}${suffix}`;
    return acc;
  }, {});
}
