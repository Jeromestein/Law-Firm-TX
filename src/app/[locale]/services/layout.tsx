import type { Metadata } from "next";
import type { ReactNode } from "react";

import { getLocaleData, languageAlternates } from "@/lib/metadata-helpers";

export function generateMetadata({
  params
}: {
  params: { locale: string };
}): Metadata {
  const { locale, dictionary, ogLocale } = getLocaleData(params.locale);
  const hero = dictionary.pricing.hero;
  const pageTitle = hero.heading;
  const fullTitle = `${pageTitle} | ${dictionary.brandName}`;
  const description = hero.body;

  return {
    title: pageTitle,
    description,
    alternates: {
      languages: languageAlternates("/services")
    },
    openGraph: {
      title: fullTitle,
      description,
      locale: ogLocale,
      type: "website",
      images: [
        {
          url: "/ppl-typing.jpeg",
          alt: dictionary.brandName
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/ppl-typing.jpeg"]
    }
  };
}

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
