export default function LocaleLayout({
  children
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return <div className="min-h-screen">{children}</div>;
}
