import Link from "next/link";

import { Button } from "@/components/ui/button";

type ServiceBlock = {
  heading?: string;
  items: {
    label: string;
    price: string;
    note?: string;
  }[];
  footnote?: string;
};

type Section = {
  id: string;
  title: string;
  description?: string;
  blocks: ServiceBlock[];
};

const sections: Section[] = [
  {
    id: "trust",
    title: "信托与遗产规划",
    description: "简化的 living trust 套餐，快速落地。",
    blocks: [
      {
        items: [
          { label: "Single, living trust", price: "$1,000" },
          {
            label: "Single, living trust + grant deeds / pour-over will",
            price: "$1,300"
          },
          { label: "Couple, living trust", price: "$1,500" },
          {
            label: "Couple, living trust + grant deeds (2 pour-over wills)",
            price: "$2,000"
          }
        ]
      }
    ]
  },
  {
    id: "l1a",
    title: "职业移民｜L-1A / EB-1C",
    description: "跨境公司派遣与高管绿卡路径。",
    blocks: [
      {
        heading: "L-1A 初次",
        items: [
          {
            label: "律师费",
            price: "$17,000",
            note: "如被拒退 $7,500；补件 $6,000"
          },
          {
            label: "I-129 申请费",
            price: "$695 + $300 + $500",
            note: "小雇主"
          },
          { label: "加急费", price: "$2,805" },
          { label: "股票 LEON 登记费", price: "$50 - $300" },
          { label: "家属 I-539 律师费", price: "$750 / 人" },
          { label: "家属 I-539 申请费", price: "$470" }
        ]
      },
      {
        heading: "L-1A 续签",
        items: [
          {
            label: "律师费",
            price: "$17,000",
            note: "如被拒退 $7,500；补件 $6,000"
          },
          {
            label: "I-129 申请费",
            price: "$695 + $300 + $500",
            note: "小雇主"
          },
          { label: "加急费", price: "$2,805" },
          { label: "家属 L-2 律师费", price: "$750 / 人" },
          { label: "家属 L-2 申请费", price: "$470" }
        ]
      },
      {
        heading: "绿卡 I-140（EB-1C）",
        items: [
          {
            label: "律师费",
            price: "$17,000",
            note: "如被拒退 $7,500；补件 $6,000"
          },
          {
            label: "I-140 申请费",
            price: "$715 + $300",
            note: "小雇主"
          }
        ]
      }
    ]
  },
  {
    id: "eb1a",
    title: "杰出人才 EB-1A / NIW",
    description: "含中文资料翻译，不拆分隐藏费用。",
    blocks: [
      {
        heading: "EB-1A I-140",
        items: [
          {
            label: "律师费",
            price: "$15,000",
            note: "含中文资料翻译"
          },
          { label: "I-140 申请费", price: "$715 + $300" }
        ]
      },
      {
        heading: "NIW I-140",
        items: [
          {
            label: "律师费",
            price: "$15,000",
            note: "含中文资料翻译"
          },
          { label: "I-140 申请费", price: "$715 + $300" }
        ],
        footnote:
          "不含 I-485；I-485 律师费每位申请人 $1,500，申请费 $1,440。"
      }
    ]
  },
  {
    id: "perm",
    title: "PERM-based EB-2 / EB-3",
    description: "从劳工证到 I-140 的打包方案。",
    blocks: [
      {
        heading: "PERM + I-140",
        items: [
          {
            label: "律师费",
            price: "$9,000",
            note: "含 PERM + I-140"
          },
          { label: "I-140 申请费", price: "$715 + $300", note: "小雇主" },
          { label: "PERM 广告费", price: "$2,000 - 3,000" }
        ]
      },
      {
        heading: "I-485",
        items: [
          { label: "I-485 律师费", price: "$1,500 / 人" },
          { label: "I-485 申请费", price: "$1,440 / 人" }
        ]
      }
    ]
  },
  {
    id: "family",
    title: "亲属移民",
    description: "直系亲属绿卡全流程透明报价。",
    blocks: [
      {
        heading: "I-130 / I-485 并行",
        items: [
          {
            label: "律师费",
            price: "$2,000",
            note: "不含工卡/回美证；含则 $2,500"
          },
          { label: "I-130 申请费", price: "$675" },
          { label: "I-485 申请费", price: "$1,440" },
          { label: "I-131 申请费", price: "$630" },
          { label: "I-765 申请费", price: "$260" }
        ]
      },
      {
        heading: "I-130 领馆程序",
        items: [
          { label: "律师费", price: "$2,500" },
          { label: "I-130 申请费", price: "$675" },
          { label: "NVC 步骤费", price: "$325 + $120" },
          { label: "绿卡制作费", price: "$220" }
        ]
      },
      {
        heading: "面谈陪同",
        items: [
          { label: "律师陪同", price: "$1,000" },
          { label: "翻译陪同", price: "$700" }
        ]
      }
    ]
  },
  {
    id: "status",
    title: "身份延期 / 转换",
    description: "常见身份维持与转换申请。",
    blocks: [
      {
        heading: "身份延期 (EOS)",
        items: [
          { label: "律师费", price: "$2,000" },
          { label: "I-539 申请费", price: "$470" }
        ]
      },
      {
        heading: "B-2 转 F-1 (COS)",
        items: [
          { label: "律师费", price: "$1,000" },
          { label: "I-539 申请费", price: "$470" }
        ]
      },
      {
        heading: "其它 COS",
        items: [
          { label: "律师费", price: "$2,000" },
          { label: "I-539 申请费", price: "$470" }
        ]
      }
    ]
  },
  {
    id: "visas",
    title: "各类签证",
    description: "含小雇主费用提示，避免意外成本。",
    blocks: [
      {
        heading: "E-2",
        items: [
          { label: "律师费", price: "$10,000" },
          { label: "I-129 申请费", price: "$510 + $300", note: "小雇主" }
        ]
      },
      {
        heading: "H-1B",
        items: [
          {
            label: "律师费",
            price: "$3,000",
            note: "补件律师费 $1,000"
          },
          {
            label: "I-129 申请费",
            price: "$460 + $750 + $300 + $500",
            note: "小雇主；大雇主为 $730 + $1,500 + $600 + $500"
          }
        ]
      },
      {
        heading: "O-1",
        items: [
          {
            label: "律师费",
            price: "$10,000",
            note: "补件律师费 $1,500"
          },
          { label: "I-129 申请费", price: "$530 + $300", note: "小雇主" }
        ]
      }
    ]
  },
  {
    id: "others",
    title: "其他申请",
    description: "工卡、回美证、入籍与绿卡更新。",
    blocks: [
      {
        heading: "工卡",
        items: [
          { label: "律师费", price: "$500" },
          { label: "I-765 申请费", price: "$520" }
        ]
      },
      {
        heading: "回美证",
        items: [
          {
            label: "律师费",
            price: "$500",
            note: "每次打指纹延期，律师费 $200"
          },
          { label: "I-131 申请费", price: "$630" }
        ]
      },
      {
        heading: "入籍",
        items: [
          { label: "律师费", price: "$850" },
          { label: "N-400 申请费", price: "$760" }
        ]
      },
      {
        heading: "绿卡更新",
        items: [
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
  const anchor = (hash: string) => `/${params.locale}${hash}`;

  return (
    <main className="bg-slate-50 text-slate-800">
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 md:flex-row md:items-center md:py-20">
          <div className="space-y-4 md:w-2/3">
            <p className="text-sm uppercase tracking-[0.18em] text-gold">
              透明报价 · 即刻规划
            </p>
            <h1 className="text-4xl font-serif font-bold md:text-5xl">
              核心服务与费用一览
            </h1>
            <p className="max-w-2xl text-base text-slate-100 md:text-lg">
              30 分钟内咨询免费，超出部分按 $200/小时计费。
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
              <p className="text-sm uppercase tracking-[0.18em] text-gold">
                快速提示
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-100">
                <li>• 小雇主附加费已在表中标注。</li>
                <li>• 如遇补件 (RFE)，单独列出补件律师费。</li>
                <li>• 付款与退款条款以委托协议为准。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-16">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="space-y-6">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <h2 className="text-2xl font-serif font-bold text-primary md:text-3xl">
                  {section.title}
                </h2>
                {section.description ? (
                  <p className="mt-2 text-sm text-slate-600">
                    {section.description}
                  </p>
                ) : null}
              </div>
              <Link
                href={anchor("#contact")}
                className="text-sm font-semibold text-gold transition hover:text-gold/80"
              >
                预约咨询 →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {section.blocks.map((block, blockIndex) => (
                <div
                  key={`${section.id}-${blockIndex}`}
                  className="rounded-sm border border-slate-200 bg-white shadow-sm"
                >
                  <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
                    <p className="text-sm font-semibold text-primary">
                      {block.heading ?? section.title}
                    </p>
                    {block.footnote ? (
                      <p className="mt-1 text-xs text-slate-500">
                        {block.footnote}
                      </p>
                    ) : null}
                  </div>
                  <ul className="divide-y divide-slate-100">
                    {block.items.map((item) => (
                      <li
                        key={item.label}
                        className="flex flex-col gap-1 px-4 py-3 md:flex-row md:items-start md:justify-between"
                      >
                        <div className="text-sm font-medium text-primary">
                          {item.label}
                        </div>
                        <div className="text-sm text-slate-700">{item.price}</div>
                        {item.note ? (
                          <p className="text-xs text-slate-500 md:col-span-2">
                            {item.note}
                          </p>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
