import { BussinesPresentation, ChinaBusinessConsulting, ChinesEscritorioBrasil, ClassroomLearningMoment, OfficeWorkFocus } from "@flavor/constants/assets/services/secoundSection";
import type { Item } from "@pages/home/layouts/secoundSection/components/services/item/types";

export const servicesList: Array<Item> = [
    // English
    {
        id: 0,
        name: 'Professional Document Translation',
        link: '#',
        icon: 'fa-solid fa-file-invoice fa-beat fa-2xl',
        textButon: 'Order',
        descriptions: [
            { description: 'Technical translation', id: 0 },
            { description: 'Legal translation', id: 1 },
            { description: 'Corporate and institucional translations', id: 2 },
            { description: 'With precision, confidentiality, and cultural expertise', id: 3 },
        ],
        detailsService: [{
            id: 1,
            text: `We deliver technical, legal, corporate, and institucional translations with precise terminology, confidentiality, and cultural alignment`
        },
        {
            id: 2,
            text: `Each document is handled with care to reflect your company’s professionalism across languages and markets`
        }],
        language: 'en',
        midia: ChinesEscritorioBrasil
    },
    {
        id: 1,
        name: 'Interpretation for Meetings and Events',
        link: '#',
        icon: 'fa-solid fa-calendar-days fa-beat fa-2xl',
        textButon: 'Order',
        descriptions: [
            { description: 'Highly prepared and discreet professionals ', id: 4 },
            { description: 'Simultaneous and consecutive interpretation', id: 5 },
            { description: 'Fluent and secure real-time communication', id: 6 },
        ],
        detailsService: [{
            id: 1,
            text: 'Our interpreters are highly trained and discreet, supporting business meetings, trade delegations, and major events with simultaneous and consecutive interpretation'
        },
        {
            id: 2,
            text: `We ensure seamless, reliable communicaƟon during high stakes interactions`
        }],
        language: 'en',
        midia: BussinesPresentation
    },
    {
        id: 2,
        name: 'High-Level Language Training',
        link: '#',
        icon: 'fa-solid fa-graduation-cap fa-beat fa-2xl',
        textButon: 'Order',
        descriptions: [
            { description: 'Mandarin for Executives, Youth, and Children', id: 8 },
            { description: 'Specialized tutors in Mandarin Chinese', id: 9 },
            { description: 'Customized lessons with high-impact methodology', id: 10 },
            { description: 'Practical focus and cultural immersion', id: 11 }
        ],
        detailsService: [{
            id: 1,
            text: `We offer high-impact educacional programs with expert tutors in Mandarin Chinese, tailored to executives, entrepreneurs, teens, and children`
        },
        {
            id: 2,
            text: `Lessons are personalized and results-driven, combining linguistic excellence with practical, real-world communication`
        }],
        language: 'en',
        midia: ClassroomLearningMoment
    },
    {
        id: 13,
        name: 'On-Site Consulting in China',
        link: '#',
        icon: 'fa-solid fa-building-user fa-beat fa-2xl',
        textButon: 'Order',
        descriptions: [
            { description: 'Local presence and support in strategic engagements', id: 4 },
            { description: 'Specialized Mandarin language tutors', id: 5 },
            { description: 'We ensure cultural understanding', id: 6 },
            { description: 'Practical assistance and precise business guidance', id: 7 },
        ],
        detailsService: [{
            id: 1,
            text: 'We provide local, strategic consulting for companies operating in China, including presence at key meetings and support in commercial engagements'
        },
        {
            id: 2,
            text: `This service ensures cultural clarity and practical assistance during your company’s operations or expansion within China`
        }],
        language: 'en',
        midia: ChinaBusinessConsulting
    },
    {
        id: 14,
        name: 'ConsulƟng for Company FormaƟon in China',
        link: '#',
        icon: 'fa-solid fa-building fa-beat fa-2xl',
        textButon: 'Order',
        descriptions: [
            { description: 'Business establishment in the Chinese market', id: 4 },
            { description: 'Full support with legal registration and corporate structuring', id: 5 },
            { description: 'Legal, commercial, and instituƟonal guidance', id: 6 },
            { description: 'Supplier sourcing and procurement assistance ', id: 7 },
            { description: 'Safe, customized solutions for Brazilian companies ', id: 8 }
        ],
        detailsService: [{
            id: 1,
            text: 'We assist Brazilian companies throughout the entire process of establishing a presence in the Chinese market, from legal procedures to operational planning and cultural integration'
        },
        {
            id: 2,
            text: `Our consulting is tailor-made, secure, and scalable, positioning your company for longterm success`
        }],
        language: 'en',
        midia: OfficeWorkFocus
    },
    // chinese
    {
        id: 5,
        name: '专业文件翻译服务',
        link: '#',
        icon: 'fa-solid fa-calendar-days fa-beat fa-2xl',
        textButon: '下单',
        descriptions: [
            { description: '技术、法律及企业文件翻译', id: 20 },
            { description: '涵盖移民、合规、商务等多类文件', id: 21 },
            { description: '由熟悉中葡双语法律体系的专业译员完成', id: 22 },
            { description: '确保翻译在语言和法律双重层面准确无误', id: 23 },
            { description: '支持企业在巴西市场合法合规落地', id: 23 },
            { description: '严格保密，文化理解深入', id: 23 },
        ],
        detailsService: [{
            id: 1,
            text: '我们提供技术、法律、商业和机构类文件的专业翻译服务，确保语言精准、术语 统一，并严格保密。'
        },
        {
            id: 2,
            text: `每一份文件都传达贵公司在国际环境中的专业形象。`
        }],
        language: 'zh',
        midia: ChinesEscritorioBrasil
    },
    {
        id: 6,
        name: '会议与活动口译服务',
        link: '#',
        icon: 'fa-solid fa-graduation-cap fa-beat fa-2xl',
        textButon: '下单',
        descriptions: [
            { description: '提供线上与线下会议的专业口译支持', id: 24 },
            { description: '包括同声传译与交替传译服务', id: 25 },
            { description: '协助企业与巴西政府、客户及合作伙伴高效沟通', id: 26 },
            { description: '译员熟悉中巴商务礼仪与表达方式', id: 27 },
            { description: '保障关键交流场景下的精准传达与商务安全', id: 28 },
            { description: '为谈判、招投标、技术交流等活动赋能', id: 29 }
        ],
        detailsService: [{
            id: 1,
            text: `我们在商务会议、商业访问和大型活动中提供同声传译与交替传译服务，由经验
丰富的译员进行，确保跨语言交流的顺畅与高效，助力关键时刻的战略沟通。`
        }],
        language: 'zh',
        midia: BussinesPresentation
    },
    {
        id: 15,
        name: '高水平葡语培训服务',
        link: '#',
        icon: 'fa-solid fa-calendar-days fa-beat fa-2xl',
        textButon: '下单',
        descriptions: [
            { description: '面向高管、员工及家庭成员的葡语教学', id: 20 },
            { description: '根据商务需求定制个性化课程', id: 21 },
            { description: '提升在巴西生活、管理与谈判中的语言能力', id: 22 },
            { description: '采用沉浸式教学法，注重实用表达与文化融合', id: 23 },
            { description: '帮助中方团队快速适应本地环境', id: 24 },
            { description: '可选远程教学或线下密集培训', id: 25 },
        ],
        detailsService: [{
            id: 1,
            text: `我们为中国企业高管、青少年与儿童提供专业的葡萄牙语培训课程，由具有丰富
教学经验的教师授课。课程内容结合语言技能与文化理解，帮助学习者迅速适应
并胜任在巴西的生活与工作环境。`
        },
        ],
        language: 'zh',
        midia: ClassroomLearningMoment
    },
    {
        id: 16,
        name: '巴西本地商务陪同与咨询',
        link: '#',
        icon: 'fa-solid fa-building-user fa-beat fa-2xl',
        textButon: '下单',
        descriptions: [
            { description: '为中国企业提供在巴西的现场支持', id: 24 },
            { description: '陪同客户拜访、市场调研、政府沟通等关键事务', id: 25 },
            { description: '提供中葡双语翻译与文化桥接', id: 26 },
            { description: '协助理解当地商务流程与机构架构', id: 27 },
            { description: '降低初期运营风险，提升沟通效率', id: 28 },
            { description: '让中国企业在初期落地阶段更加稳健有序', id: 29 }
        ],
        detailsService: [{
            id: 1,
            text: `我们为希望进入巴西市场的中国企业提供全面、本地化的商业咨询服务，涵盖市
场分析、商务文化指导、操作流程建议等。`
        },
        {
            id: 2,
            text: `此服务将为中国企业提供清晰路径与
落地策略，加快进入巴西市场的步伐。`
        }],
        language: 'zh',
        midia: ChinaBusinessConsulting
    },
    {
        id: 17,
        name: '在巴西设立公司与采购咨询',
        link: '#',
        icon: 'fa-solid fa-building fa-beat fa-2xl',
        textButon: '下单',
        descriptions: [
            { description: '协助中国企业在巴西注册公司并开展业务', id: 20 },
            { description: '全程支持法律注册、资质申请及合规流程', id: 21 },
            { description: '帮助建立本地法人结构与税务配置', id: 22 },
            { description: '协助寻找可靠本地供应商与采购渠道', id: 24 },
            { description: '提供政策解读与商业对接', id: 25 },
            { description: '打造安全、高效、定制化的市场准入路径', id: 27 },
        ],
        detailsService: [{
            id: 1,
            text: `我们协助中国企业在巴西注册和设立分公司，涵盖法律流程、商业结构设计、文
化整合等关键环节。`
        },
        {
            id: 2,
            text: `此外，我们还提供：`
        },
        {
            id: 3,
            text: `在中国企业驻巴西单位内配置巴西本地专业人才`
        },
        {
            id: 4,
            text: `为中方员工提供全天候支持热线（hotline）服务，保障沟通无障碍`
        },
        {
            id: 5,
            text: `持续语言与文化辅导，提升团队协同效率，助力中资企业在巴西的长期发
展与稳定运营`
        }
        ],
        language: 'zh',
        midia: OfficeWorkFocus
    },
    // Portuguese
    {
        id: 8,
        name: 'Tradução Profissional de Documentos ',
        link: '#',
        icon: 'fa-solid fa-file-invoice fa-beat fa-2xl',
        textButon: 'Pedir',
        descriptions: [
            { description: 'Tradução técnica', id: 32 },
            { description: 'Tradução jurídica', id: 33 },
            { description: 'Tradução corporativa e institucional', id: 34 },
            { description: 'Com precisão, confidencialidade e domínio cultural', id: 35 }
        ],
        detailsService: [{
            id: 1,
            text: `Oferecemos serviços de tradução técnica, jurídica, corporativa e institucional, com
                   absoluto rigor terminológico e fidelidade contextual`
        },
        {
            id: 2,
            text: `Cada documento é tratado com precisão, confidencialidade e domínio cultural,
assegurando que a comunicação escrita da sua empresa reflita profissionalismo em
qualquer idioma`
        }],
        language: 'pt',
        midia: ChinesEscritorioBrasil
    },
    {
        id: 9,
        name: 'Interpretação em Reuniões e Eventos',
        link: '#',
        icon: 'fa-solid fa-calendar-days fa-beat fa-2xl',
        textButon: 'Pedir',
        descriptions: [
            { description: 'Com elevado grau de preparo e discrição', id: 36 },
            { description: 'Interpretação simultânea quanto consecutiva', id: 37 },
            { description: 'Fluidez e segurança comunicacional em tempo real', id: 38 },
        ],
        detailsService: [{
            id: 1,
            text: `Nossos intérpretes atuam com elevado grau de preparo e discrição em reuniões de negócios, missões comerciais e grandes eventos, tanto em interpretação simultânea quanto consecutiva`
        },
        {
            id: 2,
            text: `Apoiamos executivos, lideranças e autoridades em momentos decisivos, garantindo fluidez e segurança comunicacional em tempo real`
        }],
        language: 'pt',
        midia: BussinesPresentation
    },
    {
        id: 10,
        name: 'Formação Linguística de Alto Nível',
        link: '#',
        icon: 'fa-solid fa-graduation-cap fa-beat fa-2xl',
        textButon: 'Pedir',
        descriptions: [
            { description: 'Mandarim para Executivos, Jovens e Crianças', id: 40 },
            { description: 'Tutores especializados no ensino do idioma chinês mandarim', id: 41 },
            { description: 'Aulas personalizadas com metodologia de alto impacto', id: 42 },
            { description: 'Foco prático e imersão cultural', id: 43 }
        ],
        detailsService: [{
            id: 1,
            text: `Oferecemos programas educacionais de excelência com tutores especializados no ensino do idioma chinês mandarim, voltados para executivos, empresários, adolescentes e crianças`
        },
        {
            id: 2,
            text: `Aulas personalizadas com metodologia de alto impacto, foco prático e imersão cultural, que capacitam nossos alunos para atuar com desenvoltura em contextos reais e exigentes`
        }],
        language: 'pt',
        midia: ClassroomLearningMoment
    },
    {
        id: 11,
        name: 'Consultoria Presencial na China',
        link: '#',
        icon: 'fa-solid fa-building-user fa-beat fa-2xl',
        textButon: 'Pedir',
        descriptions: [
            { description: 'Presença local e acompanhamento em compromissos estratégicos', id: 44 },
            { description: 'Tutores especializados no ensino do idioma chinês mandarim', id: 45 },
            { description: 'Garantimos compreensão cultural', id: 46 },
            { description: 'Apoio prático e orientação comercial precisa', id: 47 }
        ],
        detailsService: [{
            id: 1,
            text: `Para empresas que atuam ou desejam atuar na China, oferecemos consultoria com presença local e acompanhamento em compromissos estratégicos, garantindo compreensão cultural, apoio prático e orientação comercial precisa`
        },
        {
            id: 2,
            text: `Esse serviço proporciona segurança e inteligência em negociações e processos de implantação no mercado chinês`
        }],
        language: 'pt',
        midia: ChinaBusinessConsulting
    },
    {
        id: 12,
        name: 'Consultoria para Abertura de Empresas na China',
        link: '#',
        icon: 'fa-solid fa-building fa-beat fa-2xl',
        textButon: 'Pedir',
        descriptions: [
            { description: 'Implantação empresarial no mercado chinês', id: 48 },
            { description: 'Assessoria completa em registro legal e estruturação societária', id: 49 },
            { description: 'Orientação jurídica, comercial e institucional', id: 50 },
            { description: 'Localização de fornecedores e suporte em processos de compra ', id: 51 },
            { description: 'Soluções seguras e sob medida para empresas brasileiras', id: 52 }
        ],
        detailsService: [{
            id: 1,
            text: `Apoiamos o processo de implantação empresarial no mercado chinês com assessoria integral, desde os trâmites legais e regulatórios até a adaptação cultural e operacional`
        },
        {
            id: 2,
            text: `Entregamos soluções seguras, estruturadas e sob medida, que permitem a entrada sólida da sua empresa em um dos mercados mais exigentes e promissores do mundo`
        }],
        language: 'pt',
        midia: OfficeWorkFocus
    },
];
