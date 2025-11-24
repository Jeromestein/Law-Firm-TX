import Link from "next/link";

type FooterProps = {
  locale: string;
};

export function SiteFooter({ locale }: FooterProps) {
  const anchor = (hash: string) => ({
    pathname: `/${locale}`,
    hash: hash.startsWith("#") ? hash.slice(1) : hash
  });

  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-primary py-12 text-slate-400"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 text-sm md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="font-serif text-2xl font-bold tracking-wider text-white">
            Alex Tian & PARTNERS
          </span>
          <p className="mt-4 max-w-xs">
            致力于为全球客户提供卓越的法律解决方案。精于资本，专于移民。
          </p>
        </div>
        <div>
          <h5 className="mb-4 font-bold text-white">联系方式</h5>
          <p className="mb-2">New York Office</p>
          <p className="mb-2">Shanghai Office</p>
          <p>Email: contact@lawfirm.com</p>
        </div>
        <div>
          <h5 className="mb-4 font-bold text-white">快速链接</h5>
          <ul className="space-y-2">
            <li>
              <Link
                href={anchor("#about")}
                className="transition hover:text-gold"
              >
                关于我们
              </Link>
            </li>
            <li>
              <Link
                href={anchor("#services")}
                className="transition hover:text-gold"
              >
                IPO 业务
              </Link>
            </li>
            <li>
              <Link
                href={{ pathname: `/${locale}/services` }}
                className="transition hover:text-gold"
              >
                服务与报价
              </Link>
            </li>
            <li>
              <Link
                href={anchor("#contact")}
                className="transition hover:text-gold"
              >
                移民评估
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-8 text-center text-xs">
        © 2026 TX Law Firm. All rights reserved.
      </div>
    </footer>
  );
}
