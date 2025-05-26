import type { LanguageItemProps } from "@components/navbarPublic/languageDropdown/languages/item/types";

export const languages: Array<LanguageItemProps> = [
    {
        id: 0,
        icon: '🇺🇸',
        label: 'English',
        isActive: true,
        language: 'en',
    },
    {
        id: 1,
        icon: '🇧🇷',
        label: 'Português',
        isActive: false,
        language: 'pt'
    },
    {
        id: 2,
        icon: '🇨🇳',
        label: '中文',
        isActive: false,
        language: '缩写'
    }
]