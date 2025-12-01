import Link from "next/link";

import { Button } from "@/components/ui/button";

type CtaContent = {
  eyebrow: string;
  heading: string;
  description: string;
  primary: string;
  secondary: string;
};

type SectionCtaProps = {
  content: CtaContent;
  primaryHref: Parameters<typeof Link>[0]["href"];
  secondaryHref: Parameters<typeof Link>[0]["href"];
};

export function SectionCta({ content, primaryHref, secondaryHref }: SectionCtaProps) {
  return (
    <section className="rounded-sm bg-primary text-white">
      <div className="mx-auto flex flex-col items-center gap-3 px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-gold">
            {content.eyebrow}
          </p>
          <h3 className="mt-1 text-2xl font-serif font-bold">{content.heading}</h3>
          <p className="mt-2 text-sm text-slate-100">{content.description}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 md:justify-end">
          <Button asChild size="lg">
            <Link href={primaryHref}>{content.primary}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={secondaryHref}>{content.secondary}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
