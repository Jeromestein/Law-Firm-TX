/* eslint-disable react/no-array-index-key */
"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

type ServiceFeature = { label: string; price: string; note?: string };

type ServiceCard = {
  title: string;
  subtitle?: string;
  popular?: boolean;
  features: ServiceFeature[];
};

type Category = {
  id: string;
  name: string;
  description: string;
  services: ServiceCard[];
};

const categories: Category[] = [
  {
    id: "employment",
    name: "职业移民",
    description: "L-1A / EB-1C、EB-1A、NIW、PERM 与 I-485 身份调整。",
    services: [
      {
        title: "L-1A 初次/续签",
        subtitle: "跨国高管派遣",
        popular: true,
        features: [
          { label: "律师费", price: "$17,000", note: "如被拒退 $7,500；补件 $6,000" },
          { label: "I-129 申请费", price: "$695 + $300 + $500", note: "小雇主" },
          { label: "加急费", price: "$2,805" },
          { label: "家属 I-539 律师费", price: "$750 / 人" },
          { label: "家属 I-539 申请费", price: "$470" }
        ]
      },
      {
        title: "EB-1C 绿卡 I-140",
        subtitle: "跨国公司高管绿卡",
        features: [
          { label: "律师费", price: "$17,000", note: "如被拒退 $7,500；补件 $6,000" },
          { label: "I-140 申请费", price: "$715 + $300", note: "小雇主" }
        ]
      },
      {
        title: "杰出人才 EB-1A",
        subtitle: "含中文资料翻译",
        popular: true,
        features: [
          { label: "律师费", price: "$15,000", note: "含中文资料翻译" },
          { label: "I-140 申请费", price: "$715 + $300" }
        ]
      },
      {
        title: "国家利益豁免 NIW",
        subtitle: "科研/高学历人才",
        features: [
          { label: "律师费", price: "$15,000", note: "含中文资料翻译" },
          { label: "I-140 申请费", price: "$715 + $300" }
        ]
      },
      {
        title: "PERM 劳工证 + I-140",
        subtitle: "雇主担保绿卡",
        features: [
          { label: "律师费", price: "$9,000", note: "含 PERM + I-140" },
          { label: "I-140 申请费", price: "$715 + $300", note: "小雇主" },
          { label: "PERM 广告费", price: "$2,000 - 3,000" }
        ]
      },
      {
        title: "I-485 身份调整",
        subtitle: "境内转绿卡",
        features: [
          { label: "I-485 律师费", price: "$1,500 / 人" },
          { label: "I-485 申请费", price: "$1,440 / 人" }
        ]
      }
    ]
  },
  {
    id: "family",
    name: "亲属移民",
    description: "直系亲属绿卡、领馆程序与面谈陪同。",
    services: [
      {
        title: "I-130 / I-485 并行",
        subtitle: "境内调整",
        popular: true,
        features: [
          { label: "律师费", price: "$2,000", note: "含工卡/回美证则 $2,500" },
          { label: "I-130 申请费", price: "$675" },
          { label: "I-485 申请费", price: "$1,440" },
          { label: "I-131 申请费", price: "$630" },
          { label: "I-765 申请费", price: "$260" }
        ]
      },
      {
        title: "I-130 领馆程序",
        subtitle: "境外领馆面签",
        features: [
          { label: "律师费", price: "$2,500" },
          { label: "I-130 申请费", price: "$675" },
          { label: "NVC 步骤费", price: "$325 + $120" },
          { label: "绿卡制作费", price: "$220" }
        ]
      },
      {
        title: "面谈陪同",
        subtitle: "律师或翻译陪同",
        features: [
          { label: "律师陪同", price: "$1,000" },
          { label: "翻译陪同", price: "$700" }
        ]
      }
    ]
  },
  {
    id: "visas",
    name: "各类签证",
    description: "含小雇主费用提示，避免意外成本。",
    services: [
      {
        title: "E-2 投资签证",
        subtitle: "投资者签证",
        features: [
          { label: "律师费", price: "$10,000" },
          { label: "I-129 申请费", price: "$510 + $300", note: "小雇主" }
        ]
      },
      {
        title: "H-1B 工作签",
        subtitle: "特定职业工作许可",
        popular: true,
        features: [
          { label: "律师费", price: "$3,000", note: "补件律师费 $1,000" },
          {
            label: "I-129 申请费",
            price: "$460 + $750 + $300 + $500",
            note: "小雇主；大雇主 $730 + $1,500 + $600 + $500"
          }
        ]
      },
      {
        title: "O-1 杰出人才签",
        subtitle: "科学/艺术/体育/商业",
        features: [
          { label: "律师费", price: "$10,000", note: "补件律师费 $1,500" },
          { label: "I-129 申请费", price: "$530 + $300", note: "小雇主" }
        ]
      }
    ]
  },
  {
    id: "status",
    name: "身份延期/转换",
    description: "常见身份维持与转换申请。",
    services: [
      {
        title: "身份延期 (EOS)",
        subtitle: "当前身份续期",
        features: [
          { label: "律师费", price: "$2,000" },
          { label: "I-539 申请费", price: "$470" }
        ]
      },
      {
        title: "B-2 转 F-1 (COS)",
        subtitle: "旅游转学生",
        features: [
          { label: "律师费", price: "$1,000" },
          { label: "I-539 申请费", price: "$470" }
        ]
      },
      {
        title: "其它 COS",
        subtitle: "其它身份转换",
        features: [
          { label: "律师费", price: "$2,000" },
          { label: "I-539 申请费", price: "$470" }
        ]
      }
    ]
  },
  {
    id: "trust",
    name: "信托与遗产规划",
    description: "简化的 living trust 套餐，快速落地。",
    services: [
      {
        title: "Single living trust",
        subtitle: "单身信托",
        features: [{ label: "律师费", price: "$1,000" }]
      },
      {
        title: "Single + grant deeds",
        subtitle: "信托 + 过户文件",
        features: [{ label: "律师费", price: "$1,300", note: "含 pour-over will" }]
      },
      {
        title: "Couple living trust",
        subtitle: "夫妻联合信托",
        features: [{ label: "律师费", price: "$1,500" }]
      },
      {
        title: "Couple + grant deeds",
        subtitle: "信托 + 2 份过户文件",
        features: [{ label: "律师费", price: "$2,000", note: "含 2 份 pour-over wills" }]
      }
    ]
  },
  {
    id: "others",
    name: "其他申请",
    description: "工卡、回美证、入籍与绿卡更新。",
    services: [
      {
        title: "工卡申请",
        subtitle: "I-765",
        features: [
          { label: "律师费", price: "$500" },
          { label: "I-765 申请费", price: "$520" }
        ]
      },
      {
        title: "回美证",
        subtitle: "I-131",
        features: [
          { label: "律师费", price: "$500", note: "指纹延期律师费 $200" },
          { label: "I-131 申请费", price: "$630" }
        ]
      },
      {
        title: "入籍申请",
        subtitle: "N-400",
        features: [
          { label: "律师费", price: "$850" },
          { label: "N-400 申请费", price: "$760" }
        ]
      },
      {
        title: "绿卡更新",
        subtitle: "I-90",
        features: [
          { label: "律师费", price: "$800" },
          { label: "I-90 申请费", price: "$465" }
        ]
      }
    ]
  }
];

type PageProps = {
  params: { locale: string };
};

export default function ServicesPage({ params }: PageProps) {
  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0]?.id ?? "employment"
  );
  const anchor = (hash: string) => ({
    pathname: `/${params.locale}`,
    hash: hash.startsWith("#") ? hash.slice(1) : hash
  });
  const current = categories.find((c) => c.id === activeCategory) ?? categories[0];

  return (
    <main className="bg-slate-50 text-slate-800">
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-16 pt-24 md:flex-row md:items-center md:pb-20 md:pt-28">
          <div className="space-y-4 md:w-2/3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              透明报价
              <span className="text-white/70">·</span>
              即刻规划
            </div>
            <h1 className="text-4xl font-serif font-bold md:text-5xl">
              核心服务与费用一览
            </h1>
            <p className="max-w-2xl text-base text-slate-100 md:text-lg">
              30 分钟内咨询免费，超过部分按 $200/小时计费。
              所有费用为参考价，具体以个案评估为准。
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={anchor("#contact")}>预约咨询</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={anchor("#cases")}>查看案例</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-semibold text-gold">我们的承诺</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-100">
                <li>• 全程透明，绝无隐藏费用</li>
                <li>• 专业团队，平均执业 10+ 年经验</li>
                <li>• 分阶段收费，降低客户资金压力</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-12 md:py-16">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-serif font-bold text-primary md:text-3xl">
            服务分类
          </h2>
          <p className="text-sm text-slate-600">
            选择您需要的服务类型，查看详细的费用明细和说明。
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 rounded-sm bg-white p-4 shadow-sm">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                activeCategory === category.id
                  ? "border-gold bg-gold/10 text-primary"
                  : "border-slate-200 bg-white text-primary hover:border-gold/60"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <section
          key={current.id}
          id={current.id}
          className="space-y-6 rounded-sm bg-white p-6 shadow-sm"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {current.name}
              </p>
              <p className="mt-1 text-sm text-slate-600">{current.description}</p>
            </div>
            <Button asChild variant="ghost" className="px-0 text-sm">
              <Link href={anchor("#contact")}>咨询详情 →</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {current.services.map((service, index) => (
              <div
                key={`${service.title}-${index}`}
                className="relative flex h-full flex-col rounded-sm border border-slate-200 bg-slate-50/70"
              >
                {service.popular ? (
                  <span className="absolute -top-2 right-3 rounded-full bg-gold px-3 py-1 text-xs font-bold text-primary">
                    热门
                  </span>
                ) : null}
                <div className="border-b border-slate-100 px-4 py-3">
                  <p className="text-base font-semibold text-primary">
                    {service.title}
                  </p>
                  {service.subtitle ? (
                    <p className="text-xs text-slate-600">{service.subtitle}</p>
                  ) : null}
                </div>
                <ul className="flex-1 divide-y divide-slate-100">
                  {service.features.map((feature, fIndex) => (
                    <li
                      key={`${service.title}-${fIndex}`}
                      className="px-4 py-3 text-sm text-primary"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-slate-700">{feature.label}</span>
                        <span className="text-right font-semibold text-primary">
                          {feature.price}
                        </span>
                      </div>
                      {feature.note ? (
                        <p className="mt-1 text-xs text-slate-500">{feature.note}</p>
                      ) : null}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-slate-100 p-4">
                  <Button asChild className="w-full">
                    <Link href={anchor("#contact")}>咨询详情</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-sm bg-white p-6 shadow-sm">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-serif font-bold text-primary">
              费用包含说明
            </h3>
            <p className="text-sm text-slate-600">
              了解各项服务包含和不包含的内容，确保费用透明。
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-sm border border-slate-200 bg-slate-50/60 p-4">
              <h4 className="text-sm font-semibold text-primary">职业移民</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>✔ 包含：方案规划、材料清单、递交文件</li>
                <li>✔ 包含：补件思路与草稿</li>
                <li>✘ 不含：官方申请费、翻译费、加急费</li>
              </ul>
            </div>
            <div className="rounded-sm border border-slate-200 bg-slate-50/60 p-4">
              <h4 className="text-sm font-semibold text-primary">亲属移民</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>✔ 包含：材料清单、表格填写与递交</li>
                <li>✔ 包含：面谈准备要点</li>
                <li>✘ 不含：体检、翻译、邮寄/指纹费用</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-sm bg-primary text-white">
          <div className="mx-auto flex flex-col items-center gap-3 px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-gold">
                还有疑问？
              </p>
              <h3 className="mt-1 text-2xl font-serif font-bold">
                联系我们，获取免费 30 分钟咨询
              </h3>
              <p className="mt-2 text-sm text-slate-100">
                留下您的需求，我们将在 1 个工作日内回复。
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={anchor("#contact")}>预约咨询</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={anchor("#services")}>查看服务列表</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
