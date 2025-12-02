import type { Metadata } from "next";
import type { ReactNode } from "react";

import { getLocaleData, languageAlternates } from "@/lib/metadata-helpers";

export function generateMetadata({
  params
}: {
  params: { locale: string };
}): Metadata {
  const { dictionary, ogLocale } = getLocaleData(params.locale);
  const contact = dictionary.contact;
  const pageTitle = contact.hero.title;
  const fullTitle = `${pageTitle} | ${dictionary.brandName}`;
  const description = contact.hero.subtitle;

  return {
    title: pageTitle,
    description,
    alternates: {
      languages: languageAlternates("/contact")
    },
    openGraph: {
      title: fullTitle,
      description,
      locale: ogLocale,
      type: "website",
      images: [
        {
          url: "/tx_profile.jpg",
          alt: contact.hero.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/tx_profile.jpg"]
    }
  };
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
