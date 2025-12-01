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
  const loops = 2;
  const containerClass = [
    "relative overflow-hidden bg-slate-950 py-10 text-white",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={containerClass} aria-label="Logo marquee">
      <div className="mx-auto max-w-md md:max-w-2xl lg:max-w-4xl px-5 lg:px-12">
        <div className="relative w-full overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:z-10 before:block before:bg-[linear-gradient(to_right,rgb(4,6,15)_0%,rgba(4,6,15,0.95)_8%,rgba(4,6,15,0.1)_18%,rgba(4,6,15,0)_30%,rgba(4,6,15,0)_70%,rgba(4,6,15,0.1)_82%,rgba(4,6,15,0.95)_92%,rgb(4,6,15)_100%)]">
          <div className="flex flex-nowrap items-center justify-center gap-6 lg:gap-10">
            {Array.from({ length: loops }).map((_, loopIndex) => (
              <div
                key={`loop-${loopIndex}`}
                className="flex w-fit flex-nowrap items-center gap-8 lg:gap-8 animate-[marquee_30s_linear_infinite] will-change-transform motion-reduce:animate-none motion-reduce:will-change-auto"
              >
                {items.map((item) => (
                  <div
                    key={`${loopIndex}-${item.name}`}
                    className="flex min-w-[160px] items-center gap-1 lg:min-w-[160px]"
                  >
                    <Image
                      src={item.logo}
                      alt={item.alt}
                      width={56}
                      height={56}
                      className="h-12 w-auto object-contain"
                      draggable={false}
                    />
                    <span className="max-w-[120px] text-sm font-semibold leading-tight text-white break-words">
                      {item.name}
                    </span>
                  </div>
                ))}
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
