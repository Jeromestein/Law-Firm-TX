import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SchoolLogoMarquee } from "@/components/ui/shadcn-io/marquee";
import { getLocaleData, languageAlternates } from "@/lib/metadata-helpers";

export function generateMetadata({
  params
}: {
  params: { locale: string };
}): Metadata {
  const { locale, dictionary, ogLocale } = getLocaleData(params.locale);
  const hero = dictionary.home.hero;
  const pageTitle = [hero.heading, hero.highlight].filter(Boolean).join(" ");
  const fullTitle = `${pageTitle} | ${dictionary.brandName}`;
  const description = `${hero.subheading} ${hero.proof}`;

  return {
    title: pageTitle,
    description,
    alternates: {
      languages: languageAlternates()
    },
    openGraph: {
      title: fullTitle,
      description,
      locale: ogLocale,
      type: "website",
      images: [
        {
          url: "/ppl-presenting.jpeg",
          alt: dictionary.brandName
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/ppl-presenting.jpeg"]
    }
  };
}

export default function LocaleLanding({
  params
}: {
  params: { locale: string };
}) {
  const { locale, dictionary } = getLocaleData(params.locale);
  const contactHref = { pathname: `/${locale}/contact`, hash: "contact" };
  const {
    hero,
    education,
    educationMarquee,
    about,
    aboutPartner,
    aboutManager,
    servicesSection,
    casesSection
  } = dictionary.home;
  const schools = [
    {
      name: education.nyu,
      logo: "/new_york_university_logo.jpeg",
      alt: "NYU Logo"
    },
    {
      name: education.minnesota,
      logo: "/university_of_minnesota_logo.jpeg",
      alt: "University of Minnesota Logo"
    },
    {
      name: education.usc,
      logo: "/usc_logo.jpeg",
      alt: "University of Southern California Logo"
    },
    {
      name: education.ucla,
      logo: "/ucla_logo.jpeg",
      alt: "University of California, Los Angeles Logo"
    },
    {
      name: education.harvard,
      logo: "/harvard_logo.jpeg",
      alt: "Harvard University Logo"
    }
  ];

  return (
    <main className="relative" lang={locale}>
      <section
        id="top"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary"
      >
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="h-full w-full object-cover motion-reduce:hidden"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/ppl-presenting.jpeg"
          >
            <source
              src="/hero-section-videos.mp4"
              type="video/mp4"
              media="(prefers-reduced-motion: no-preference)"
            />
          </video>
          <Image
            src="/ppl-presenting.jpeg"
            alt=""
            fill
            priority
            className="hidden object-cover motion-reduce:block"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary" />
        <div className="relative mx-auto max-w-4xl px-4 text-center fade-in-up">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gold">
            {hero.eyebrow}
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            {hero.heading}
            <br />
            <span className="italic text-goldlight">{hero.highlight}</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-light text-slate-300 md:text-xl">
            {hero.subheading}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>{hero.ctaPrimary}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`/${locale}/services`}>{hero.ctaSecondary}</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-slate-200 md:text-base">
            {hero.proof}
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-gold">
            {hero.note}
          </p>
        </div>
      </section>

      {/* <section
        id="education"
        className="relative overflow-hidden border-b border-slate-900/40 bg-gradient-to-r from-slate-950 via-slate-900 to-primary/80 py-16 text-white"
      >
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.08),_transparent_45%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),transparent_40%,rgba(255,255,255,0.08)_60%,transparent_90%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4">
          <p className="mb-2 text-center text-sm uppercase tracking-[0.3em] text-gold">
            {education.title}
          </p>
          {education.subtitle ? (
            <p className="mx-auto mb-10 max-w-2xl text-center text-base text-slate-200">
              {education.subtitle}
            </p>
          ) : (
            <div className="mb-8" />
          )}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {schools.map((school) => (
              <div
                key={school.name}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-md transition duration-300 ease-out hover:-translate-y-1 hover:border-gold/60 hover:bg-white/10 md:p-6"
              >
                <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute -left-24 top-0 h-32 w-52 rotate-12 bg-white/10 blur-2xl" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/10 p-3 ring-1 ring-white/20">
                    <Image
                      src={school.logo}
                      alt={school.alt}
                      width={48}
                      height={48}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="text-lg font-semibold">
                    {school.name}
                  </span>
                </div>
                <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-700 ease-out group-hover:translate-x-[120%]" />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section
        id="about"
        className="bg-slate-50 py-20 scroll-mt-[72px]"
        aria-labelledby="about-title"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <div className="relative">
              <div className="overflow-hidden rounded-sm bg-slate-200 shadow-2xl">
                <Image
                  src="/tx_profile.jpg"
                  alt={about.imageAlt}
                  width={900}
                  height={900}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden max-w-xs border-l-4 border-gold bg-white p-6 text-sm shadow-xl md:block">
                <p className="font-serif text-xl italic text-primary">
                  {about.quote}
                </p>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-gold">
                {about.role}
              </p>
              <h2
                id="about-title"
                className="mb-6 text-4xl font-serif font-bold text-primary"
              >
                {about.title}
              </h2>
              <p className="mb-6 leading-relaxed text-slate-600">
                {about.body1}
              </p>
              <p className="mb-8 leading-relaxed text-slate-600">
                {about.body2}
              </p>
              <ul className="mb-8 space-y-3">
                {about.bullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-center font-medium text-primary"
                  >
                    <span className="mr-3 inline-block h-2 w-2 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>{about.ctaPrimary}</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#services">{about.ctaSecondary}</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-gold">
                {aboutPartner.role}
              </p>
              <h3 className="text-3xl font-serif font-bold text-primary">
                {aboutPartner.title}
              </h3>
              <div className="space-y-4 leading-relaxed text-slate-600">
                {aboutPartner.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild>
                  <Link href={contactHref}>{about.ctaPrimary}</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#services">{about.ctaSecondary}</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-sm bg-slate-200 shadow-2xl">
                <Image
                  src="/hyl-profile.jpg"
                  alt={aboutPartner.imageAlt}
                  width={900}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          {aboutManager ? (
            <div className="mt-16 rounded-sm border border-slate-200 bg-white p-8 shadow-2xl">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-gold">
                {aboutManager.role}
              </p>
              <h3 className="text-3xl font-serif font-bold text-primary">
                {aboutManager.title}
              </h3>
              <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
                {aboutManager.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>{about.ctaPrimary}</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#services">{about.ctaSecondary}</Link>
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </section>


      <section id="education" className="scroll-mt-[72px]">
        <SchoolLogoMarquee
          title={education.title}
          items={schools}
          caption={educationMarquee.caption}
          pauseOnHover
          speed={24}
        />
      </section>


      <section
        id="services"
        className="bg-primary py-16 text-white scroll-mt-[72px]"
        aria-labelledby="services-title"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 id="services-title" className="text-3xl font-serif md:text-4xl">
              {servicesSection.title}
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-gold" />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {servicesSection.services.map((service) => (
              <article
                key={service.title}
                className="group relative border border-white/5 bg-secondary p-10 transition duration-300 hover:border-gold/50"
              >
                <div className="absolute right-0 top-0 p-6 opacity-10 transition group-hover:opacity-20">
                  <svg
                    className="h-24 w-24 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-serif text-gold">
                  {service.title}
                </h3>
                <p className="mb-6 leading-relaxed text-slate-300">
                  {service.description}
                </p>
                <ul className="mb-8 space-y-2 text-sm text-slate-200">
                  {service.bullets.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cases"
        className="bg-white py-24 scroll-mt-[72px]"
        aria-labelledby="cases-title"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2
                id="cases-title"
                className="text-3xl font-serif text-primary md:text-4xl"
              >
                {casesSection.title}
              </h2>
              <p className="text-slate-500">{casesSection.subtitle}</p>
            </div>
            <Link
              href={`/${locale}/cases`}
              className="hidden text-sm font-bold text-primary transition hover:text-gold md:block"
            >
              {casesSection.viewAll}
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {casesSection.studies.map((item) => (
              <Link
                key={item.title}
                href={{ pathname: `/${locale}/cases`, hash: item.href.replace(/^#/, "") }}
                className="group block border border-slate-100 bg-slate-50 transition duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <div
                    className={`absolute left-4 top-4 px-3 py-1 text-xs font-bold ${item.color}`}
                  >
                    {item.tag}
                  </div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-serif text-xl text-primary transition group-hover:text-gold">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-sm text-slate-500">{item.body}</p>
                  <span className="border-b border-slate-300 pb-1 text-sm font-bold text-primary">
                    {casesSection.readMore}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex justify-center md:hidden">
            <Link
              href={`/${locale}/cases`}
              className="inline-flex items-center gap-2 rounded-sm border border-primary px-4 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              {casesSection.viewAll}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
