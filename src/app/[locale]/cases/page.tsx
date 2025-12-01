"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SectionCta } from "@/components/section-cta";
import { getCasesContent, type CaseEntry } from "@/lib/cases-page";
import { getDictionary } from "@/lib/dictionaries";
import { isSupportedLocale } from "@/lib/i18n";

type PageProps = {
  params: { locale: string };
};

export default function CasesPage({ params }: PageProps) {
  const locale = isSupportedLocale(params.locale) ? params.locale : "zh";
  const casesPage = getCasesContent(locale);
  const dictionary = getDictionary(locale);
  const labels =
    locale === "zh"
      ? {
          background: "案件背景",
          challenge: "难点与挑战",
          strategy: "本所策略",
          result: "审批结果"
        }
      : {
          background: "Background",
          challenge: "Challenge",
          strategy: "Our Strategy",
          result: "Result"
        };

  const anchor = (hash: string) => ({
    pathname: `/${locale}`,
    hash: hash.startsWith("#") ? hash.slice(1) : hash
  });

  const sectionId = (title: string) =>
    `case-${title.toLowerCase().replace(/[^a-z0-9]+/gi, "-").replace(/(^-|-$)/g, "")}`;

  return (
    <main className="bg-slate-50 text-slate-800" lang={locale}>
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-slate-900/80" />
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-16 pt-24 md:pb-20 md:pt-28">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {casesPage.hero.badge}
          </div>
          <h1 className="text-4xl font-serif font-bold md:text-5xl">
            {casesPage.hero.title}
          </h1>
          <p className="max-w-3xl text-base text-slate-100 md:text-lg">
            {casesPage.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={anchor("#contact")}>{dictionary.home.hero.ctaPrimary}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={anchor("#services")}>{dictionary.home.hero.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-12 md:py-16">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            {casesPage.hero.badge}
          </p>
          <h2 className="text-3xl font-serif font-bold text-primary md:text-4xl">
            {casesPage.hero.title}
          </h2>
          <p className="text-sm text-slate-600 md:text-base">{casesPage.hero.subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {casesPage.sections.map((section) => (
            <Link
              key={section.title}
              href={`#${sectionId(section.title)}`}
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-primary transition duration-200 hover:-translate-y-0.5 hover:border-gold/70 hover:bg-gold/5 hover:shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-gold transition duration-200 group-hover:scale-110" />
              {section.title}
            </Link>
          ))}
        </div>

        <div className="space-y-12">
          {casesPage.sections.map((section, sectionIndex) => (
            <section
              key={section.title}
              id={sectionId(section.title)}
              className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 px-5 py-10 shadow-xl ring-1 ring-slate-200/60 md:px-8"
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
              </div>
              <div className="relative space-y-10">
                <div className="space-y-3 border-b border-slate-200 pb-6">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
                    {casesPage.hero.badge}
                  </div>
                  <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <h3 className="text-2xl font-serif font-bold text-primary md:text-3xl">
                      {section.title}
                    </h3>
                    {section.description ? (
                      <p className="max-w-3xl text-sm text-slate-600 md:text-base">
                        {section.description}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="space-y-12">
                  {section.cases.map((entry, caseIndex) => (
                    <CaseShowcase
                      key={entry.title}
                      entry={entry}
                      labels={labels}
                      flip={caseIndex % 2 === 1}
                      accentIndex={sectionIndex + caseIndex}
                    />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <SectionCta
          content={dictionary.pricing.sectionCta}
          primaryHref={anchor("#contact")}
          secondaryHref={anchor("#services")}
        />
      </div>
    </main>
  );
}

function CaseShowcase({
  entry,
  labels,
  flip,
  accentIndex
}: {
  entry: CaseEntry;
  labels: { background: string; challenge: string; strategy: string; result: string };
  flip?: boolean;
  accentIndex: number;
}) {
  const gradients = [
    "from-primary/80 via-slate-900/70 to-slate-900/90",
    "from-gold/70 via-primary/60 to-slate-900/90",
    "from-slate-900/90 via-primary/50 to-slate-800/90"
  ];
  const gradient = gradients[accentIndex % gradients.length];
  return (
    <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
      <div
        className={`relative overflow-hidden rounded-xl bg-slate-900 text-white shadow-2xl ring-1 ring-slate-900/30 ${
          flip ? "lg:order-2" : ""
        } lg:col-span-5`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
        <Image
          src={entry.image}
          alt={entry.title}
          width={900}
          height={700}
          sizes="(min-width: 1024px) 480px, 100vw"
          className="h-full w-full object-cover opacity-80 mix-blend-luminosity"
          priority={accentIndex < 2}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em]">
          <span className="rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
            {entry.tag}
          </span>
          <span className="text-gold">Case</span>
        </div>
      </div>
      <div className={`${flip ? "lg:order-1" : ""} space-y-5 lg:col-span-7`}>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {entry.tag}
        </p>
        <h4 className="text-2xl font-serif font-bold text-primary md:text-3xl">
          {entry.title}
        </h4>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <CaseBlock label={labels.background} body={entry.background} />
          <CaseBlock label={labels.challenge} body={entry.challenge} variant="muted" />
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <CaseList label={labels.strategy} items={entry.strategy} />
          <CaseList label={labels.result} items={entry.result} variant="result" />
        </div>
      </div>
    </article>
  );
}

function CaseBlock({
  label,
  body,
  variant = "default"
}: {
  label: string;
  body: string;
  variant?: "default" | "muted";
}) {
  const tone =
    variant === "muted"
      ? "bg-slate-50/90 ring-slate-200/70"
      : "bg-white/90 ring-slate-200/80";
  return (
    <div className={`space-y-2 rounded-lg p-4 shadow-sm ring-1 ${tone}`}>
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
        {label}
      </p>
      <p className="leading-relaxed text-slate-700">{body}</p>
    </div>
  );
}

function CaseList({
  label,
  items,
  variant = "strategy"
}: {
  label: string;
  items: string[];
  variant?: "strategy" | "result";
}) {
  const tone =
    variant === "result"
      ? "bg-gradient-to-br from-white via-gold/5 to-primary/5 ring-gold/30"
      : "bg-slate-50/90 ring-slate-200/80";
  return (
    <div className={`space-y-3 rounded-lg p-4 shadow-sm ring-1 ${tone}`}>
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
        {label}
      </p>
      <ul className="space-y-2 text-slate-700">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed">
            <span
              className={`mt-1 h-2 w-2 rounded-full ${
                variant === "result" ? "bg-gold" : "bg-primary/80"
              }`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
