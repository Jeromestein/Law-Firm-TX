"use client";

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

  const onToggle = () => {
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=31536000`;
      const targetPath = buildTargetPath(pathname, target);
      router.replace(targetPath);
    });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onToggle}
      className="text-xs font-semibold text-white hover:text-gold"
      disabled={isPending}
    >
      {locale === defaultLocale ? "EN / 中文" : "中文 / EN"}
    </Button>
  );
}
