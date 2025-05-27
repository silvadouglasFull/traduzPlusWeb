import type { Item } from "@pages/home/layouts/secoundSection/components/services/item/types";
import { largeFeatures, singleServices } from "../assets/services/secoundSection";

export const servicesList: Array<Item> = [
    // English
    {
        id: 0,
        name: 'Translation Services',
        link: '#',
        icon: 'fa-solid fa-book fa-beat fa-2xl',
        textButon: 'Order',
        descriptions: [
            { description: 'Advertising translation', id: 0 },
            { description: 'Banking and finance translation', id: 1 },
            { description: 'GDPR and legal translation', id: 2 },
            { description: 'Software and technology translation', id: 3 }
        ],
        detailsService: [{
            id: 1,
            text: 'At Great Wall Language Solutions, the document translation process begins with content analysis and selecting a translator specialized in the target language and subject matter. The translator ensures accuracy, preserving the original meaning while respecting the linguistic and cultural norms of the target language.'
        },
        {
            id: 2,
            text: 'The translation then undergoes technical review and quality control, checking terminology, clarity, formatting, and cultural adaptation. With the support of advanced language technologies, we deliver a final result that is accurate, professional, and fully aligned with the client’s needs.'
        }],
        language: 'en',
        midia: singleServices
    },
    {
        id: 1,
        name: 'Interpreting services',
        link: '#',
        icon: 'fa-solid fa-briefcase fa-beat fa-2xl',
        textButon: 'Order',
        descriptions: [
            { description: 'On-site interpreting', id: 4 },
            { description: 'Business and conference interpreting', id: 5 },
            { description: 'Sight and telephone translation', id: 6 },
            { description: 'Video and audio translation', id: 7 }
        ],
        detailsService: [{
            id: 1,
            text: 'Our interpreting services are designed to ensure seamless communication in real-time situations. We offer on-site interpreting for business meetings, negotiations, and events, as well as professional conference interpreting to facilitate clear and accurate communication among participants. For quick needs, we also provide sight translation and telephone interpreting, helping bridge gaps instantly.'
        },
        {
            id: 2,
            text: 'In addition, our video and audio interpreting services allow clients to overcome language barriers in remote settings. Whether it’s an online conference, training session, or a recorded material that needs real-time translation, our team of experienced interpreters guarantees precision, cultural accuracy, and confidentiality throughout the entire process.'
        }],
        language: 'en',
        midia: largeFeatures
    },
    {
        id: 2,
        name: 'Content Services',
        link: '#',
        icon: 'fa-solid fa-map fa-beat fa-2xl',
        textButon: 'Order',
        descriptions: [
            { description: 'Transcription', id: 8 },
            { description: 'Proofreading and quality assessment', id: 9 },
            { description: 'Content summarization and categorization', id: 10 },
            { description: 'Ads review and sentiment analysis', id: 11 }
        ],
        detailsService: [{
            id: 1,
            text: 'Our content services deliver high-precision solutions such as transcription, proofreading, and quality assessment. We ensure that every piece of content is accurate, clear, and culturally appropriate, whether for business, media, or legal purposes.'
        },
        {
            id: 2,
            text: 'Additionally, we offer content summarization, categorization, ads review, and sentiment analysis. These solutions help companies manage, evaluate, and optimize large volumes of content with clarity, consistency, and strategic insights.'
        }],
        language: 'en',
        midia: singleServices
    },
    // Chinese
    {
        id: 4,
        name: '翻译服务',
        link: '#',
        icon: 'fa-solid fa-book fa-beat fa-2xl',
        textButon: '下单',
        descriptions: [
            { description: '广告翻译', id: 16 },
            { description: '银行和金融翻译', id: 17 },
            { description: 'GDPR 和法律翻译', id: 18 },
            { description: '软件和技术翻译', id: 19 }
        ],
        detailsService: [{
            id: 1,
            text: '在长城语言解决方案公司，文件翻译服务首先对内容进行分析，并指派擅长目标语言和相关领域的专业译员。译员在确保准确传达原文意思的同时，严格遵循目标语言的语言规范和文化习惯。'
        },
        {
            id: 2,
            text: '随后，翻译文件将经过技术审校和质量控制，重点检查术语准确性、表达清晰度、格式规范及文化适配性。借助先进的语言技术，我们为客户提供精准、专业且完全符合需求的高质量译文。'
        }],
        language: 'zh',
        midia: singleServices
    },
    {
        id: 5,
        name: '口译服务',
        link: '#',
        icon: 'fa-solid fa-briefcase fa-beat fa-2xl',
        textButon: '下单',
        descriptions: [
            { description: '现场口译', id: 20 },
            { description: '商务与会议口译', id: 21 },
            { description: '视译和电话翻译', id: 22 },
            { description: '视频和音频翻译', id: 23 }
        ],
        detailsService: [{
            id: 1,
            text: '我们的口译服务旨在为各类实时沟通场景提供无缝衔接。我们提供现场口译，适用于商务会议、谈判和各类活动，同时还提供专业的会议同声传译，确保与会人员之间的沟通准确清晰。此外，我们也提供视译和电话口译，快速解决即时沟通需求。'
        },
        {
            id: 2,
            text: '同时，我们的视频与音频口译服务，帮助客户在远程环境中消除语言障碍。无论是在线会议、培训课程，还是需要实时翻译的录制内容，我们经验丰富的口译团队都能保证翻译的准确性、文化适配性与严格的保密性。'
        }],
        language: 'zh',
        midia: largeFeatures
    },
    {
        id: 6,
        name: '内容服务',
        link: '#',
        icon: 'fa-solid fa-map fa-beat fa-2xl',
        textButon: '下单',
        descriptions: [
            { description: '文字转录', id: 24 },
            { description: '校对和质量评估', id: 25 },
            { description: '内容摘要与分类', id: 26 },
            { description: '广告审核与情感分析', id: 27 }
        ],
        detailsService: [{
            id: 1,
            text: '我们的内容服务包括高精度的转录、校对和质量评估。无论是商务、媒体还是法律文件，我们都确保内容准确、清晰且符合文化规范。'
        },
        {
            id: 2,
            text: '此外，我们还提供内容摘要、分类、广告审核和情感分析。帮助企业高效管理、评估并优化大量内容，提升信息价值和决策质量。'
        }],
        language: 'zh',
        midia: singleServices
    },

    // Portuguese
    {
        id: 8,
        name: 'Serviços de Tradução',
        link: '#',
        icon: 'fa-solid fa-book fa-beat fa-2xl',
        textButon: 'Pedir',
        descriptions: [
            { description: 'Tradução publicitária', id: 32 },
            { description: 'Tradução bancária e financeira', id: 33 },
            { description: 'Tradução jurídica e de GDPR', id: 34 },
            { description: 'Tradução de software e tecnologia', id: 35 }
        ],
        detailsService: [{
            id: 1,
            text: 'Na Great Wall Language Solutions, o serviço de tradução de documentos começa com a análise do conteúdo e a seleção de um tradutor especializado no idioma e no tema. O profissional realiza a tradução com precisão, mantendo o sentido original e respeitando as normas linguísticas e culturais do idioma de destino.'
        },
        {
            id: 2,
            text: 'Em seguida, o texto passa por revisão técnica e controle de qualidade, onde são verificados terminologia, clareza, formatação e adequação cultural. Com o apoio de tecnologias linguísticas, garantimos um resultado final preciso, profissional e pronto para atender às necessidades do cliente com excelência.'
        }],
        language: 'pt',
        midia: singleServices
    },
    {
        id: 9,
        name: 'Serviços de Interpretação',
        link: '#',
        icon: 'fa-solid fa-briefcase fa-beat fa-2xl',
        textButon: 'Pedir',
        descriptions: [
            { description: 'Interpretação presencial', id: 36 },
            { description: 'Interpretação empresarial e de conferência', id: 37 },
            { description: 'Tradução à vista e por telefone', id: 38 },
            { description: 'Tradução de vídeo e áudio', id: 39 }
        ],
        detailsService: [{
            id: 1,
            text: 'Nossos serviços de interpretação garantem uma comunicação fluida em situações presenciais e em tempo real. Oferecemos interpretação presencial para reuniões, negociações e eventos, além de interpretação profissional para conferências, assegurando clareza e precisão entre os participantes. Também disponibilizamos serviços de tradução à vista e interpretação por telefone, ideais para demandas rápidas e pontuais.'
        },
        {
            id: 2,
            text: 'Além disso, contamos com serviços de interpretação para vídeo e áudio, que ajudam nossos clientes a superar barreiras linguísticas em ambientes remotos. Seja em conferências online, treinamentos ou materiais gravados que exigem tradução em tempo real, nossa equipe assegura precisão, sensibilidade cultural e total confidencialidade em todo o processo.'
        }],
        language: 'pt',
        midia: largeFeatures
    },
    {
        id: 10,
        name: 'Serviços de Conteúdo',
        link: '#',
        icon: 'fa-solid fa-map fa-beat fa-2xl',
        textButon: 'Pedir',
        descriptions: [
            { description: 'Transcrição', id: 40 },
            { description: 'Revisão e avaliação de qualidade', id: 41 },
            { description: 'Resumos e categorização de conteúdo', id: 42 },
            { description: 'Análise de anúncios e sentimentos', id: 43 }
        ],
        detailsService: [{
            id: 1,
            text: 'Nossos serviços de conteúdo incluem transcrição, revisão e avaliação de qualidade, com alto nível de precisão. Garantimos textos claros, corretos e culturalmente adequados para negócios, mídia ou uso jurídico.'
        },
        {
            id: 2,
            text: 'Também oferecemos serviços de resumo, categorização de conteúdo, revisão de anúncios e análise de sentimento. Soluções que ajudam empresas a organizar, avaliar e otimizar grandes volumes de informações com eficiência.'
        }],
        language: 'pt',
        midia: singleServices
    },
];
