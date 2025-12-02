"use client";

import Image from "next/image";

type SchoolItem = {
  name: string;
  logo: string;
  alt?: string;
};

type SchoolLogoMarqueeProps = {
  items: SchoolItem[];
  caption?: string;
  className?: string;
  title?: string;
  pauseOnHover?: boolean;
};

export function SchoolLogoMarquee({
  items,
  caption,
  className,
  title,
  pauseOnHover = false
}: SchoolLogoMarqueeProps) {
  const loops = 2;
  const containerClass = ["bg-primary py-16 text-white", className].filter(Boolean).join(" ");
  const marqueeWrapperClass = ["relative w-full overflow-hidden", pauseOnHover ? "group" : ""]
    .filter(Boolean)
    .join(" ");
  const trackClass = [
    "flex w-fit flex-nowrap items-center gap-8 lg:gap-10 will-change-transform",
    "motion-reduce:animate-none motion-reduce:will-change-auto",
    pauseOnHover ? "group-hover:[animation-play-state:paused] [animation-play-state:running]" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={containerClass} aria-label="School logo marquee">
      <div className="mx-auto max-w-5xl px-5 lg:px-12">
        {title ? (
          <p className="mb-6 text-center text-sm uppercase tracking-[0.3em] text-gold">
            {title}
          </p>
        ) : null}
        <div className={marqueeWrapperClass}>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary via-primary/80 to-transparent z-10" />
          <div className="flex flex-nowrap items-center justify-center gap-6 lg:gap-10">
            {Array.from({ length: loops }).map((_, loopIndex) => (
              <div
                key={`loop-${loopIndex}`}
                className={trackClass}
                style={{ animation: "marquee var(--duration, 24s) linear infinite" }}
              >
                {items.map((item) => (
                  <div
                    key={`${loopIndex}-${item.name}`}
                    className="flex min-w-[200px] items-center gap-3 px-2"
                  >
                    <Image
                      src={item.logo}
                      alt={item.alt || item.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-sm object-contain bg-white/10"
                      draggable={false}
                    />
                    <span className="max-w-[200px] text-base font-semibold leading-tight text-white break-words">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {caption ? (
          <p className="mt-12 text-center text-sm uppercase tracking-[0.3em] text-gold">
            {caption}
          </p>
        ) : null}
      </div>
    </section>
  );
}
