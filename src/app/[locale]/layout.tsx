import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isSupportedLocale } from "@/lib/i18n";

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = isSupportedLocale(params.locale) ? params.locale : "zh";
  return (
    <div
      className="flex min-h-screen flex-col bg-slate-50 text-slate-800"
      lang={locale}
    >
      <SiteHeader locale={locale} />
      <div className="flex-1 pt-8 md:pt-8">{children}</div>
      <SiteFooter locale={locale} />
    </div>
  );
}
