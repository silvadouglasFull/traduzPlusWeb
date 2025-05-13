import type { LanguageItemProps } from "@components/NavbarPublic/LanguageDropdown/Languages/item/types";

export const languages: Array<LanguageItemProps> = [
    {
        id: 0,
        icon: '🇺🇸',
        label: 'English',
        onClick: () => { },
        isActive: true,
    },
    {
        id: 1,
        icon: '🇧🇷',
        label: 'Português',
        onClick: () => { },
        isActive: false,
    },
    {
        id: 2,
        icon: '🇨🇳',
        label: '中文',
        onClick: () => { },
        isActive: false,
    }
]