import { BussinesPresentation, ChinaBusinessConsulting, ChinesEscritorioBrasil, ClassroomLearningMoment, OfficeWorkFocus } from "@flavor/constants/assets/services/secoundSection";
import type { Item } from "@pages/home/layouts/secoundSection/components/services/item/types";

export const servicesList: Array<Item> = [
    // English
    {
        id: 0,
        name: 'Professional Document Translation',
        link: '#',
        icon: 'fa-solid fa-book fa-beat fa-2xl',
        textButon: 'Order',
        descriptions: [
            { description: 'Technical', id: 0 },
            { description: 'Legal', id: 1 },
            { description: 'Corporate and institucional translations', id: 2 },
        ],
        detailsService: [{
            id: 1,
            text: `We deliver technical, legal, corporate, and institucional translations with precise terminology, confidentiality, and cultural alignment.`
        },
        {
            id: 2,
            text: `Each document is handled with care to reflect your company’s professionalism across languages and markets.`
        }],
        language: 'en',
        midia: ChinesEscritorioBrasil
    },
    {
        id: 1,
        name: 'Interpretation for Business and Events',
        link: '#',
        icon: 'fa-solid fa-briefcase fa-beat fa-2xl',
        textButon: 'Order',
        descriptions: [
            { description: 'Our interpreters are highly trained and discreet', id: 4 },
            { description: 'Simultaneous and consecutive interpretation', id: 5 },
        ],
        detailsService: [{
            id: 1,
            text: 'Our interpreters are highly trained and discreet, supporting business meetings, trade delegations, and major events with simultaneous and consecutive interpretation.'
        },
        {
            id: 2,
            text: `We ensure seamless, reliable communicaƟon during high stakes interactions.`
        }],
        language: 'en',
        midia: BussinesPresentation
    },
    {
        id: 2,
        name: 'Elite Language Training',
        link: '#',
        icon: 'fa-solid fa-map fa-beat fa-2xl',
        textButon: 'Order',
        descriptions: [
            { description: 'Mandarin for Executives, Youth, and Children', id: 8 },
            { description: 'Expert tutors in Mandarin Chinese', id: 9 },
            { description: 'Executives, entrepreneurs, teens, and children.', id: 10 },
        ],
        detailsService: [{
            id: 1,
            text: `We offer high-impact educacional programs with expert tutors in Mandarin Chinese, tailored to executives, entrepreneurs, teens, and children.`
        },
        {
            id: 2,
            text: `Lessons are personalized and results-driven, combining linguistic excellence with practical, real-world communication.`
        }],
        language: 'en',
        midia: ClassroomLearningMoment
    },
    {
        id: 13,
        name: 'On-Site Consulting in China',
        link: '#',
        icon: 'fa-solid fa-briefcase fa-beat fa-2xl',
        textButon: 'Order',
        descriptions: [
            { description: 'Local, strategic consulting', id: 4 },
            { description: 'presence at key meetings and support in commercial engagements', id: 5 },
        ],
        detailsService: [{
            id: 1,
            text: 'We provide local, strategic consulting for companies operating in China, including presence at key meetings and support in commercial engagements.'
        },
        {
            id: 2,
            text: `This service ensures cultural clarity and practical assistance during your company’s operations or expansion within China.`
        }],
        language: 'en',
        midia: ChinaBusinessConsulting
    },
    {
        id: 14,
        name: 'Consulting for Company Setup in China',
        link: '#',
        icon: 'fa-solid fa-briefcase fa-beat fa-2xl',
        textButon: 'Order',
        descriptions: [
            { description: 'Establishing a presence in the Chinese market', id: 4 },
            { description: 'Tailor-made, secure, and scalable', id: 5 },
        ],
        detailsService: [{
            id: 1,
            text: 'We assist Brazilian companies throughout the entire process of establishing a presence in the Chinese market, from legal procedures to operational planning and cultural integration.'
        },
        {
            id: 2,
            text: `Our consulting is tailor-made, secure, and scalable, positioning your company for longterm success.`
        }],
        language: 'en',
        midia: OfficeWorkFocus
    },
    {
        id: 5,
        name: '专业文件翻译服务',
        link: '#',
        icon: 'fa-solid fa-briefcase fa-beat fa-2xl',
        textButon: '下单',
        descriptions: [
            { description: '技术、法律、商业和机构类文件。', id: 20 },
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
        name: '商务会议与大型活动的口译服务',
        link: '#',
        icon: 'fa-solid fa-map fa-beat fa-2xl',
        textButon: '下单',
        descriptions: [
            { description: '商务会议。', id: 24 },
            { description: '商业访问和大型活动中', id: 25 },
            { description: '同声传译和交替传译服务', id: 26 },
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
        name: '葡萄牙语语言培训',
        link: '#',
        icon: 'fa-solid fa-briefcase fa-beat fa-2xl',
        textButon: '下单',
        descriptions: [
            { description: '面向高管、青少年与儿童的定制课程', id: 20 },
            { description: '为中国企业高管', id: 21 },
            { description: '青少年与儿童', id: 22 },
            { description: '语言技能与文化理解', id: 23 }
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
        name: '在巴西的本地化商务咨询服务',
        link: '#',
        icon: 'fa-solid fa-map fa-beat fa-2xl',
        textButon: '下单',
        descriptions: [
            { description: '希望进入巴西市场的中国企业', id: 24 },
            { description: '本地化的商业咨询服务', id: 25 },
            { description: '清晰路径与落地策略', id: 26 },
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
        name: '协助中国企业在巴西设立公司及本地运营支持',
        link: '#',
        icon: 'fa-solid fa-briefcase fa-beat fa-2xl',
        textButon: '下单',
        descriptions: [
            { description: '注册公司。', id: 20 },
            { description: '人才支持。', id: 21 },
            { description: '文化辅导。', id: 22 },
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
        icon: 'fa-solid fa-book fa-beat fa-2xl',
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
                   absoluto rigor terminológico e fidelidade contextual.`
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
        icon: 'fa-solid fa-briefcase fa-beat fa-2xl',
        textButon: 'Pedir',
        descriptions: [
            { description: 'Com elevado grau de preparo e discrição', id: 36 },
            { description: 'Interpretação simultânea quanto consecutiva', id: 37 },
            { description: 'Fluidez e segurança comunicacional em tempo real.', id: 38 },
        ],
        detailsService: [{
            id: 1,
            text: `Nossos intérpretes atuam com elevado grau de preparo e discrição em reuniões de negócios, missões comerciais e grandes eventos, tanto em interpretação simultânea quanto consecutiva.`
        },
        {
            id: 2,
            text: `Apoiamos executivos, lideranças e autoridades em momentos decisivos, garantindo fluidez e segurança comunicacional em tempo real.`
        }],
        language: 'pt',
        midia: BussinesPresentation
    },
    {
        id: 10,
        name: 'Formação Linguística de Alto Nível',
        link: '#',
        icon: 'fa-solid fa-map fa-beat fa-2xl',
        textButon: 'Pedir',
        descriptions: [
            { description: 'Mandarim para Executivos, Jovens e Crianças', id: 40 },
            { description: 'Tutores especializados no ensino do idioma chinês mandarim', id: 41 },
            { description: 'Aulas personalizadas com metodologia de alto impacto.', id: 42 },
            { description: 'Foco prático e imersão cultural', id: 43 }
        ],
        detailsService: [{
            id: 1,
            text: `Oferecemos programas educacionais de excelência com tutores especializados no ensino do idioma chinês mandarim, voltados para executivos, empresários, adolescentes e crianças.`
        },
        {
            id: 2,
            text: `Aulas personalizadas com metodologia de alto impacto, foco prático e imersão cultural, que capacitam nossos alunos para atuar com desenvoltura em contextos reais e exigentes.`
        }],
        language: 'pt',
        midia: ClassroomLearningMoment
    },
    {
        id: 11,
        name: 'Consultoria Presencial na China',
        link: '#',
        icon: 'fa-solid fa-map fa-beat fa-2xl',
        textButon: 'Pedir',
        descriptions: [
            { description: 'Presença local e acompanhamento em compromissos estratégicos.', id: 44 },
            { description: 'Tutores especializados no ensino do idioma chinês mandarim.', id: 45 },
            { description: 'Garantimos compreensão cultural.', id: 46 },
            { description: 'apoio prático e orientação comercial precisa', id: 47 }
        ],
        detailsService: [{
            id: 1,
            text: `Para empresas que atuam ou desejam atuar na China, oferecemos consultoria com presença local e acompanhamento em compromissos estratégicos, garantindo compreensão cultural, apoio prático e orientação comercial precisa.`
        },
        {
            id: 2,
            text: `Esse serviço proporciona segurança e inteligência em negociações e processos de implantação no mercado chinês.`
        }],
        language: 'pt',
        midia: ChinaBusinessConsulting
    },
    {
        id: 12,
        name: 'Consultoria para Abertura de Empresas na China',
        link: '#',
        icon: 'fa-solid fa-map fa-beat fa-2xl',
        textButon: 'Pedir',
        descriptions: [
            { description: 'Implantação empresarial no mercado chinês.', id: 48 },
            { description: 'Entregamos soluções seguras, estruturadas e sob medida.', id: 49 },
        ],
        detailsService: [{
            id: 1,
            text: `Apoiamos o processo de implantação empresarial no mercado chinês com assessoria integral, desde os trâmites legais e regulatórios até a adaptação cultural e operacional.`
        },
        {
            id: 2,
            text: `Entregamos soluções seguras, estruturadas e sob medida, que permitem a entrada sólida da sua empresa em um dos mercados mais exigentes e promissores do mundo.`
        }],
        language: 'pt',
        midia: OfficeWorkFocus
    },
];
