import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/dictionaries";
import { isSupportedLocale } from "@/lib/i18n";

export default function LocaleLanding({
  params
}: {
  params: { locale: string };
}) {
  const locale = isSupportedLocale(params.locale) ? params.locale : "zh";
  const dictionary = getDictionary(locale);
  const { hero, education, about, servicesSection, casesSection } = dictionary.home;
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
    }
  ];

  return (
    <main className="relative" lang={locale}>
      <div
        id="top"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary"
      >
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/ppl-presenting.jpeg"
          >
            <source src="/hero-section-videos.mp4" type="video/mp4" />
          </video>
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
              <Link href="#contact">{hero.ctaPrimary}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`/${locale}/services`}>{hero.ctaSecondary}</Link>
            </Button>
          </div>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-gold">
            {hero.note}
          </p>
        </div>
      </div>

      <section id="education" className="border-b border-slate-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-8 text-center text-sm uppercase tracking-widest text-slate-500">
            {education.title}
          </p>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 text-left opacity-80 transition-all duration-500 hover:grayscale-0 hover:opacity-100 md:grid-cols-2 md:grayscale lg:gap-10">
            {schools.map((school) => (
              <div
                key={school.name}
                className="flex items-center gap-3"
              >
                <Image
                  src={school.logo}
                  alt={school.alt}
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <span className="text-xl font-bold text-slate-800">
                  {school.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
            className="bg-slate-50 py-20"
            aria-labelledby="about-title"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <div className="relative">
              <div className="overflow-hidden rounded-sm bg-slate-200 shadow-2xl">
                <Image
                  src="/tx_profile.jpg"
                  alt="律师照片"
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
                  <Link href="#contact">{about.ctaPrimary}</Link>
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
                合伙人 Partner
              </p>
              <h3 className="text-3xl font-serif font-bold text-primary">
                Yilei Huang, Esq.
              </h3>
              <div className="space-y-4 leading-relaxed text-slate-600">
                <p>
                  Yilei Huang is an attorney focusing her practice on immigration, corporate
                  law, and civil litigation. She represents both individual and business
                  clients in state courts, handling complex disputes involving contracts,
                  shareholder matters, and enforcement actions.
                </p>
                <p>
                  In her immigration practice, Ms. Huang has successfully represented clients
                  in a wide range of matters, including family-based petitions, employment-based
                  visas, and adjustment of status. She has particular experience with National
                  Interest Waiver (NIW) petitions, where she has achieved favorable outcomes for
                  professionals and researchers in fields such as science, technology, and
                  business.
                </p>
                <p>
                  In addition to immigration, Ms. Huang advises businesses and investors on
                  corporate structures, financing arrangements, and compliance with U.S.
                  regulations. She also provides comprehensive legal services in cross-border
                  transactions and dispute resolution.
                </p>
                <p>
                  Prior to joining ApexBridge, Ms. Huang worked at law firms in Los Angeles and
                  Shanghai, including Baker McKenzie FenXun and King &amp; Wood Mallesons,
                  where she supported multinational clients in IPO projects, corporate
                  governance, and arbitration cases.
                </p>
                <p>
                  Ms. Huang earned her LL.M. from the University of Southern California (USC)
                  and her LL.B. from East China University of Political Science and Law. She is
                  currently pursuing her MBA at UCLA Anderson School of Management. Besides her
                  identity as an Attorney, she is also a commissioned California Notary Public.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild>
                  <Link href="#contact">{about.ctaPrimary}</Link>
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
                  alt="Portrait of Yilei Huang, Esq."
                  width={900}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-primary py-24 text-white"
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
                <Button variant="ghost" className="border-b border-gold px-0">
                  {service.label} →
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cases"
        className="bg-white py-24"
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
              href="#"
              className="hidden text-sm font-bold text-primary transition hover:text-gold md:block"
            >
              {casesSection.viewAll}
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {casesSection.studies.map((item) => (
              <article
                key={item.title}
                className="group border border-slate-100 bg-slate-50 transition duration-300 hover:shadow-xl"
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
                    阅读详情
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
