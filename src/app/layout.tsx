import type { Metadata } from "next";

import "./globals.css";
import { defaultLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Apex Bridge 安桥律师事务所 | 全球资本与移民规划",
  description:
    "Apex Bridge 安桥律师事务所专注企业 IPO、资本市场与高端移民规划，为全球客户提供策略与合规并重的法律解决方案。安桥，让您安心的桥梁，助您跨越法律难题的桥梁。",
  other: {
    "apple-mobile-web-app-title": "MyWebSite"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={defaultLocale}
      suppressHydrationWarning
    >
      <body className="bg-slate-50 text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}
