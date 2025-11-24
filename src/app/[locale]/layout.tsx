import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800">
      <SiteHeader locale={params.locale} />
      <div className="flex-1 pt-8 md:pt-8">{children}</div>
      <SiteFooter locale={params.locale} />
    </div>
  );
}
