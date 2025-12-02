import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { SectionCta } from "@/components/section-cta";
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

type PageProps = {
  params: { locale: string };
};

export default function ContactPage({ params }: PageProps) {
  const { locale, dictionary } = getLocaleData(params.locale);
  const contact = dictionary.contact;

  const mapEmbeds: Record<string, string> = {
    ny: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6045.577915493837!2d-73.90400029999999!3d40.744669099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f1d9c1ab473%3A0x2e06eafa0d763109!2s60-20%20Woodside%20Ave%20Suite%20205%2C%20Woodside%2C%20NY%2011377!5e0!3m2!1sen!2sus!4v1764632649882!5m2!1sen!2sus",
    ca: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.813910096458!2d-117.754984023533!3d33.661983373306484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd5b072c4acf%3A0x81110d9d68ac93f3!2s7515%20Irvine%20Center%20Dr%20%23130%2C%20Irvine%2C%20CA%2092618!5e0!3m2!1sen!2sus!4v1764632673209!5m2!1sen!2sus"
  };
  const phoneHref =
    contact.channels.items.find((item) => item.href.startsWith("tel:"))?.href ?? "#";
  const emailHref =
    contact.channels.items.find((item) => item.href.startsWith("mailto:"))?.href ?? "#";
  const contactHref = { pathname: `/${locale}/contact`, hash: "contact" };

  return (
    <main className="bg-gradient-to-b from-slate-100 via-white to-slate-100 text-slate-800" lang={locale}>
      <section
        id="contact"
        className="relative overflow-hidden"
        aria-labelledby="contact-hero-title"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-gold/10 to-transparent" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 pb-12 pt-24 md:grid-cols-2 md:pt-28">
          <div className="space-y-5">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {contact.hero.badge}
            </div>
            <h1 id="contact-hero-title" className="text-4xl font-serif font-bold text-primary md:text-5xl">
              {contact.hero.title}
            </h1>
            <p className="max-w-xl text-base text-slate-600 md:text-lg">
              {contact.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={phoneHref}>{contact.hero.phoneCta}</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={emailHref}>{contact.hero.emailCta}</a>
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 shadow-2xl ring-1 ring-slate-200/70 backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-gold/5" />
            <div className="relative p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {contact.channels.title}
              </p>
              <p className="mt-2 text-lg font-serif font-semibold text-primary">
                {contact.hero.subtitle}
              </p>
              <p className="mt-1 text-sm text-slate-500">{contact.channels.description}</p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {contact.channels.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/60 p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-gold/60 hover:shadow-md"
                  >
                    <div className="space-y-1">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary">
                        {item.label}
                      </p>
                      <p className="text-xl font-semibold text-primary">{item.value}</p>
                      {item.helper ? (
                        <p className="text-xs text-slate-500">{item.helper}</p>
                      ) : null}
                    </div>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                      {item.label === contact.channels.items[0]?.label ? "↗" : "→"}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 relative mx-auto max-w-6xl space-y-10 px-4 pb-16">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            {contact.hero.badge}
          </p>
          <h2 className="text-3xl font-serif font-bold text-primary md:text-4xl">
            {contact.offices.title}
          </h2>
          <p className="text-sm text-slate-600 md:text-base">{contact.offices.subtitle}</p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-2xl ring-1 ring-slate-200/70">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
          </div>
          <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-2">
            {contact.offices.locations.map((location) => {
              const embedUrl = mapEmbeds[location.id] ?? "";
              return (
                <div
                  key={location.id}
                  className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-900 text-white shadow-lg ring-1 ring-slate-800/30"
                >
                  <div className="space-y-1 px-5 pt-5">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold">
                      {location.name}
                    </div>
                    <p className="text-xl font-serif font-semibold">{location.address}</p>
                  </div>
                  {embedUrl ? (
                    <div className="relative w-full overflow-hidden rounded-xl border border-slate-800/50 bg-black/20 px-3 pb-4">
                      <div className="relative w-full overflow-hidden rounded-lg border border-white/10 bg-black/20" style={{ paddingBottom: "60%" }}>
                        <iframe
                          src={embedUrl}
                          className="absolute inset-0 h-full w-full border-0"
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`${location.name} map`}
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
