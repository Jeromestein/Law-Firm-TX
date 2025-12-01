"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
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
  const [activeSection, setActiveSection] = useState<string>(
    casesPage.sections[0]?.title ?? ""
  );
  const currentSection = useMemo(
    () => casesPage.sections.find((s) => s.title === activeSection) ?? casesPage.sections[0],
    [activeSection, casesPage.sections]
  );
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

  return (
    <main className="bg-slate-50 text-slate-800" lang={locale}>
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-16 pt-24 md:pb-20 md:pt-28">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
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

      <div className="mx-auto max-w-6xl space-y-10 px-4 py-12 md:py-16">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-primary md:text-3xl">
            {casesPage.hero.badge}
          </h2>
          <p className="text-sm text-slate-600">
            {casesPage.hero.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 rounded-sm bg-white p-4 shadow-sm ring-1 ring-slate-200/70">
          {casesPage.sections.map((section) => (
            <button
              key={section.title}
              type="button"
              onClick={() => setActiveSection(section.title)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                activeSection === section.title
                  ? "border-gold bg-gold/10 text-primary"
                  : "border-slate-200 bg-white text-primary hover:border-gold/60"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {currentSection ? (
          <section
            key={currentSection.title}
            className="space-y-6 rounded-sm bg-white p-6 shadow-sm ring-1 ring-slate-200/80"
          >
            <div className="space-y-2 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                {currentSection.title}
              </p>
              {currentSection.description ? (
                <p className="text-sm text-slate-600">{currentSection.description}</p>
              ) : null}
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {currentSection.cases.map((item) => (
                <CaseCard key={item.title} entry={item} labels={labels} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}

function CaseCard({
  entry,
  labels
}: {
  entry: CaseEntry;
  labels: { background: string; challenge: string; strategy: string; result: string };
}) {
  return (
    <article className="flex h-full flex-col rounded-sm border border-slate-200 bg-slate-50/70 p-5 shadow-sm">
      <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
        {entry.tag}
      </div>
      <h3 className="text-lg font-serif font-bold text-primary md:text-xl">{entry.title}</h3>
      <div className="mt-4 space-y-3 text-sm text-slate-700">
        <CaseBlock label={labels.background} body={entry.background} />
        <CaseBlock label={labels.challenge} body={entry.challenge} />
        <CaseList label={labels.strategy} items={entry.strategy} />
        <CaseList label={labels.result} items={entry.result} />
      </div>
    </article>
  );
}

function CaseBlock({ label, body }: { label: string; body: string }) {
  return (
    <div className="space-y-1">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {label}
      </p>
      <p className="leading-relaxed text-slate-700">{body}</p>
    </div>
  );
}

function CaseList({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {label}
      </p>
      <ul className="space-y-2 rounded-sm bg-white/60 p-3 text-slate-700 ring-1 ring-slate-200/70">
        {items.map((item) => (
          <li key={item} className="leading-relaxed">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
