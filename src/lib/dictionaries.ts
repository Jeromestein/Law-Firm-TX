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
  href?: string;
};

export type CaseStudy = {
  title: string;
  tag: string;
  color: string;
  body: string;
  image: string;
  href: string;
};

export type CaseEntry = {
  tag: string;
  title: string;
  background: string;
  challenge: string;
  strategy: string[];
  result: string[];
  image: string;
};

export type CaseSection = {
  title: string;
  description?: string;
  cases: CaseEntry[];
};

export type HomeContent = {
  hero: {
    eyebrow: string;
    heading: string;
    highlight: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
    proof: string;
    note: string;
  };
  education: {
    title: string;
    subtitle: string;
    nyu: string;
    nyuDegree: string;
    minnesota: string;
    minnesotaDegree: string;
    usc: string;
    uscDegree: string;
    ucla: string;
    uclaDegree: string;
    harvard: string;
    harvardDegree: string;
  };
  educationMarquee: {
    caption: string;
  };
  about: {
    title: string;
    role: string;
    quote: string;
    imageAlt: string;
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
    readMore: string;
    studies: CaseStudy[];
  };
};

export type CasesPageContent = {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
  };
  sections: CaseSection[];
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

export type ContactContent = {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    phoneCta: string;
    emailCta: string;
  };
  offices: {
    title: string;
    subtitle: string;
    locations: { id: string; name: string; address: string }[];
  };
  channels: {
    title: string;
    description: string;
    items: { label: string; value: string; href: string; helper?: string }[];
  };
  sectionCta: {
    eyebrow: string;
    heading: string;
    description: string;
    primary: string;
    secondary: string;
  };
};

export type Dictionary = {
  locale: Locale;
  brandName: string;
  nav: NavContent;
  footer: FooterContent;
  home: HomeContent;
  casesPage: CasesPageContent;
  contact: ContactContent;
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
        highlight: "高端移民与全球身份规划",
        subheading:
          "我们要做的不仅是提供法律建议，而是为您构建通往未来的桥梁。拥有深厚的北美学术背景与顶尖的实战经验。安桥，让您安心的桥梁，助您跨越法律难题的桥梁。",
        ctaPrimary: "预约咨询",
        ctaSecondary: "探索业务",
        proof: "纽约 / 加州双执照律师团队，资本市场 + 高端移民双线专长",
        note: "咨询：半小时内免费，超过半小时按 $300/小时 收费"
      },
    education: {
      title: "精英教育背景与资质",
      subtitle: "",
      nyu: "纽约大学 (NYU)",
      nyuDegree: "NYU",
      minnesota: "明尼苏达大学 (University of Minnesota)",
      minnesotaDegree: "明尼苏达大学",
      usc: "南加州大学 (USC)",
      uscDegree: "USC",
      ucla: "加州大学洛杉矶分校（UCLA）",
      uclaDegree: "UCLA Anderson",
      harvard: "哈佛大学 (Harvard)",
      harvardDegree: "哈佛大学",
    },
    educationMarquee: {
      caption: "这些院校的训练和校友网络，帮助我们连接全球资源。"
    },
    about: {
      role: "首席合伙人",
      title: "Alex Tian, Esq.",
      quote: "“法律不仅是规则，更是商业世界的战略艺术。”",
      imageAlt: "Alex Tian 律师肖像",
        body1:
          "Alex Tian 律师持有纽约与加州执业资格，主攻证券发行（IPO、SPAC、私募）、跨境并购以及高端移民（含 EB-5 投资、EB-1C/L-1 跨国高管、EB-1A 杰出人才）。为计划赴美上市、募资或进行资产全球化配置的企业与投资人提供全流程策略与合规支持。",
        body2:
          "毕业于纽约大学与明尼苏达大学法学院（优等 J.D.，证券规制/公司治理/国际法方向），并在哈佛肯尼迪学院进修。曾任汤森路透证券法规研究员与医疗信息化顾问；曾任北京千颂科技研究总监，主导医药并购与跨境技术许可，拥有两项数据安全/数据共享专利，并发表多篇 IEEE 论文，致力于以生物科技与数据思维设计兼具创新与合规的资本与移民方案。",
        bullets: [
          "纽约 + 加州执照，专注美股发行、SPAC、跨境并购",
          "擅长 EB-5、EB-1C/L-1 高管调动与 EB-1A 杰出人才方案",
          "数据/生物科技背景，研究总监并拥两项数据安全/共享专利"
        ],
        ctaPrimary: "预约咨询",
        ctaSecondary: "查看服务"
      },
      aboutPartner: {
        role: "Of Counsel",
        title: "Yilei Huang, Esq.",
        imageAlt: "Yilei Huang 律师照片",
        paragraphs: [
          "Yilei Huang 律师专注于移民、公司法及民事诉讼，代表个人与企业客户处理合同纠纷、股东争议及各类执行案件。",
          "在移民业务中，黄律师成功代理家庭及雇佣移民、身份调整等多类案件，尤其擅长国家利益豁免（NIW），为科技、科研、商业等领域的专业人士取得优异结果。",
          "除移民外，黄律师亦为企业与投资人提供公司架构、融资安排及合规咨询，并处理跨境交易与争议解决的全流程法律服务。",
          "加入 Apex Bridge 之前，黄律师曾在洛杉矶与上海的知名律所（包括 Baker McKenzie FenXun 与金杜律师事务所）任职，协助跨国客户完成 IPO、公司治理与仲裁项目。",
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
            label: "IPO",
            href: "capital-markets"
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
            label: "移民",
            href: "immigration"
          }
        ]
      },
      casesSection: {
        title: "精选成功案例",
        subtitle: "能经得起审查的结果",
        viewAll: "查看全部案例 →",
        readMore: "阅读详情",
        studies: [
          {
            title: "EB-1A 医学 · 3 天极速获批",
            tag: "EB-1A · 医学",
            color: "bg-primary text-white",
            body: "主任医师 + 医博，证据分散，重组卓越主线，3 天无补件获批。",
            image: "/cases/eb1Doctor.jpg",
            href:"#case-1"
          },
          {
            title: "SEC 合规数字发行助力纳斯达克",
            tag: "资本市场 · 数字资产",
            color: "bg-gold text-primary",
            body: "Howey 测试 + Reg D/Reg S 设计，整合控股平台并成功美股上市。",
            image: "/cases/capitalDigital.webp",
            href: "#case-5"
          },
          {
            title: "亡配偶自请 + 极端困难无补件获批",
            tag: "I-360 亡配偶 · I-485",
            color: "bg-primary text-white",
            body: "长时间无身份，亡配偶递交 I-360 + I-485，极端困难论证获接受。",
            image: "/cases/widowWaiver.jpg",
            href: "#case-7"
          }
        ]
      }
    },
    casesPage: {
      hero: {
        badge: "成功案例",
        title: "能经得起审查的结果",
        subtitle: "横跨杰出人才、资本市场与数字资产、疑难豁免与人道救济的精选案例，按移民官视角编排。"
      },
      sections: [
        {
          title: "杰出人才 EB-1A",
          cases: [
            {
              tag: "EB-1A · 医学",
              title: "3 天极速获批 — 首都医科主任医师 + 清华医学博士",
              background:
                "首都医科大学主任医师，清华大学医学博士；带教研究生获奖多项，发表大量论文，多次登上主流媒体。",
              challenge:
                "成就在不同医院、课题、论文中分散，需要在极短篇幅内让移民官看懂她的“卓越能力”主线。",
              image: "/cases/eb1Doctor.jpg",
              strategy: [
                "精选科研奖励与课题，直接对应临床创新成果。",
                "凸显研究生导师身份，用学生获奖作为学术影响力的佐证。",
                "梳理电视、纸媒、门户报道，呈现持续的主流曝光，而非零散宣传。",
                "在文案开头清晰列出满足多项 EB-1A 条款的要点，免去翻附件才能理解的痛点。"
              ],
              result: [
                "EB-1A 3 天极速获批，无补件。",
                "获批后入职美国学术医疗中心，完成身份转换。"
              ]
            },
            {
              tag: "EB-1A · 艺术",
              title: "蒙古草原派创派画家 — 获批",
              background:
                "蒙古草原派画风创派艺术家，多次在美国及海外办展，出版多本画册与艺术专著。",
              challenge:
                "艺术领域缺少专利/引用等硬指标，需要把展览、评论、收藏转化为移民官认可的卓越能力证据。",
              image: "/cases/eb1Artist.jpg",
              strategy: [
                "系统整理重要个展与联展，强调受邀方为专业画廊/博物馆/文化机构。",
                "收集策展人、评论家前言与评论，证明独特风格与学术地位。",
                "突出出版的画集与专著，结合发行与收藏数据，展示商业价值与长期影响力。",
                "将“蒙古草原派”定位为可识别流派，证明其创派地位与传播贡献。"
              ],
              result: [
                "EB-1A 顺利获批，无补件。",
                "稳定身份后在美持续创作与拓展收藏群体。"
              ]
            },
            {
              tag: "EB-1A · 音乐",
              title: "二胡演奏家 — 全家绿卡获批",
              background:
                "知名二胡演奏家，曾在小泽征尔乐团演出；日籍华人，多家主流纸媒与音乐杂志专题报道。",
              challenge:
                "证据跨中日美三地，需要将演出记录与权威乐团、媒体报道连成清晰世界级履历。",
              image: "/cases/eb1Musician.jpg",
              strategy: [
                "以在小泽征尔乐团的身份为核心，证明处于演艺金字塔尖。",
                "整理纸媒与专业音乐杂志报道，并强调发行量与影响力。",
                "按时间轴列出独奏/领奏、国际巡演邀请，凸显“特邀艺术家”地位。",
                "设计配偶与子女的衍生身份路径，确保一家同步获批。"
              ],
              result: [
                "EB-1A 获批，全家取得绿卡。",
                "在美继续演出与教学，推广中国民族音乐。"
              ]
            },
            {
              tag: "EB-1A · 体育",
              title: "国家队游泳冠军转教练 — 转型获认可",
              background:
                "国内顶尖游泳运动员，获多枚金牌并多次登上官方体育媒体；退役后培养出奥运会、世锦赛、全运会冠军。",
              challenge:
                "以教练身份申报，需要说服移民局：教练事业是卓越运动能力的延伸，而非换行。",
              image: "/cases/eb1Coach.jpg",
              strategy: [
                "呈现运动员时期的官方排名、奖牌与认证，证明过往卓越能力。",
                "用弟子获得奥运/世锦赛冠军作为“教练维度”的顶尖影响力。",
                "结合官方媒体与体育组织报道，把个人成绩与弟子成绩串联呈现。",
                "论证运动员转型教练在行业中的普遍性，强调影响力被放大而非中断。"
              ],
              result: [
                "移民局认可“运动员到教练”的路径，EB-1A 获批。",
                "申请人取得绿卡，继续在美培养高水平运动员。"
              ]
            }
          ]
        },
        {
          title: "资本市场 · 数字资产 · 医疗养老",
          cases: [
            {
              tag: "资本市场 · 数字资产",
              title: "SEC 合规数字货币发行，助力纳斯达克上市（2025）",
              background:
                "为多家代币发行商提供合规 ICO/代币发行设计，将多个项目整合为控股公司并规划纳斯达克上市。",
              challenge:
                "监管收紧，代币可能被认定为证券；需规避“未注册发行”风险并为未来 IPO 留出合规路径。",
              image: "/cases/capitalDigital.webp",
              strategy: [
                "逐一进行 Howey 测试与证券属性分析，选择合规发行路径。",
                "设计 Reg D / Reg S 架构，起草面向数字资产的 PPM、认购与风险披露。",
                "搭建数字资产控股公司，统一股权与治理，整合多个项目。",
                "与承销商、会计师、财务顾问协同，为赴美 IPO / 纳斯达克申请做前置布局。"
              ],
              result: [
                "多家项目在合规前提下完成融资，避开执法风险。",
                "控股公司随后完成美股 IPO 并登录纳斯达克，提供主流资本市场退出通道。"
              ]
            },
            {
              tag: "医疗养老 · IPO",
              title: "加州华人养老集团纳斯达克上市 — 首个“华人养老概念股”（2025）",
              background:
                "整合加州多家老人日托、养老院、失智与阿尔兹海默症护理中心；年营收约 5000 万美元，定位首个华人养老概念股。",
              challenge:
                "整合不同机构与牌照，兼顾医疗/养老监管与证券法，并向美方投资人清晰讲好华人养老的商业与合规逻辑。",
              image: "/cases/healthcareIpo.webp",
              strategy: [
                "主导架构重组，统一控股平台，理顺股权、牌照与财务报表线。",
                "与管理层和审计合作，编制 IPO 级财报与风险揭示，清晰描述业务与监管环境。",
                "突出 5000 万美元营收与文化适配（中文、饮食、家庭参与）+ 专业记忆护理的双重优势。",
                "提供纳斯达克上市与公司治理咨询，满足定量与定性要求。"
              ],
              result: [
                "成功 IPO 并在纳斯达克挂牌，成为首个被关注的“华人养老概念股”。",
                "借助资本扩张服务网络，为华人及亚裔长者提供更专业、文化友好的照护。"
              ]
            }
          ]
        },
        {
          title: "高难度移民豁免 · 人道救济",
          cases: [
            {
              tag: "I-360 亡配偶 · I-485",
              title: "亡配偶自请 + 极端困难 — 从无证餐厅服务员到绿卡",
              background:
                "16 岁来美，长期无身份在餐馆工作；与美国公民结婚后，配偶尚未递交婚姻移民即去世；英语与收入有限。",
              challenge:
                "长期非法滞留且无已批 I-130，需在极端困难与裁量标准下说服移民局放行。",
              image: "/cases/widowWaiver.jpg",
              strategy: [
                "依据法规递交 I-360 亡配偶自请，归类直系亲属。",
                "同步递交 I-485，正面回应非法滞留与无证工作并陈述裁量理由。",
                "撰写极端困难陈述：海外无支持、返乡经济崩溃、美国家庭与社区是唯一支柱。",
                "设计强有力的 I-864 方案，联合担保人提供充足收入、报税与在职证明。"
              ],
              result: [
                "I-360 与 I-485 无补件获批，极端困难与裁量论点被接受。",
                "成功获绿卡，在美重建稳定生活。"
              ]
            },
            {
              tag: "I-601A + I-212",
              title: "为残障美籍子女父亲取得 I-212 与 I-601A 双豁免",
              background:
                "混合身份家庭；美籍子女兼有智力与肢体障碍，在麻省总医院长期治疗；父亲以非法入境方式进入美国并累积超期滞留。",
              challenge:
                "需走领馆移民签证，面对多重不予准入事由；必须用 I-601A + I-212 协同，尽量减少家庭分离时间。",
              image: "/cases/hardshipWaiver.jpg",
              strategy: [
                "梳理 INA 212(a) 不予准入条款与触发点，选择在美先行 I-601A。",
                "以美籍配偶为合格亲属论证极端困难，并详述残障子女对父亲的依赖。",
                "提交麻省总医院专家病历、护理与经济分析，说明父亲在照护与收入中的不可替代性。",
                "同步递交 I-212，获批后精确安排离境、DS-260 与面谈时间，控制分离周期。"
              ],
              result: [
                "I-601A 与 I-212 均获批，领馆发签未再要求额外豁免。",
                "父亲持移民签证回美，一家团聚，孩子持续接受原团队治疗。"
              ]
            }
          ]
        }
      ]
    },
    contact: {
      hero: {
        badge: "联系我们",
        title: "纽约 / 加州 双执照律师团队",
        subtitle: "提供预约、电话与邮箱咨询，1 个工作日内回复。",
        phoneCta: "拨打电话",
        emailCta: "发送邮件"
      },
      offices: {
        title: "办公室与邮寄地址",
        subtitle: "仅限预约来访，可提供线上会议。",
        locations: [
          {
            id: "ny",
            name: "纽约办公室",
            address: "60-20 Woodside Ave Suite 205, Woodside, NY 11377"
          },
          {
            id: "ca",
            name: "加州办公室",
            address: "7515 Irvine Center Dr Suite 130, Irvine, CA 92618"
          }
        ]
      },
      channels: {
        title: "即时联系方式",
        description: "请简述需求和时间安排，我们将在 1 个工作日内回应。",
        items: [
          {
            label: "电话",
            value: "949-213-5199",
            href: "tel:9492135199",
            helper: "工作日 9am - 5pm，可短信"
          },
          {
            label: "邮箱",
            value: "alextian@apexbrg.com",
            href: "mailto:alextian@apexbrg.com",
            helper: "24 小时内回复，附背景材料更快"
          }
        ]
      },
      sectionCta: {
        eyebrow: "预约咨询",
        heading: "半小时免费初步评估",
        description: "发送您的简要背景与目标，我们将给出可行路径与下一步建议。",
        primary: "立即预约",
        secondary: "查看案例"
      }
    },
    pricing: {
      hero: {
        badgeLeft: "透明报价",
        badgeRight: "即刻规划",
        heading: "核心服务与费用一览",
        body: "30 分钟内咨询免费，超过部分按 $300/小时计费。 所有费用为参考价，具体以个案评估为准。",
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
      consult: "Book a Consultation"
    },
    footer: {
      tagline: "Apex Bridge, Your safe crossing over legal challenges.",
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
          "More than just legal advice—we build your bridge to the future with deep U.S. training and hands-on experience.",
        ctaPrimary: "Book a Consultation",
        ctaSecondary: "Explore Services",
        proof: "Dual-licensed NY/CA; SEC capital markets + premium immigration focus",
        note: "Consultations: first 30 minutes free, then $300/hour"
      },
    education: {
      title: "Education & Credentials",
      subtitle: "",
      nyu: "New York University",
      nyuDegree: "NYU School of Law training",
      minnesota: "University of Minnesota",
      minnesotaDegree: "University of Minnesota Law training",
      usc: "University of Southern California",
      uscDegree: "USC Gould LL.M.",
      ucla: "University of California, Los Angeles",
      uclaDegree: "UCLA Anderson MBA (in progress)",
      harvard: "Harvard University",
      harvardDegree: "Harvard University continuing education",
    },
    educationMarquee: {
      caption: "Training and alumni networks across these schools connect us globally."
    },
    about: {
      role: "Managing Partner",
      title: "Alex Tian, Esq.",
      quote: "“Law is not just rules—it is the strategy of business.”",
      imageAlt: "Portrait of Alex Tian, Esq.",
        body1:
          "Xin (Alex) Tian is admitted in New York and California. He focuses on securities offerings (IPOs, SPACs, private placements), cross-border M&A, and premium immigration, including EB-5 investors, multinational executive transfers (L-1/EB-1C), and extraordinary ability cases. He counsels companies and investors raising capital, listing in the U.S., or structuring global asset allocations.",
        body2:
          "He holds an M.S. in Biology from New York University and a J.D., cum laude, from the University of Minnesota Law School (concentration in securities regulation, corporate governance, and international law), with further study at Harvard Kennedy School. Previously, he researched U.S. securities law at Thomson Reuters and consulted on electronic health records. He later served as Research Director at Beijing Qiansong Tech Development Co., Ltd., leading pharmaceutical acquisitions and cross-border tech licensing, earning two patents in data security and data sharing. He has published in IEEE venues and integrates biotech, data science, and law to design innovative, compliance-ready capital and immigration solutions.",
        bullets: [
          "Admitted in New York and California; focuses on IPOs, SPACs, and cross-border M&A",
          "Builds high-end immigration strategies for EB-5, L-1/EB-1C executives, and extraordinary ability",
          "Data/biotech background as research director with two data security/sharing patents and IEEE publications"
        ],
        ctaPrimary: "Book a Consultation",
        ctaSecondary: "View Services"
      },
      aboutPartner: {
        role: "Of Counsel",
        title: "Yilei Huang, Esq.",
        imageAlt: "Portrait of Yilei Huang, Esq.",
        paragraphs: [
          "Yilei Huang is an attorney focusing her practice on immigration, corporate law, and civil litigation. She represents both individual and business clients in state courts, handling complex disputes involving contracts, shareholder matters, and enforcement actions.",
          "In her immigration practice, Ms. Huang has successfully represented clients in a wide range of matters, including family-based petitions, employment-based visas, and adjustment of status. She has particular experience with National Interest Waiver (NIW) petitions, where she has achieved favorable outcomes for professionals and researchers in fields such as science, technology, and business.",
          "In addition to immigration, Ms. Huang advises businesses and investors on corporate structures, financing arrangements, and compliance with U.S. regulations. She also provides comprehensive legal services in cross-border transactions and dispute resolution.",
          "Prior to joining Apex Bridge, Ms. Huang worked at law firms in Los Angeles and Shanghai, including Baker McKenzie FenXun and King & Wood Mallesons, where she supported multinational clients in IPO projects, corporate governance, and arbitration cases.",
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
            label: "IPO",
            href: "capital-markets"
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
            label: "Immigration",
            href: "immigration"
          }
        ]
      },
      casesSection: {
        title: "Case Results",
        subtitle: "Outcomes built to withstand scrutiny.",
        viewAll: "See all cases →",
        readMore: "Read details",
        studies: [
          {
            title: "EB-1A · Medicine — Approved in 3 Days",
            tag: "EB-1A · Medicine",
            color: "bg-primary text-white",
            body: "Chief physician + Ph.D.; reorganized fragmented evidence into a crisp EB-1A story, approved with no RFE.",
            image: "/cases/eb1Doctor.jpg",
            href: "#case-1"
          },
          {
            title: "SEC-Compliant Digital Offerings to Nasdaq",
            tag: "Capital Markets · Digital Assets",
            color: "bg-gold text-primary",
            body: "Howey analyses plus Reg D/Reg S structures; consolidated issuers into a holding company and listed on Nasdaq.",
            image: "/cases/capitalDigital.webp",
            href: "#case-5"
          },
          {
            title: "Widow Self-Petition + Extreme Hardship Approved",
            tag: "I-360 Widow · I-485",
            color: "bg-primary text-white",
            body: "Long unlawful presence; filed I-360/I-485 with extreme-hardship and discretion arguments accepted without RFE.",
            image: "/cases/widowWaiver.jpg",
            href: "#case-7"
          }
        ]
      }
    },
    casesPage: {
      hero: {
        badge: "Case Studies",
        title: "Results that Withstand Scrutiny",
        subtitle:
          "Selected matters across extraordinary ability, capital markets, digital assets, and complex waivers—structured to survive the toughest review."
      },
      sections: [
        {
          title: "Extraordinary Ability (EB-1A)",
          cases: [
            {
              tag: "EB-1A · Medicine",
              title: "Approved in 3 Days — Chief Physician & Tsinghua-Trained Medical Scientist",
              background:
                "Chief physician at Capital Medical University with a Ph.D. from Tsinghua University; led graduate students with award-winning research, extensive publications, and repeated mainstream media features.",
              challenge:
                "Achievements were fragmented across hospitals, institutes, and publications; needed a concise extraordinary-ability narrative officers could grasp fast.",
              image: "/cases/eb1Doctor.jpg",
              strategy: [
                "Curated top research awards and grants and tied them to concrete clinical innovations.",
                "Highlighted graduate advising; used students’ national prizes as secondary proof of influence.",
                "Organized TV, print, and portal coverage to show sustained, mainstream recognition.",
                "Front-loaded how she met multiple EB-1A criteria within the first pages—no digging required."
              ],
              result: [
                "EB-1A approved in 3 calendar days with no RFE.",
                "Client obtained permanent residence and joined a U.S. academic medical center."
              ]
            },
            {
              tag: "EB-1A · Arts",
              title: "Founding Mongolian Grassland-Style Artist — Approved",
              background:
                "Pioneering artist of the “Mongolian grassland” school; multiple U.S. and international exhibitions; several published art books and curated collections.",
              challenge:
                "Recognition centered on exhibitions and reviews, not patents or citations; needed to show artistic influence met EB-1A standards.",
              image: "/cases/eb1Artist.jpg",
              strategy: [
                "Documented solo/group shows with invitations from recognized galleries and institutions.",
                "Collected catalog prefaces, reviews, and curators’ commentary to prove standing and originality.",
                "Showcased published art books and curated inclusions as evidence of commercial value and impact.",
                "Positioned the grassland style as a distinct school with the client as its founding voice."
              ],
              result: [
                "EB-1A approved without RFE.",
                "Client secured stable status to expand U.S. exhibitions and collector base."
              ]
            },
            {
              tag: "EB-1A · Music",
              title: "Erhu Virtuoso — Full Family Green Cards",
              background:
                "Distinguished erhu performer; played in orchestra under Maestro Seiji Ozawa; Japanese national of Chinese origin with mainstream print-media features.",
              challenge:
                "Evidence spanned China, Japan, and the U.S.; needed a coherent cross-border record linking performances to major orchestras and media.",
              image: "/cases/eb1Musician.jpg",
              strategy: [
                "Centered her role in Ozawa’s orchestra as proof of top-tier performance credentials.",
                "Organized print and specialty music coverage with circulation and reputation highlighted.",
                "Documented solo features, headline concerts, and tours to show recurring featured-artist invitations.",
                "Structured filing to cover spouse/child derivative residence via her EB-1A approval."
              ],
              result: [
                "EB-1A approved; entire family obtained green cards.",
                "Client continues performing and teaching in the U.S., promoting Chinese music globally."
              ]
            },
            {
              tag: "EB-1A · Sports",
              title: "Elite Swimmer Turned Championship Coach — Career Transition Recognized",
              background:
                "National-level swimming champion with major titles and official media; post-retirement became a coach producing Olympic, World Championship, and National Games gold medalists.",
              challenge:
                "Filed as a coach, not an active athlete; needed to prove coaching is a natural extension of extraordinary athletic ability.",
              image: "/cases/eb1Coach.jpg",
              strategy: [
                "Presented national rankings, medals, and authority certifications as past extraordinary proof.",
                "Showed coaching outcomes—training Olympic/World champions—as ongoing top-tier impact.",
                "Linked official sports-media and federation recognition to both her medals and her athletes’ wins.",
                "Explained the athlete-to-coach pathway as industry-standard, enhancing rather than ending ability."
              ],
              result: [
                "USCIS approved the petition recognizing the athlete-to-coach trajectory.",
                "Client obtained permanent residence and continues coaching elite swimmers in the U.S."
              ]
            }
          ]
        },
        {
          title: "Capital Markets · Digital Assets · Healthcare",
          cases: [
            {
              tag: "Capital Markets · Digital Assets",
              title: "SEC-Compliant Digital Asset Offerings Leading to Nasdaq Listing (2025)",
              background:
                "Advised multiple token issuers seeking ICO-style offerings under U.S. securities scrutiny, with a goal to consolidate projects into a holding company and list on Nasdaq.",
              challenge:
                "Avoid unregistered offerings, align structure and disclosures with SEC expectations, and preserve a path to a regulated IPO.",
              image: "/cases/capitalDigital.webp",
              strategy: [
                "Ran Howey analyses to classify each token (security vs. utility) and picked compliant paths.",
                "Designed Reg D/Reg S structures with PPMs, subscriptions, and risk factors tailored to digital assets.",
                "Built a consolidated holding company with clean cap tables and governance for multiple projects.",
                "Coordinated underwriters, auditors, and advisors to ready the holding company for a U.S. IPO/Nasdaq bid."
              ],
              result: [
                "Multiple issuers completed SEC-compliant raises while avoiding enforcement risk.",
                "The consolidated holding company completed a U.S. IPO and listed on Nasdaq, delivering a mainstream exit."
              ]
            },
            {
              tag: "Healthcare · IPO",
              title: "Chinese Senior Care Group IPO on Nasdaq — First “Chinese Elder Care” Concept Stock (2025)",
              background:
                "California senior-care group combining day-care, assisted living, high-end dementia and Alzheimer’s care; ~$50M annual revenue; aimed to be the first Nasdaq-listed Chinese elder-care concept stock.",
              challenge:
                "Consolidate varied operating entities, satisfy healthcare and securities rules, and explain the Chinese elder-care model to U.S. investors.",
              image: "/cases/healthcareIpo.webp",
              strategy: [
                "Led restructuring to merge multiple operators into one holding company with clean ownership, licenses, and reporting.",
                "Prepared IPO-ready financials, risk factors, and business descriptions covering patient mix and regulation.",
                "Positioned $50M revenue plus culturally tailored services (language, diet, family engagement) + specialized memory care.",
                "Advised on Nasdaq standards and governance to meet both quantitative and qualitative requirements."
              ],
              result: [
                "Completed IPO and listed on Nasdaq as a first-of-its-kind Chinese elder-care concept.",
                "Post-listing, expanded facilities and improved access to culturally attuned senior care in the U.S."
              ]
            }
          ]
        },
        {
          title: "Waivers & Humanitarian Relief",
          cases: [
            {
              tag: "I-360 Widow · I-485",
              title: "Widow Self-Petition & Extreme Hardship — From Undocumented Server to Permanent Resident",
              background:
                "Arrived at 16, long-term undocumented restaurant worker; married a U.S. citizen who died before a marriage case was filed; limited English, income, and status.",
              challenge:
                "Long unlawful presence, no pending I-130, and need to persuade USCIS under extreme hardship and discretion despite violations.",
              image: "/cases/widowWaiver.jpg",
              strategy: [
                "Filed I-360 widow self-petition as an immediate relative within statutory timelines.",
                "Filed I-485 with candid inadmissibility analysis on unlawful presence/work and discretionary arguments.",
                "Built an extreme-hardship brief: no support abroad, severe economic risk, U.S. family/community ties as lifeline.",
                "Structured strong I-864 with a joint sponsor, tax returns, W-2s, and employment proof."
              ],
              result: [
                "I-360 and I-485 approved without RFE; extreme hardship and discretion accepted.",
                "Client obtained a green card and rebuilt stability in the U.S."
              ]
            },
            {
              tag: "I-601A + I-212",
              title: "Combined I-212 & I-601A Waivers for Father of Disabled U.S. Citizen Child",
              background:
                "Mixed-status family; U.S. citizen child with intellectual and physical disabilities treated at MGH; father entered EWI and accrued unlawful presence.",
              challenge:
                "Needed consular processing with multiple inadmissibility grounds; required coordinated I-601A and I-212 to avoid prolonged family separation.",
              image: "/cases/hardshipWaiver.jpg",
              strategy: [
                "Mapped inadmissibility under INA 212(a) and triggered bars; chose provisional I-601A while in the U.S.",
                "Argued extreme hardship to the U.S. citizen spouse, documenting the disabled child’s dependence.",
                "Compiled medical evidence (MGH specialists), care duties, and economic analysis showing reliance on the father.",
                "Filed I-212 for advance consent, then tightly choreographed departure, DS-260, and interview timing."
              ],
              result: [
                "Both I-601A and I-212 approved; consular visa issued without extra waivers.",
                "Father returned on an immigrant visa, reunited the family, and secured continued treatment for the child."
              ]
            }
          ]
        }
      ]
    },
    contact: {
      hero: {
        badge: "Contact",
        title: "Dual-licensed in New York & California",
        subtitle: "Book a consult or share your matter; we respond within one business day.",
        phoneCta: "Call Now",
        emailCta: "Email Us"
      },
      offices: {
        title: "Offices & Mailing",
        subtitle: "By appointment only; virtual meetings available.",
        locations: [
          {
            id: "ny",
            name: "New York Office",
            address: "60-20 Woodside Ave Suite 205, Woodside, NY 11377"
          },
          {
            id: "ca",
            name: "California Office",
            address: "7515 Irvine Center Dr Suite 130, Irvine, CA 92618"
          }
        ]
      },
      channels: {
        title: "Direct Lines",
        description: "Tell us your goals and timing so we can prepare next steps.",
        items: [
          {
            label: "Phone",
            value: "949-213-5199",
            href: "tel:9492135199",
            helper: "Weekdays 9am-5pm; text for urgent matters"
          },
          {
            label: "Email",
            value: "alextian@apexbrg.com",
            href: "mailto:alextian@apexbrg.com",
            helper: "Replies within 24 hours; include background for faster review"
          }
        ]
      },
      sectionCta: {
        eyebrow: "Get Started",
        heading: "Book a consult in minutes",
        description: "First 30 minutes are free; longer calls at $300/hour if needed.",
        primary: "Book a Consultation",
        secondary: "View Case Results"
      }
    },
    pricing: {
      hero: {
        badgeLeft: "Transparent Pricing",
        badgeRight: "Start Planning",
        heading: "Core Services & Fees",
        body: "First 30 minutes are free; afterward $300/hour. Fees are reference only—final quotes follow case review.",
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
