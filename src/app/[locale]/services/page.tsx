/* eslint-disable react/no-array-index-key */
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { SectionCta } from "@/components/section-cta";
import { type PricingCategory } from "@/lib/dictionaries";
import { getLocaleData } from "@/lib/metadata-helpers";

type PageProps = {
  params: { locale: string };
};

export default function ServicesPage({ params }: PageProps) {
  const { locale, dictionary } = getLocaleData(params.locale);
  const pricing = dictionary.pricing;
  const categories: PricingCategory[] = pricing.categories;

  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0]?.id ?? "employment"
  );

  const contactHref = { pathname: `/${locale}/contact`, hash: "contact" };
  const anchor = (hash: string) => ({
    pathname: `/${locale}`,
    hash: hash.startsWith("#") ? hash.slice(1) : hash
  });

  const current = useMemo(
    () => categories.find((c) => c.id === activeCategory) ?? categories[0],
    [activeCategory, categories]
  );

  return (
    <main className="bg-slate-50 text-slate-800" lang={locale}>
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-16 pt-24 md:flex-row md:items-center md:pb-20 md:pt-28">
          <div className="space-y-4 md:w-2/3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {pricing.hero.badgeLeft}
              <span className="text-white/70">·</span>
              {pricing.hero.badgeRight}
            </div>
            <h1 className="text-4xl font-serif font-bold md:text-5xl">
              {pricing.hero.heading}
            </h1>
            <p className="max-w-2xl text-base text-slate-100 md:text-lg">
              {pricing.hero.body}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>{pricing.hero.ctaPrimary}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={anchor("#cases")}>{pricing.hero.ctaSecondary}</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-semibold text-gold">{pricing.hero.promiseTitle}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-100">
                {pricing.hero.promiseItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-12 md:py-16">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-serif font-bold text-primary md:text-3xl">
            {pricing.categoriesIntro.title}
          </h2>
          <p className="text-sm text-slate-600">{pricing.categoriesIntro.description}</p>
        </div>

        <div
          id="categories"
          className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-6 shadow-lg ring-1 ring-slate-200/60"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-0 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          </div>
          <div className="relative flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                  activeCategory === category.id
                    ? "border-gold bg-gold/10 text-primary shadow-sm"
                    : "border-slate-200 bg-white text-primary hover:border-gold/60"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <section
          key={current.id}
          id={current.id}
          className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-xl ring-1 ring-slate-200/60 md:p-8"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-0 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          </div>
          <div className="relative space-y-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {current.name}
                </p>
                <p className="mt-1 text-sm text-slate-600">{current.description}</p>
              </div>
              <Button asChild variant="ghost" className="px-0 text-sm">
                <Link href={contactHref}>{pricing.hero.ctaPrimary} →</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {current.services.map((service, index) => (
                <div
                  key={`${service.title}-${index}`}
                  className="relative flex h-full flex-col rounded-sm border border-slate-200 bg-slate-50/70"
                >
                  {service.popular ? (
                    <span className="absolute -top-2 right-3 rounded-full bg-gold px-3 py-1 text-xs font-bold text-primary">
                      ★
                    </span>
                  ) : null}
                  <div className="border-b border-slate-100 px-4 py-3">
                    <p className="text-base font-semibold text-primary">
                      {service.title}
                    </p>
                    {service.subtitle ? (
                      <p className="text-xs text-slate-600">{service.subtitle}</p>
                    ) : null}
                  </div>
                  <ul className="flex-1 divide-y divide-slate-100">
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={`${service.title}-${fIndex}`}
                        className="px-4 py-3 text-sm text-primary"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span className="text-slate-700">{feature.label}</span>
                          <span className="text-right font-semibold text-primary">
                            {feature.price}
                          </span>
                        </div>
                        {feature.note ? (
                          <p className="mt-1 text-xs text-slate-500">{feature.note}</p>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="notes"
          className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-xl ring-1 ring-slate-200/60 md:p-8"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-0 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          </div>
          <div className="relative">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-serif font-bold text-primary">
                {pricing.includes.title}
              </h3>
              <p className="text-sm text-slate-600">{pricing.includes.subtitle}</p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {pricing.includes.blocks.map((block) => (
                <div
                  key={block.title}
                  className="rounded-sm border border-slate-200 bg-slate-50/60 p-4"
                >
                  <h4 className="text-sm font-semibold text-primary">{block.title}</h4>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionCta
          content={pricing.sectionCta}
          primaryHref={contactHref}
          secondaryHref={anchor("#services")}
        />
      </div>
    </main>
  );
}
