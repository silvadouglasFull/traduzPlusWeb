import type { Item } from "@components/list/services/item/types";

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
        language: 'en'
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
        language: 'en'
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
        language: 'en'
    },
    {
        id: 3,
        name: 'Other',
        link: '#',
        icon: 'fa-solid fa-globe fa-beat fa-2xl',
        textButon: 'Order',
        descriptions: [
            { description: 'App translation', id: 12 },
            { description: 'Magento and Wordpress translation', id: 13 },
            { description: 'Website and online store localization', id: 14 },
            { description: 'Technical documentation translation', id: 15 }
        ],
        language: 'en'
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
        language: 'zh'
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
        language: 'zh'
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
        language: 'zh'
    },
    {
        id: 7,
        name: '其他服务',
        link: '#',
        icon: 'fa-solid fa-globe fa-beat fa-2xl',
        textButon: '下单',
        descriptions: [
            { description: '应用程序翻译', id: 28 },
            { description: 'Magento 和 Wordpress 翻译', id: 29 },
            { description: '网站和在线商店本地化', id: 30 },
            { description: '技术文档翻译', id: 31 }
        ],
        language: 'zh'
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
        language: 'pt'
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
        language: 'pt'
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
        language: 'pt'
    },
    {
        id: 11,
        name: 'Outros',
        link: '#',
        icon: 'fa-solid fa-globe fa-beat fa-2xl',
        textButon: 'Pedir',
        descriptions: [
            { description: 'Tradução de aplicativos', id: 44 },
            { description: 'Tradução para Magento e Wordpress', id: 45 },
            { description: 'Localização de sites e lojas virtuais', id: 46 },
            { description: 'Tradução de documentação técnica', id: 47 }
        ],
        language: 'pt'
    }
];
