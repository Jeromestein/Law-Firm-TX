"use client";

import type { Route } from "next";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { defaultLocale, isSupportedLocale, Locale } from "@/lib/i18n";

function buildTargetPath(pathname: string | null, targetLocale: Locale) {
  const path = pathname ?? "/";
  const segments = path.split("/");

  if (segments.length > 1 && isSupportedLocale(segments[1])) {
    segments[1] = targetLocale;
    return segments.join("/") || `/${targetLocale}`;
  }

  const suffix = path === "/" ? "" : path;
  return `/${targetLocale}${suffix}`;
}

export function LanguageToggle({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const target = locale === "zh" ? "en" : "zh";
  const isZh = locale === "zh";
  const currentLabel = isZh ? "中文" : "English";
  const otherLabel = isZh ? "English" : "中文";

  const onToggle = () => {
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=31536000`;
      const targetPath = buildTargetPath(pathname, target);
      router.replace(targetPath as Route);
    });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onToggle}
      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-gold"
      disabled={isPending}
    >
      <svg
        aria-hidden="true"
        className="h-3.5 w-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
        <path d="M3.5 9h17M3.5 15h17" />
        <path d="M12 3c-2 2.3-3.08 5.3-3 9 .08 3.62 1.1 6.64 3 9" />
        <path d="M12 3c2 2.3 3.08 5.3 3 9-.08 3.62-1.1 6.64-3 9" />
      </svg>
      <span className="inline-flex items-center gap-1.5">
        <span className="text-gold font-semibold">{currentLabel}</span>
        <span className="text-white/60">/ {otherLabel}</span>
      </span>
    </Button>
  );
}
