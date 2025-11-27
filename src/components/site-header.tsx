/* eslint-disable react/jsx-no-bind */
"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/language-toggle";
import { getDictionary } from "@/lib/dictionaries";
import { isSupportedLocale } from "@/lib/i18n";

type HeaderProps = {
  locale: string;
};

export function SiteHeader({ locale }: HeaderProps) {
  const dictionary = getDictionary(isSupportedLocale(locale) ? locale : "zh");
  const anchor = (hash: string) => ({
    pathname: `/${locale}`,
    hash: hash.startsWith("#") ? hash.slice(1) : hash
  });
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: anchor("#top"), label: dictionary.nav.home },
    { href: anchor("#about"), label: dictionary.nav.about },
    { href: anchor("#services"), label: dictionary.nav.services },
    { href: anchor("#cases"), label: dictionary.nav.cases },
    { href: { pathname: `/${locale}/services` }, label: dictionary.nav.pricing }
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-primary/90 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:px-8">
        <div className="flex flex-shrink-0 items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-sm p-2 text-white/80 transition hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 sm:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
          <span className="font-serif text-2xl font-bold tracking-wider text-gold">
            {dictionary.brandName}
          </span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden items-center space-x-4 lg:space-x-6 md:flex">
            {navLinks.map((item) => (
              <Link
                key={String(item.label)}
                href={item.href}
                className="px-1 py-2 text-sm font-medium transition hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="px-5 py-2 text-sm font-bold">
              <Link href={anchor("#contact")}>{dictionary.nav.consult}</Link>
            </Button>
          </div>
          <div className="ml-1">
            <LanguageToggle locale={isSupportedLocale(locale) ? locale : "zh"} />
          </div>
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-primary/95 text-sm text-white shadow-lg sm:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-2">
            {navLinks.map((item) => (
              <Link
                key={String(item.label)}
                href={item.href}
                className="block rounded-sm px-3 py-2 transition hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full justify-center px-3 py-2 text-sm font-semibold"
              onClick={() => setOpen(false)}
            >
              <Link href={anchor("#contact")}>{dictionary.nav.consult}</Link>
            </Button>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
