import type { Item } from "@components/list/services/item/types"

export const servicesList: Array<Item> = [
    {
        id: 0,
        name: 'Translation Services',
        link: '#',
        icon: 'fa-solid fa-book fa-beat fa-2xl',
        textButon: 'Order',
        descriptions: [
            { description: 'Advertising translation', id: 0, },
            { description: 'Banking and finance translation', id: 1, },
            { description: 'GDPR and legal translation', id: 2, },
            { description: 'Software and technology translation', id: 3, },
        ]
    },
    {
        id: 1,
        name: 'Interpreting services',
        link: '#',
        icon: 'fa-solid fa-briefcase fa-beat fa-2xl',
        textButon: 'Order',
        descriptions: [
            { description: 'On-site interpreting', id: 4, },
            { description: 'Business and conference interpreting', id: 5, },
            { description: 'Sight and telephone translation', id: 6, },
            { description: 'Video and audio translation', id: 7, },
        ]
    },
    {
        id: 2,
        name: 'Content Services',
        link: '#',
        icon: 'fa-solid fa-map fa-beat fa-2xl',
        textButon: 'Order',
        descriptions: [
            { description: 'Transcription', id: 8, },
            { description: 'Proofreading and quality assessment', id: 9, },
            { description: 'Content summarization and categorization', id: 10, },
            { description: 'Ads review and sentiment analysis', id: 11, },
        ]
    },
    {
        id: 3,
        name: 'Other',
        link: '#',
        icon: 'fa-solid fa-globe fa-beat fa-2xl',
        textButon: 'Order',
        descriptions: [
            { description: 'App translation', id: 12, },
            { description: 'Magento and Wordpress translation', id: 13, },
            { description: 'Website and online store localization', id: 14, },
            { description: 'Technical documentation translation', id: 15, },
        ]
    }
]