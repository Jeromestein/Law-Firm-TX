import Link from "next/link";

import { getDictionary } from "@/lib/dictionaries";
import { isSupportedLocale } from "@/lib/i18n";

type FooterProps = {
  locale: string;
};

export function SiteFooter({ locale }: FooterProps) {
  const dictionary = getDictionary(isSupportedLocale(locale) ? locale : "zh");
  const anchor = (hash: string) => ({
    pathname: `/${locale}`,
    hash: hash.startsWith("#") ? hash.slice(1) : hash
  });

  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-primary py-12 text-slate-400"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 text-sm md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="font-serif text-2xl font-bold tracking-wider text-white">
            Alex Tian & PARTNERS
          </span>
          <p className="mt-4 max-w-xs">{dictionary.footer.tagline}</p>
        </div>
        <div>
          <h5 className="mb-4 font-bold text-white">{dictionary.footer.contactTitle}</h5>
          <p className="mb-2">{dictionary.footer.losAngeles}</p>
          <p className="mb-2">{dictionary.footer.irvine}</p>
          <p>{dictionary.footer.email}</p>
        </div>
        <div>
          <h5 className="mb-4 font-bold text-white">{dictionary.footer.quickLinksTitle}</h5>
          <ul className="space-y-2">
            <li>
              <Link
                href={anchor("#about")}
                className="transition hover:text-gold"
              >
                {dictionary.footer.aboutLink}
              </Link>
            </li>
            <li>
              <Link
                href={anchor("#services")}
                className="transition hover:text-gold"
              >
                {dictionary.footer.ipoLink}
              </Link>
            </li>
            <li>
              <Link
                href={{ pathname: `/${locale}/services` }}
                className="transition hover:text-gold"
              >
                {dictionary.footer.pricingLink}
              </Link>
            </li>
            <li>
              <Link
                href={anchor("#contact")}
                className="transition hover:text-gold"
              >
                {dictionary.footer.contactLink}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-8 text-center text-xs">
        {dictionary.footer.copyright}
      </div>
    </footer>
  );
}
