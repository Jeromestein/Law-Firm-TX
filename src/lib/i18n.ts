export const locales = ["zh", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "zh";

const localeMap: Record<string, Locale> = {
  zh: "zh",
  "zh-cn": "zh",
  "zh-hans": "zh",
  cn: "zh",
  en: "en",
  "en-us": "en",
  "en-gb": "en"
};

export function normalizeLocale(input: string | undefined | null): Locale {
  if (!input) return defaultLocale;
  const lower = input.toLowerCase();
  return localeMap[lower] ?? defaultLocale;
}

export function getPreferredLocale(
  cookieLocale: string | undefined,
  acceptLanguage: string | null
): Locale {
  if (cookieLocale && locales.includes(normalizeLocale(cookieLocale))) {
    return normalizeLocale(cookieLocale);
  }

  if (acceptLanguage) {
    const parts = acceptLanguage
      .split(",")
      .map((part) => part.split(";")[0]?.trim())
      .filter(Boolean);

    for (const part of parts) {
      const normalized = normalizeLocale(part);
      if (locales.includes(normalized)) {
        return normalized;
      }
    }
  }

  return defaultLocale;
}

export function isSupportedLocale(locale: string | undefined): locale is Locale {
  return locale !== undefined && (locales as readonly string[]).includes(locale);
}
