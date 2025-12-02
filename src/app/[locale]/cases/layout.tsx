import type { Metadata } from "next";
import type { ReactNode } from "react";

import { getDictionary } from "@/lib/dictionaries";
import { getLocaleData, languageAlternates } from "@/lib/metadata-helpers";

export function generateMetadata({
  params
}: {
  params: { locale: string };
}): Metadata {
  const { locale, dictionary, ogLocale } = getLocaleData(params.locale);
  const casesPage = dictionary.casesPage;
  const pageTitle = casesPage.hero.title;
  const fullTitle = `${pageTitle} | ${dictionary.brandName}`;
  const description = casesPage.hero.subtitle;

  return {
    title: pageTitle,
    description,
    alternates: {
      languages: languageAlternates("/cases")
    },
    openGraph: {
      title: fullTitle,
      description,
      locale: ogLocale,
      type: "website",
      images: [
        {
          url: "/cases/healthcareIpo.webp",
          alt: casesPage.hero.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/cases/healthcareIpo.webp"]
    }
  };
}

export default function CasesLayout({ children }: { children: ReactNode }) {
  return children;
}
