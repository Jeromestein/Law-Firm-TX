import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const services = [
  {
    title: "公司 IPO 与资本市场",
    description:
      "为企业提供从架构重组、Pre-IPO 融资到最终上市的全流程法律辅导。精通 SEC 监管规则，确保合规性与上市速度的完美平衡。",
    bullets: [
      "境外上市架构搭建 (VIE/红筹)",
      "SPAC 上市法律顾问",
      "私募股权与风险投资 (PE/VC)"
    ],
    label: "IPO"
  },
  {
    title: "高端移民与身份规划",
    description:
      "专为杰出人才、企业家及高净值家庭量身定制。我们不只处理申请，更为您规划教育、税务与资产的最优解。",
    bullets: ["EB-1A 杰出人才移民", "NIW 国家利益豁免", "L-1 / EB-1C 跨国高管调动"],
    label: "移民"
  }
];

const caseStudies = [
  {
    title: "某科技独角兽纳斯达克上市",
    tag: "IPO",
    color: "bg-gold text-primary",
    body: "历时8个月，解决复杂的VIE架构重组问题，成功通过SEC多轮问询。",
    image:
      "/ppl-typing.jpeg"
  },
  {
    title: "著名艺术家 EB-1A 无补件获批",
    tag: "移民",
    color: "bg-primary text-white",
    body: "针对客户媒体报道不足的弱点，重新挖掘其作品的商业价值与行业影响力。",
    image:
      "/eb-1a-green-card.jpg"
  },
  {
    title: "跨境医疗集团 5000万美金收购案",
    tag: "并购",
    color: "bg-gold text-primary",
    body: "主导尽职调查与交易结构设计，规避了潜在的税务风险与合规漏洞。",
    image:
      "/ppl-presenting.jpeg"
  }
];

export default function LocaleLanding({
  params
}: {
  params: { locale: string };
}) {
  return (
    <main className="relative">
      <div
        id="top"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary"
      >
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/ppl-presenting.jpeg"
          >
            <source src="/hero-section-videos.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary" />
        <div className="relative mx-auto max-w-4xl px-4 text-center fade-in-up">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gold">
            连接资本与全球机遇
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            从企业 IPO 到
            <br />
            <span className="italic text-goldlight">全球身份规划</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-light text-slate-300 md:text-xl">
            我们要做的不仅是提供法律建议，而是为您构建通往未来的桥梁。拥有深厚的北美学术背景与顶尖的实战经验。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#contact">预约咨询</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`/${params.locale}/services`}>探索业务</Link>
            </Button>
          </div>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-gold">
            咨询：半小时内免费，超过半小时按 $200/小时 收费
          </p>
        </div>
      </div>

      <section className="border-b border-slate-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="mb-8 text-sm uppercase tracking-widest text-slate-500">
            精英教育背景与资质
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-80 transition-all duration-500 hover:grayscale-0 hover:opacity-100 md:grayscale">
            <div className="flex items-center space-x-3">
              <Image
                src="/new_york_university_logo.jpeg"
                alt="NYU Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <span className="text-xl font-bold text-slate-800">
                New York University
              </span>
            </div>
            <div className="hidden h-8 w-px bg-slate-300 md:block" />
            <div className="flex items-center space-x-3">
              <Image
                src="/university_of_minnesota_logo.jpeg"
                alt="University of Minnesota Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <span className="text-xl font-bold text-slate-800">
                Univ. of Minnesota
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-slate-50 py-20"
        aria-labelledby="about-title"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <div className="relative">
              <div className="overflow-hidden rounded-sm bg-slate-200 shadow-2xl">
                <Image
                  src="/tx_profile.jpg"
                  alt="律师照片"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden max-w-xs border-l-4 border-gold bg-white p-6 text-sm shadow-xl md:block">
                <p className="font-serif text-xl italic text-primary">
                  “法律不仅是规则，更是商业世界的战略艺术。”
                </p>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-gold">
                首席合伙人
              </p>
              <h2
                id="about-title"
                className="mb-6 text-4xl font-serif font-bold text-primary"
              >
                Alex Tian
              </h2>
              <p className="mb-6 leading-relaxed text-slate-600">
                毕业于世界顶尖法学院 <strong>New York University (NYU)</strong>{" "}
                与 <strong>University of Minnesota</strong>。拥有跨越东西方资本市场的独特视野。
              </p>
              <p className="mb-8 leading-relaxed text-slate-600">
                不同于传统律师，我们深谙商业运作的底层逻辑。无论是协助独角兽企业赴美上市，还是为高净值家庭规划复杂的跨境身份，我们都以“极致严谨”与“策略先行”著称。
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  "拥有中美两地法律从业资格",
                  "专注 IPO 资本运作与 SEC 合规",
                  "解决疑难复杂的高端移民案件"
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center font-medium text-primary"
                  >
                    <span className="mr-3 inline-block h-2 w-2 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="#contact">预约咨询</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#services">查看服务</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-primary py-24 text-white"
        aria-labelledby="services-title"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 id="services-title" className="text-3xl font-serif md:text-4xl">
              核心法律服务
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-gold" />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative border border-white/5 bg-secondary p-10 transition duration-300 hover:border-gold/50"
              >
                <div className="absolute right-0 top-0 p-6 opacity-10 transition group-hover:opacity-20">
                  <svg
                    className="h-24 w-24 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-serif text-gold">
                  {service.title}
                </h3>
                <p className="mb-6 leading-relaxed text-slate-300">
                  {service.description}
                </p>
                <ul className="mb-8 space-y-2 text-sm text-slate-200">
                  {service.bullets.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <Button variant="ghost" className="border-b border-gold px-0">
                  了解 {service.label} 案例 →
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cases"
        className="bg-white py-24"
        aria-labelledby="cases-title"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2
                id="cases-title"
                className="text-3xl font-serif text-primary md:text-4xl"
              >
                近期成功案例
              </h2>
              <p className="text-slate-500">用结果说话，用专业护航</p>
            </div>
            <Link
              href="#"
              className="hidden text-sm font-bold text-primary transition hover:text-gold md:block"
            >
              查看全部 →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {caseStudies.map((item) => (
              <article
                key={item.title}
                className="group border border-slate-100 bg-slate-50 transition duration-300 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <div
                    className={`absolute left-4 top-4 px-3 py-1 text-xs font-bold ${item.color}`}
                  >
                    {item.tag}
                  </div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-serif text-xl text-primary transition group-hover:text-gold">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-sm text-slate-500">{item.body}</p>
                  <span className="border-b border-slate-300 pb-1 text-sm font-bold text-primary">
                    阅读详情
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
