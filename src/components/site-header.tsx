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

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-primary/95 text-white backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <span className="font-serif text-2xl font-bold tracking-wider text-gold">
            Alex Tian & PARTNERS
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden items-baseline space-x-6 md:flex">
            <Link
              href={anchor("#top")}
              className="px-3 py-2 text-sm font-medium transition hover:text-gold"
            >
              {dictionary.nav.home}
            </Link>
            <Link
              href={anchor("#about")}
              className="px-3 py-2 text-sm font-medium transition hover:text-gold"
            >
              {dictionary.nav.about}
            </Link>
            <Link
              href={anchor("#services")}
              className="px-3 py-2 text-sm font-medium transition hover:text-gold"
            >
              {dictionary.nav.services}
            </Link>
            <Link
              href={anchor("#cases")}
              className="px-3 py-2 text-sm font-medium transition hover:text-gold"
            >
              {dictionary.nav.cases}
            </Link>
            <Link
              href={{ pathname: `/${locale}/services` }}
              className="px-3 py-2 text-sm font-medium transition hover:text-gold"
            >
              {dictionary.nav.pricing}
            </Link>
            <Button asChild className="px-5 py-2 text-sm font-bold">
              <Link href={anchor("#contact")}>{dictionary.nav.consult}</Link>
            </Button>
          </div>
          <div className="ml-1">
            <LanguageToggle locale={isSupportedLocale(locale) ? locale : "zh"} />
          </div>
        </div>
      </div>
    </nav>
  );
}
