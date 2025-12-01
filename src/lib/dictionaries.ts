import type { Locale } from "./i18n";

export type NavContent = {
  home: string;
  about: string;
  services: string;
  cases: string;
  pricing: string;
  consult: string;
};

export type HomeService = {
  title: string;
  description: string;
  bullets: string[];
  label: string;
};

export type CaseStudy = {
  title: string;
  tag: string;
  color: string;
  body: string;
  image: string;
};

export type HomeContent = {
  hero: {
    eyebrow: string;
    heading: string;
    highlight: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
    note: string;
  };
  education: {
    title: string;
    nyu: string;
    minnesota: string;
    usc: string;
    ucla: string;
  };
  about: {
    title: string;
    role: string;
    quote: string;
    body1: string;
    body2: string;
    bullets: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  aboutPartner: {
    role: string;
    title: string;
    paragraphs: string[];
    imageAlt: string;
  };
  servicesSection: {
    title: string;
    services: HomeService[];
  };
  casesSection: {
    title: string;
    subtitle: string;
    viewAll: string;
    studies: CaseStudy[];
  };
};

export type PricingCategory = {
  id: string;
  name: string;
  description: string;
  services: {
    title: string;
    subtitle?: string;
    popular?: boolean;
    features: { label: string; price: string; note?: string }[];
  }[];
};

export type PricingContent = {
  hero: {
    badgeLeft: string;
    badgeRight: string;
    heading: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    promiseTitle: string;
    promiseItems: string[];
  };
  categoriesIntro: {
    title: string;
    description: string;
  };
  categories: PricingCategory[];
  sectionCta: {
    eyebrow: string;
    heading: string;
    description: string;
    primary: string;
    secondary: string;
  };
  includes: {
    title: string;
    subtitle: string;
    blocks: { title: string; items: string[] }[];
  };
};

export type FooterContent = {
  tagline: string;
  contactTitle: string;
  losAngeles: string;
  irvine: string;
  phoneLabel: string;
  phoneHref: string;
  emailLabel: string;
  emailHref: string;
  quickLinksTitle: string;
  aboutLink: string;
  ipoLink: string;
  pricingLink: string;
  contactLink: string;
  copyright: string;
};

export type Dictionary = {
  locale: Locale;
  brandName: string;
  nav: NavContent;
  footer: FooterContent;
  home: HomeContent;
  pricing: PricingContent;
  languageLabel: string;
  languageButton: string;
};

const dictionaries: Record<Locale, Dictionary> = {
  zh: {
    locale: "zh",
    brandName: "Apex Bridge 安桥律师事务所",
    languageLabel: "语言",
    languageButton: "EN / 中文",
    nav: {
      home: "首页",
      about: "律师团队",
      services: "专业领域",
      cases: "成功案例",
      pricing: "服务与报价",
      consult: "预约咨询"
    },
    footer: {
      tagline: "安桥，让您安心的桥梁，助您跨越法律难题的桥梁。",
      contactTitle: "联系方式",
      losAngeles: "纽约地址：60-20 Woodside Ave Suite 205, Woodside, NY 11377",
      irvine: "加州地址：7515 Irvine Center Dr Suite 130, Irvine, CA 92618",
      phoneLabel: "电话：949-213-5199",
      phoneHref: "tel:9492135199",
      emailLabel: "邮箱：alextian@apexbrg.com",
      emailHref: "mailto:alextian@apexbrg.com",
      quickLinksTitle: "快速链接",
      aboutLink: "关于我们",
      ipoLink: "IPO 业务",
      pricingLink: "服务与报价",
      contactLink: "移民评估",
      copyright: "© 2026 Apex Bridge Law Group. 保留所有权利。"
    },
    home: {
      hero: {
        eyebrow: "连接资本与全球机遇",
        heading: "从企业 IPO 到",
        highlight: "全球身份规划",
        subheading:
          "我们要做的不仅是提供法律建议，而是为您构建通往未来的桥梁。拥有深厚的北美学术背景与顶尖的实战经验。",
        ctaPrimary: "预约咨询",
        ctaSecondary: "探索业务",
        note: "咨询：半小时内免费，超过半小时按 $200/小时 收费"
      },
      education: {
        title: "精英教育背景与资质",
        nyu: "New York University",
        minnesota: "University of Minnesota",
        usc: "University of Southern California",
        ucla: "University of California, Los Angeles",
      },
      about: {
        role: "首席合伙人",
        title: "Alex Tian, Esq.",
        quote: "“法律不仅是规则，更是商业世界的战略艺术。”",
        body1:
          "毕业于世界顶尖法学院 New York University (NYU) 与 University of Minnesota。拥有跨越东西方资本市场的独特视野。",
        body2:
          "不同于传统律师，我们深谙商业运作的底层逻辑。无论是协助独角兽企业赴美上市，还是为高净值家庭规划复杂的跨境身份，我们都以“极致严谨”与“策略先行”著称。",
        bullets: [
          "拥有中美两地法律从业资格",
          "专注 IPO 资本运作与 SEC 合规",
          "解决疑难复杂的高端移民案件"
        ],
        ctaPrimary: "预约咨询",
        ctaSecondary: "查看服务"
      },
      aboutPartner: {
        role: "合伙人",
        title: "Yilei Huang, Esq.",
        imageAlt: "黄怡蕾律师照片",
        paragraphs: [
          "Yilei Huang 律师专注于移民、公司法及民事诉讼，代表个人与企业客户处理合同纠纷、股东争议及各类执行案件。",
          "在移民业务中，黄律师成功代理家庭及雇佣移民、身份调整等多类案件，尤其擅长国家利益豁免（NIW），为科技、科研、商业等领域的专业人士取得优异结果。",
          "除移民外，黄律师亦为企业与投资人提供公司架构、融资安排及合规咨询，并处理跨境交易与争议解决的全流程法律服务。",
          "加入 ApexBridge 之前，黄律师曾在洛杉矶与上海的知名律所（包括 Baker McKenzie FenXun 与金杜律师事务所）任职，协助跨国客户完成 IPO、公司治理与仲裁项目。",
          "黄律师获南加州大学（USC）法学硕士（LL.M.）及华东政法大学法学学士（LL.B.），现于 UCLA, Anderson School of Management 攻读 MBA，并担任加州认证公证员。"
        ]
      },
      servicesSection: {
        title: "核心法律服务",
        services: [
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
            bullets: [
              "EB-1A 杰出人才移民",
              "NIW 国家利益豁免",
              "L-1 / EB-1C 跨国高管调动"
            ],
            label: "移民"
          }
        ]
      },
      casesSection: {
        title: "近期成功案例",
        subtitle: "用结果说话，用专业护航",
        viewAll: "查看全部 →",
        studies: [
          {
            title: "某科技独角兽纳斯达克上市",
            tag: "IPO",
            color: "bg-gold text-primary",
            body: "历时8个月，解决复杂的VIE架构重组问题，成功通过SEC多轮问询。",
            image: "/ppl-typing.jpeg"
          },
          {
            title: "著名艺术家 EB-1A 无补件获批",
            tag: "移民",
            color: "bg-primary text-white",
            body: "针对客户媒体报道不足的弱点，重新挖掘其作品的商业价值与行业影响力。",
            image: "/eb-1a-green-card.jpg"
          },
          {
            title: "跨境医疗集团 5000万美金收购案",
            tag: "并购",
            color: "bg-gold text-primary",
            body: "主导尽职调查与交易结构设计，规避了潜在的税务风险与合规漏洞。",
            image: "/ppl-presenting.jpeg"
          }
        ]
      }
    },
    pricing: {
      hero: {
        badgeLeft: "透明报价",
        badgeRight: "即刻规划",
        heading: "核心服务与费用一览",
        body: "30 分钟内咨询免费，超过部分按 $200/小时计费。 所有费用为参考价，具体以个案评估为准。",
        ctaPrimary: "预约咨询",
        ctaSecondary: "查看案例",
        promiseTitle: "我们的承诺",
        promiseItems: [
          "全程透明，绝无隐藏费用",
          "专业团队，平均执业 10+ 年经验",
          "分阶段收费，降低客户资金压力"
        ]
      },
      categoriesIntro: {
        title: "服务分类",
        description: "选择您需要的服务类型，查看详细的费用明细和说明。"
      },
      categories: [
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
              features: [
                { label: "律师费", price: "$1,300", note: "含 pour-over will" }
              ]
            },
            {
              title: "Couple living trust",
              subtitle: "夫妻联合信托",
              features: [{ label: "律师费", price: "$1,500" }]
            },
            {
              title: "Couple + grant deeds",
              subtitle: "信托 + 2 份过户文件",
              features: [
                { label: "律师费", price: "$2,000", note: "含 2 份 pour-over wills" }
              ]
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
      ],
      sectionCta: {
        eyebrow: "还有疑问？",
        heading: "联系我们，获取免费 30 分钟咨询",
        description: "留下您的需求，我们将在 1 个工作日内回复。",
        primary: "预约咨询",
        secondary: "查看服务列表"
      },
      includes: {
        title: "费用包含说明",
        subtitle: "了解各项服务包含和不包含的内容，确保费用透明。",
        blocks: [
          {
            title: "职业移民",
            items: [
              "✔ 包含：方案规划、材料清单、递交文件",
              "✔ 包含：补件思路与草稿",
              "✘ 不含：官方申请费、翻译费、加急费"
            ]
          },
          {
            title: "亲属移民",
            items: [
              "✔ 包含：材料清单、表格填写与递交",
              "✔ 包含：面谈准备要点",
              "✘ 不含：体检、翻译、邮寄/指纹费用"
            ]
          }
        ]
      }
    }
  },
  en: {
    locale: "en",
    brandName: "Apex Bridge Law Group",
    languageLabel: "Language",
    languageButton: "中文 / EN",
    nav: {
      home: "Home",
      about: "Team",
      services: "Expertise",
      cases: "Case Studies",
      pricing: "Services & Pricing",
      consult: "Book a Call"
    },
    footer: {
      tagline: "Dedicated to delivering exceptional legal solutions. Capital-first, immigration-focused.",
      contactTitle: "Contact",
      losAngeles: "New York: 60-20 Woodside Ave Suite 205, Woodside, NY 11377",
      irvine: "California: 7515 Irvine Center Dr Suite 130, Irvine, CA 92618",
      phoneLabel: "Phone: 949-213-5199",
      phoneHref: "tel:9492135199",
      emailLabel: "Email: alextian@apexbrg.com",
      emailHref: "mailto:alextian@apexbrg.com",
      quickLinksTitle: "Quick Links",
      aboutLink: "About",
      ipoLink: "IPO Services",
      pricingLink: "Services & Pricing",
      contactLink: "Immigration Assessment",
      copyright: "© 2026 Apex Bridge Law Group. All rights reserved."
    },
    home: {
      hero: {
        eyebrow: "Connecting Capital with Global Opportunity",
        heading: "From IPO to",
        highlight: "Global Status Planning",
        subheading:
          "We deliver more than legal advice—we build your bridge to the future with deep U.S. training and battle-tested experience. The bridge that lets clients rest easy • your safe crossing over legal challenges.",
        ctaPrimary: "Book a Consultation",
        ctaSecondary: "Explore Services",
        note: "Consultations: first 30 minutes free, then $200/hour"
      },
      education: {
        title: "Education & Credentials",
        nyu: "New York University",
        minnesota: "University of Minnesota",
        usc: "University of Southern California",
        ucla: "Uiniversity of California, Los Angeles",
      },
      about: {
        role: "Managing Partner",
        title: "Alex Tian, Esq.",
        quote: "“Law is not just rules—it is the strategy of business.”",
        body1:
          "Graduate of top law schools New York University (NYU) and the University of Minnesota with a cross-border capital markets lens.",
        body2:
          "We think in business logic, not paperwork. From taking unicorns public to structuring complex cross-border status plans for HNW families, we lead with rigor and strategy.",
        bullets: [
          "Licensed in both China and the U.S.",
          "Focused on IPO capital work and SEC compliance",
          "Experts in complex, high-stakes immigration matters"
        ],
        ctaPrimary: "Book a Consultation",
        ctaSecondary: "View Services"
      },
      aboutPartner: {
        role: "Partner",
        title: "Yilei Huang, Esq.",
        imageAlt: "Portrait of Yilei Huang, Esq.",
        paragraphs: [
          "Yilei Huang is an attorney focusing her practice on immigration, corporate law, and civil litigation. She represents both individual and business clients in state courts, handling complex disputes involving contracts, shareholder matters, and enforcement actions.",
          "In her immigration practice, Ms. Huang has successfully represented clients in a wide range of matters, including family-based petitions, employment-based visas, and adjustment of status. She has particular experience with National Interest Waiver (NIW) petitions, where she has achieved favorable outcomes for professionals and researchers in fields such as science, technology, and business.",
          "In addition to immigration, Ms. Huang advises businesses and investors on corporate structures, financing arrangements, and compliance with U.S. regulations. She also provides comprehensive legal services in cross-border transactions and dispute resolution.",
          "Prior to joining ApexBridge, Ms. Huang worked at law firms in Los Angeles and Shanghai, including Baker McKenzie FenXun and King & Wood Mallesons, where she supported multinational clients in IPO projects, corporate governance, and arbitration cases.",
          "Ms. Huang earned her LL.M. from the University of Southern California (USC) and her LL.B. from East China University of Political Science and Law. She is currently pursuing her MBA at UCLA, Anderson School of Management. Besides her identity as an Attorney, she is also a commissioned California Notary Public."
        ]
      },
      servicesSection: {
        title: "Core Legal Services",
        services: [
          {
            title: "Company IPO & Capital Markets",
            description:
              "End-to-end support from restructuring and pre-IPO financing to ringing the bell. Fluent in SEC rules to balance speed with compliance.",
            bullets: [
              "Offshore listing structures (VIE/Red-chip)",
              "SPAC listing counsel",
              "Private equity and venture financing (PE/VC)"
            ],
            label: "IPO"
          },
          {
            title: "Premium Immigration & Status Planning",
            description:
              "Tailored for top talent, founders, and HNW families. We optimize education, tax, and asset plans—beyond form-filling.",
            bullets: [
              "EB-1A Extraordinary Ability",
              "NIW National Interest Waiver",
              "L-1 / EB-1C Multinational executives"
            ],
            label: "Immigration"
          }
        ]
      },
      casesSection: {
        title: "Recent Results",
        subtitle: "Let outcomes speak. Strategy protects.",
        viewAll: "View all →",
        studies: [
          {
            title: "Tech Unicorn Listed on Nasdaq",
            tag: "IPO",
            color: "bg-gold text-primary",
            body: "8-month sprint. Restructured VIE and cleared multiple SEC comment rounds.",
            image: "/ppl-typing.jpeg"
          },
          {
            title: "Artist EB-1A Approved with No RFE",
            tag: "Immigration",
            color: "bg-primary text-white",
            body: "Positioned limited media coverage as commercial impact and industry influence.",
            image: "/eb-1a-green-card.jpg"
          },
          {
            title: "$50M Cross-Border Healthcare Acquisition",
            tag: "M&A",
            color: "bg-gold text-primary",
            body: "Led diligence and structure to mitigate tax exposure and compliance gaps.",
            image: "/ppl-presenting.jpeg"
          }
        ]
      }
    },
    pricing: {
      hero: {
        badgeLeft: "Transparent Pricing",
        badgeRight: "Start Planning",
        heading: "Core Services & Fees",
        body: "First 30 minutes are free; afterward $200/hour. Fees are reference only—final quotes follow case review.",
        ctaPrimary: "Book a Consultation",
        ctaSecondary: "View Cases",
        promiseTitle: "Our Promise",
        promiseItems: [
          "No hidden fees—full transparency",
          "Senior team averaging 10+ years experience",
          "Stage-based billing to ease cash flow"
        ]
      },
      categoriesIntro: {
        title: "Service Categories",
        description: "Pick a category to see detailed pricing and notes."
      },
      categories: [
        {
          id: "employment",
          name: "Employment-Based",
          description: "L-1A / EB-1C, EB-1A, NIW, PERM, and I-485 adjustment.",
          services: [
            {
              title: "L-1A Initial/Extension",
              subtitle: "Multinational executives",
              popular: true,
              features: [
                { label: "Attorney fee", price: "$17,000", note: "$7,500 refunded if denied; RFE $6,000" },
                { label: "I-129 filing fee", price: "$695 + $300 + $500", note: "Small employer" },
                { label: "Premium processing", price: "$2,805" },
                { label: "Dependent I-539 attorney", price: "$750 / person" },
                { label: "Dependent I-539 fee", price: "$470" }
              ]
            },
            {
              title: "EB-1C I-140",
              subtitle: "Multinational manager green card",
              features: [
                { label: "Attorney fee", price: "$17,000", note: "$7,500 refunded if denied; RFE $6,000" },
                { label: "I-140 filing fee", price: "$715 + $300", note: "Small employer" }
              ]
            },
            {
              title: "EB-1A Extraordinary Ability",
              subtitle: "Includes Chinese-to-English translation",
              popular: true,
              features: [
                { label: "Attorney fee", price: "$15,000", note: "Translations included" },
                { label: "I-140 filing fee", price: "$715 + $300" }
              ]
            },
            {
              title: "NIW National Interest Waiver",
              subtitle: "Researchers / advanced degree",
              features: [
                { label: "Attorney fee", price: "$15,000", note: "Translations included" },
                { label: "I-140 filing fee", price: "$715 + $300" }
              ]
            },
            {
              title: "PERM + I-140",
              subtitle: "Employer-sponsored green card",
              features: [
                { label: "Attorney fee", price: "$9,000", note: "Covers PERM + I-140" },
                { label: "I-140 filing fee", price: "$715 + $300", note: "Small employer" },
                { label: "PERM ads", price: "$2,000 - 3,000" }
              ]
            },
            {
              title: "I-485 Adjustment",
              subtitle: "Green card in the U.S.",
              features: [
                { label: "Attorney fee", price: "$1,500 / person" },
                { label: "I-485 filing fee", price: "$1,440 / person" }
              ]
            }
          ]
        },
        {
          id: "family",
          name: "Family-Based",
          description: "Immediate relatives, consular processing, and interview prep.",
          services: [
            {
              title: "I-130 / I-485 Concurrent",
              subtitle: "Adjustment of status",
              popular: true,
              features: [
                { label: "Attorney fee", price: "$2,000", note: "With EAD/AP $2,500" },
                { label: "I-130 filing fee", price: "$675" },
                { label: "I-485 filing fee", price: "$1,440" },
                { label: "I-131 filing fee", price: "$630" },
                { label: "I-765 filing fee", price: "$260" }
              ]
            },
            {
              title: "I-130 Consular",
              subtitle: "Consular interview",
              features: [
                { label: "Attorney fee", price: "$2,500" },
                { label: "I-130 filing fee", price: "$675" },
                { label: "NVC fees", price: "$325 + $120" },
                { label: "Green card production", price: "$220" }
              ]
            },
            {
              title: "Interview Escort",
              subtitle: "Attorney or interpreter",
              features: [
                { label: "Attorney escort", price: "$1,000" },
                { label: "Interpreter", price: "$700" }
              ]
            }
          ]
        },
        {
          id: "visas",
          name: "Non-Immigrant Visas",
          description: "Includes small-employer fee guidance to avoid surprises.",
          services: [
            {
              title: "E-2 Investor",
              subtitle: "Investment visa",
              features: [
                { label: "Attorney fee", price: "$10,000" },
                { label: "I-129 filing fee", price: "$510 + $300", note: "Small employer" }
              ]
            },
            {
              title: "H-1B Specialty Occupation",
              subtitle: "Work authorization",
              popular: true,
              features: [
                { label: "Attorney fee", price: "$3,000", note: "RFE attorney $1,000" },
                {
                  label: "I-129 filing fee",
                  price: "$460 + $750 + $300 + $500",
                  note: "Small employer; large employer $730 + $1,500 + $600 + $500"
                }
              ]
            },
            {
              title: "O-1 Extraordinary Ability",
              subtitle: "Science / arts / sports / business",
              features: [
                { label: "Attorney fee", price: "$10,000", note: "RFE attorney $1,500" },
                { label: "I-129 filing fee", price: "$530 + $300", note: "Small employer" }
              ]
            }
          ]
        },
        {
          id: "status",
          name: "Extensions & Changes of Status",
          description: "Common maintenance and change requests.",
          services: [
            {
              title: "Extensions (EOS)",
              subtitle: "Extend current status",
              features: [
                { label: "Attorney fee", price: "$2,000" },
                { label: "I-539 filing fee", price: "$470" }
              ]
            },
            {
              title: "B-2 to F-1 (COS)",
              subtitle: "Visitor to student",
              features: [
                { label: "Attorney fee", price: "$1,000" },
                { label: "I-539 filing fee", price: "$470" }
              ]
            },
            {
              title: "Other COS",
              subtitle: "Other status changes",
              features: [
                { label: "Attorney fee", price: "$2,000" },
                { label: "I-539 filing fee", price: "$470" }
              ]
            }
          ]
        },
        {
          id: "trust",
          name: "Trusts & Estate",
          description: "Streamlined living trust packages for fast execution.",
          services: [
            {
              title: "Single living trust",
              subtitle: "Individual trust",
              features: [{ label: "Attorney fee", price: "$1,000" }]
            },
            {
              title: "Single + grant deeds",
              subtitle: "Trust + deed filings",
              features: [
                { label: "Attorney fee", price: "$1,300", note: "Includes pour-over will" }
              ]
            },
            {
              title: "Couple living trust",
              subtitle: "Joint trust",
              features: [{ label: "Attorney fee", price: "$1,500" }]
            },
            {
              title: "Couple + grant deeds",
              subtitle: "Trust + two deeds",
              features: [
                { label: "Attorney fee", price: "$2,000", note: "Includes two pour-over wills" }
              ]
            }
          ]
        },
        {
          id: "others",
          name: "Other Filings",
          description: "EAD, re-entry permit, naturalization, and green card renewals.",
          services: [
            {
              title: "EAD (Work Card)",
              subtitle: "I-765",
              features: [
                { label: "Attorney fee", price: "$500" },
                { label: "I-765 filing fee", price: "$520" }
              ]
            },
            {
              title: "Re-entry Permit",
              subtitle: "I-131",
              features: [
                { label: "Attorney fee", price: "$500", note: "Fingerprint reschedule $200" },
                { label: "I-131 filing fee", price: "$630" }
              ]
            },
            {
              title: "Naturalization",
              subtitle: "N-400",
              features: [
                { label: "Attorney fee", price: "$850" },
                { label: "N-400 filing fee", price: "$760" }
              ]
            },
            {
              title: "Green Card Renewal",
              subtitle: "I-90",
              features: [
                { label: "Attorney fee", price: "$800" },
                { label: "I-90 filing fee", price: "$465" }
              ]
            }
          ]
        }
      ],
      sectionCta: {
        eyebrow: "Still have questions?",
        heading: "Contact us for a free 30-minute consult",
        description: "Tell us your needs—we respond within one business day.",
        primary: "Book a Consultation",
        secondary: "See Service List"
      },
      includes: {
        title: "What Fees Include",
        subtitle: "Know what's included and excluded to keep pricing transparent.",
        blocks: [
          {
            title: "Employment-Based",
            items: [
              "✔ Includes: strategy, document checklist, filing",
              "✔ Includes: RFE strategy and drafts",
              "✘ Excludes: government fees, translation, premium processing"
            ]
          },
          {
            title: "Family-Based",
            items: [
              "✔ Includes: checklist, form prep, filing",
              "✔ Includes: interview preparation points",
              "✘ Excludes: medical exam, translation, mailing/biometrics fees"
            ]
          }
        ]
      }
    }
  }
};

export function getDictionary(locale: string | undefined | null): Dictionary {
  const normalized = locale === "zh-cn" ? "zh" : locale;
  if (normalized && normalized in dictionaries) {
    return dictionaries[normalized as keyof typeof dictionaries];
  }
  return dictionaries.zh;
}
