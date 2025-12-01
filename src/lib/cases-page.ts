import type { Locale } from "./i18n";

export type CaseEntry = {
  tag: string;
  title: string;
  background: string;
  challenge: string;
  strategy: string[];
  result: string[];
};

export type CaseSection = {
  title: string;
  description?: string;
  cases: CaseEntry[];
};

export type CasesPageContent = {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
  };
  sections: CaseSection[];
};

const casesContent: Record<Locale, CasesPageContent> = {
  en: {
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
  zh: {
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
  }
};

export function getCasesContent(locale: Locale): CasesPageContent {
  return casesContent[locale] ?? casesContent.zh;
}
