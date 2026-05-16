export type Lang = "zh" | "en"

export type NavItem = { title: string; items: string[] }
export type DictShape = {
  brandSub: string
  nav: NavItem[]
  langLabel: { zh: string; en: string }
  hero: { titleA: string; titleB: string; ledeA: string; ledeB: string; cta: string }
  services: { sectionTitle: string; items: { title: string; desc: string }[] }
  advantages: {
    sectionTitle: string
    left: { title: string; desc: string }[]
    right: { title: string; desc: string }[]
  }
  scenarios: { sectionTitle: string; items: { title: string; desc: string }[] }
  partners: { sectionTitle: string }
  footer: {
    desc: string
    headings: { services: string; solutions: string; about: string; contact: string }
    services: string[]
    solutions: string[]
    about: string[]
    contact: { phoneLabel: string; phone: string; emailLabel: string; email: string; addressLabel: string; address: string }
    copyright: string
    privacy: string
    terms: string
  }
  themeToggle: { toLight: string; toDark: string }
  langSelect: string
}

export const DICT: Record<Lang, DictShape> = {
  zh: {
    brandSub: "苏州珀瑞缇信息科技有限公司",
    nav: [
      { title: "数据产品", items: ["大模型数据集", "真实物理世界数据集", "真机数据"] },
      { title: "解决方案", items: ["定制化数据生产", "Agent部署", "具身设备二次开发"] },
      { title: "测评研究", items: ["大模型能力测评"] },
      { title: "资源能力", items: ["大模型专家资源", "标注基地资源", "具身工程师资源"] },
      { title: "联系我们", items: [] },
    ],
    langLabel: { zh: "简体中文", en: "English" },
    hero: {
      titleA: "AI驱动数据价值",
      titleB: "赋能智能未来",
      ledeA: "珀瑞缇PRT，一家专注于高质量数据采集、处理与标注的",
      ledeB: "人工智能数据公司",
      cta: "探索数据服务",
    },
    services: {
      sectionTitle: "数据业务范围",
      items: [
        { title: "数据采集", desc: "全渠道数据采集方案\n覆盖全球多种场景" },
        { title: "数据标注", desc: "高质量数据标注服务\n支持多种数据类型" },
        { title: "数据处理", desc: "数据清洗、脱敏、结构化\n提升数据可用性" },
        { title: "数据分析", desc: "数据分析与挖掘\n洞察数据价值" },
        { title: "数据合成", desc: "基于算法的数据合成\n扩充数据多样性" },
        { title: "数据平台", desc: "智能化数据管理平台\n提升作业效率" },
      ],
    },
    advantages: {
      sectionTitle: "核心优势",
      left: [
        { title: "丰富的行业经验", desc: "服务于自动驾驶、智慧城市、智能制造、互联网等多个行业，深刻理解AI数据需求" },
        { title: "高质量数据交付", desc: "严格的质量管理体系，结合多层质检机制，确保数据的高准确率与一致性" },
        { title: "全球化能力", desc: "全球化采集与交付能力，支持多语言、多地区数据采集与标注" },
      ],
      right: [
        { title: "先进的技术能力", desc: "自研数据处理与标注平台，结合AI技术提升生产效率与数据质量" },
        { title: "安全与合规", desc: "完善的数据安全体系与合规流程，保障客户数据安全" },
      ],
    },
    scenarios: {
      sectionTitle: "典型应用场景",
      items: [
        { title: "自动驾驶", desc: "提供高质量的道路场景数据，目标识别与障碍数据等" },
        { title: "具身智能", desc: "基于具身机器人基础架构开展深度定制化研发，适配多场景，完成部署地" },
        { title: "大模型与AI应用", desc: "提供图像、语音、文本等多模态数据，支持AI模型训练" },
      ],
    },
    partners: { sectionTitle: "合作伙伴" },
    footer: {
      desc: "珀瑞缇PRT，专注于高质量数据的采集、处理与标注，致力为全球客户提供专业、可靠、安全的AI数据服务，加速智能时代的到来。",
      headings: { services: "数据服务", solutions: "解决方案", about: "关于我们", contact: "联系我们" },
      services: ["数据采集", "数据标注", "数据处理", "数据分析", "数据合成", "数据平台"],
      solutions: ["自动驾驶", "具身智能", "大模型与AI应用"],
      about: ["公司介绍", "核心优势", "新闻资讯", "联系我们"],
      contact: {
        phoneLabel: "电话:", phone: "+86 21-5888 XXXX",
        emailLabel: "邮箱:", email: "info@prtdata.com",
        addressLabel: "地址:", address: "上海市浦东新区张江高科 XX路XXX号 (示例)",
      },
      copyright: "© 2024 珀瑞缇PRT 人工智能数据公司. 保留所有权利.",
      privacy: "隐私政策",
      terms: "服务条款",
    },
    themeToggle: { toLight: "切换到浅色模式", toDark: "切换到深色模式" },
    langSelect: "选择语言",
  },
  en: {
    brandSub: "Suzhou Purity",
    nav: [
      { title: "Data Products", items: ["LLM Datasets", "Real-World Physical Datasets", "Real-Device Data"] },
      { title: "Solutions", items: ["Custom Data Production", "Agent Deployment", "Embodied Device Customization"] },
      { title: "Research", items: ["LLM Capability Evaluation"] },
      { title: "Resources", items: ["LLM Expert Resources", "Annotation Center Resources", "Embodied AI Engineers"] },
      { title: "Contact Us", items: [] },
    ],
    langLabel: { zh: "简体中文", en: "English" },
    hero: {
      titleA: "AI-Driven Data Value",
      titleB: "Empowering an Intelligent Future",
      ledeA: "PRT — an AI data company dedicated to high-quality",
      ledeB: "data collection, processing, and annotation.",
      cta: "Explore Data Services",
    },
    services: {
      sectionTitle: "Data Service Portfolio",
      items: [
        { title: "Data Collection", desc: "Omni-channel collection solutions\ncovering diverse global scenarios" },
        { title: "Data Annotation", desc: "High-quality annotation services\nsupporting multiple data types" },
        { title: "Data Processing", desc: "Cleaning, anonymization, structuring\nto improve data usability" },
        { title: "Data Analysis", desc: "Analytics and mining\nto uncover the value of data" },
        { title: "Data Synthesis", desc: "Algorithmic data synthesis\nto expand dataset diversity" },
        { title: "Data Platform", desc: "Intelligent data management platform\nto boost operational efficiency" },
      ],
    },
    advantages: {
      sectionTitle: "Core Advantages",
      left: [
        { title: "Rich Industry Experience", desc: "Serving autonomous driving, smart cities, smart manufacturing, internet and more — with deep understanding of AI data needs." },
        { title: "High-Quality Delivery", desc: "Strict quality management combined with multi-layer QA ensures accuracy and consistency." },
        { title: "Global Capability", desc: "Global collection and delivery, supporting multi-language, multi-region collection and annotation." },
      ],
      right: [
        { title: "Advanced Technology", desc: "In-house data processing and annotation platform, enhanced with AI to improve efficiency and quality." },
        { title: "Security & Compliance", desc: "Comprehensive data security and compliance processes to safeguard client data." },
      ],
    },
    scenarios: {
      sectionTitle: "Typical Use Cases",
      items: [
        { title: "Autonomous Driving", desc: "High-quality road scene data, object recognition and obstacle data." },
        { title: "Embodied AI", desc: "Deep customization on embodied robotics platforms, adapted across scenarios and deployment sites." },
        { title: "Internet & AI Applications", desc: "Multimodal image, speech and text data to support AI model training." },
      ],
    },
    partners: { sectionTitle: "Our Partners" },
    footer: {
      desc: "PRT specializes in high-quality data collection, processing, and annotation — delivering professional, reliable, and secure AI data services to clients worldwide, accelerating the age of intelligence.",
      headings: { services: "Data Services", solutions: "Solutions", about: "About Us", contact: "Contact Us" },
      services: ["Data Collection", "Data Annotation", "Data Processing", "Data Analysis", "Data Synthesis", "Data Platform"],
      solutions: ["Autonomous Driving", "Embodied AI", "Internet & AI Applications"],
      about: ["Company", "Core Advantages", "News", "Contact"],
      contact: {
        phoneLabel: "Phone:", phone: "+86 21-5888 XXXX",
        emailLabel: "Email:", email: "info@prtdata.com",
        addressLabel: "Address:", address: "Zhangjiang Hi-Tech Park, Pudong New Area, Shanghai (example)",
      },
      copyright: "© 2024 PRT AI Data Company. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    themeToggle: { toLight: "Switch to light mode", toDark: "Switch to dark mode" },
    langSelect: "Select language",
  },
}
