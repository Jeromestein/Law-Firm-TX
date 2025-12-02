import type { Metadata } from "next";

import "./globals.css";
import { getLocaleData, languageAlternates } from "@/lib/metadata-helpers";

export async function generateMetadata({
  params
}: {
  params: { locale?: string };
}): Promise<Metadata> {
  const { locale, dictionary, ogLocale } = getLocaleData(params?.locale);
  const description = dictionary.home.hero.subheading;
  const baseTitle = dictionary.brandName;
  const fullTitle = `${baseTitle}`;

  return {
    title: {
      default: baseTitle,
      template: `%s | ${baseTitle}`
    },
    description,
    alternates: {
      languages: languageAlternates()
    },
    other: {
      "apple-mobile-web-app-title": baseTitle
    },
    openGraph: {
      title: fullTitle,
      description,
      locale: ogLocale,
      type: "website",
      images: [
        {
          url: "/global.png",
          alt: baseTitle
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/global.png"]
    }
  };
}

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale?: string };
}>) {
  const { locale } = getLocaleData(params?.locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
    >
      <body className="bg-slate-50 text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}
