"use client";

import Image from "next/image";

type LogoItem = {
  name: string;
  logo: string;
  alt: string;
};

type LogoMarqueeProps = {
  items: LogoItem[];
  caption?: string;
  className?: string;
};

export function LogoMarquee({ items, caption, className }: LogoMarqueeProps) {
  const sequence = [...items, ...items];
  const containerClass = [
    "relative overflow-hidden bg-slate-950 py-10 text-white",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={containerClass} aria-label="Logo marquee">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-slate-950 via-slate-950/90 to-transparent" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden">
          <div className="flex min-w-max animate-[marquee_20s_linear_infinite] items-center gap-10 whitespace-nowrap">
            {sequence.map((item, index) => (
              <div
                key={`${index}-${item.name}`}
                className="flex min-w-[180px] items-center gap-3 px-2"
              >
                <Image
                  src={item.logo}
                  alt={item.alt}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
                <span className="text-sm font-semibold text-white">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        {caption && (
          <p className="mt-6 text-center text-sm text-slate-300">
            {caption}
          </p>
        )}
      </div>
    </section>
  );
}
