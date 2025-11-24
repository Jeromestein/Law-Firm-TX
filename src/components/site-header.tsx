import Link from "next/link";

import { Button } from "@/components/ui/button";

type HeaderProps = {
  locale: string;
};

export function SiteHeader({ locale }: HeaderProps) {
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
        <div className="hidden items-baseline space-x-6 md:flex">
          <Link
            href={anchor("#top")}
            className="px-3 py-2 text-sm font-medium transition hover:text-gold"
          >
            首页
          </Link>
          <Link
            href={anchor("#about")}
            className="px-3 py-2 text-sm font-medium transition hover:text-gold"
          >
            律师团队
          </Link>
          <Link
            href={anchor("#services")}
            className="px-3 py-2 text-sm font-medium transition hover:text-gold"
          >
            专业领域
          </Link>
          <Link
            href={anchor("#cases")}
            className="px-3 py-2 text-sm font-medium transition hover:text-gold"
          >
            成功案例
          </Link>
          <Link
            href={{ pathname: `/${locale}/services` }}
            className="px-3 py-2 text-sm font-medium transition hover:text-gold"
          >
            服务与报价
          </Link>
          <Button asChild className="px-5 py-2 text-sm font-bold">
            <Link href={anchor("#contact")}>预约咨询</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
