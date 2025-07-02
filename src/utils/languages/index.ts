import type { LanguageDropdown, LanguageItemProps } from "@components/navbarPublic/languageDropdown/languages/item/types";

export const languages: Array<LanguageItemProps> = [
    {
        language: 'en',
        items: [
            {
                id: 0,
                icon: '🇺🇸',
                label: 'English',
                language: 'en',
            },
            {
                id: 1,
                icon: '🇧🇷',
                label: 'Portuguese',
                language: 'pt',

            },
            {
                id: 2,
                icon: '🇨🇳',
                label: 'Chinese',
                language: 'zh',
            },
        ]
    },
    {
        language: 'pt',
        items: [{
            id: 3,
            icon: '🇺🇸',
            label: 'Inglês',
            language: 'en',
        },
        {
            id: 4,
            icon: '🇧🇷',
            label: 'Português',
            language: 'pt',

        },
        {
            id: 5,
            icon: '🇨🇳',
            label: 'Chinês',
            language: 'zh',
        },]
    },
    {
        language: 'zh',
        items: [
            {
                id: 4,
                icon: '🇺🇸',
                label: '英语',
                language: 'en',
            },
            {
                id: 5,
                icon: '🇧🇷',
                label: '葡语',
                language: 'pt',

            },
            {
                id: 6,
                icon: '🇨🇳',
                label: '中文',
                language: 'zh',
            }
        ]
    }
]
export const languageLabelDropDown: LanguageDropdown[] = [
    {
        id: 1,
        language: 'en',
        label: 'Language'
    },
    {
        id: 2,
        language: 'pt',
        label: 'Idioma'
    },
    {
        id: 2,
        language: 'zh',
        label: '语言'
    }
]