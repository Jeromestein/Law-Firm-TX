'use client';

import Image from 'next/image';
import type { HTMLAttributes } from 'react';
import type { MarqueeProps as FastMarqueeProps } from 'react-fast-marquee';
import FastMarquee from 'react-fast-marquee';
import { cn } from '@/lib/utils';

export type MarqueeProps = HTMLAttributes<HTMLDivElement>;

export const Marquee = ({ className, ...props }: MarqueeProps) => (
  <div
    className={cn('relative w-full overflow-hidden', className)}
    {...(props as any)}
  />
);

export type MarqueeContentProps = FastMarqueeProps;

export const MarqueeContent = ({
  loop = 0,
  autoFill = true,
  pauseOnHover = true,
  ...props
}: MarqueeContentProps) => (
  <FastMarquee
    autoFill={autoFill}
    loop={loop}
    pauseOnHover={pauseOnHover}
    {...(props as any)}
  />
);

export type MarqueeFadeProps = HTMLAttributes<HTMLDivElement> & {
  side: 'left' | 'right';
};

export const MarqueeFade = ({
  className,
  side,
  ...props
}: MarqueeFadeProps) => (
  <div
    className={cn(
      'absolute top-0 bottom-0 z-10 h-full w-24 from-background to-transparent',
      side === 'left' ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l',
      className
    )}
    {...(props as any)}
  />
);

export type MarqueeItemProps = HTMLAttributes<HTMLDivElement>;

export const MarqueeItem = ({ className, ...props }: MarqueeItemProps) => (
  <div
    className={cn('mx-2 flex-shrink-0 object-contain', className)}
    {...(props as any)}
  />
);

type SchoolLogo = {
  name: string;
  logo: string;
  alt?: string;
};

type SchoolLogoMarqueeProps = HTMLAttributes<HTMLElement> & {
  items: SchoolLogo[];
  caption?: string;
  title?: string;
  pauseOnHover?: boolean;
  speed?: number;
};

// School-specific marquee built with the base marquee primitives above.
// Uses react-fast-marquee for smooth hardware accelerated scrolling.
export const SchoolLogoMarquee = ({
  items,
  caption,
  className,
  title,
  pauseOnHover = false,
  speed = 30,
  ...props
}: SchoolLogoMarqueeProps) => (
  <section
    aria-label="School logo marquee"
    className={cn('bg-primary py-16 text-white', className)}
    {...(props as any)}
  >
    <div className="mx-auto max-w-5xl px-5 lg:px-12">
      {title ? (
        <p className="mb-6 text-center text-sm uppercase tracking-[0.3em] text-gold">
          {title}
        </p>
      ) : null}

      <Marquee className="group">
        <MarqueeFade
          side="left"
          className="from-primary via-primary/80 to-transparent"
        />
        <MarqueeFade
          side="right"
          className="from-primary via-primary/80 to-transparent"
        />
        <MarqueeContent
          gradient={false}
          pauseOnHover={pauseOnHover}
          speed={speed}
        >
          {items.map((item) => (
            <MarqueeItem
              key={item.name}
              className="flex min-w-[200px] items-center gap-3 px-3"
            >
              <span className="relative block h-12 w-12 overflow-hidden rounded-sm bg-white/10">
                <Image
                  alt={item.alt || item.name}
                  src={item.logo}
                  fill
                  sizes="48px"
                  className="object-contain"
                  draggable={false}
                />
              </span>
              <span className="max-w-[220px] text-base font-semibold leading-tight text-white">
                {item.name}
              </span>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>

      {caption ? (
        <p className="mt-12 text-center text-sm uppercase tracking-[0.3em] text-gold">
          {caption}
        </p>
      ) : null}
    </div>
  </section>
);
