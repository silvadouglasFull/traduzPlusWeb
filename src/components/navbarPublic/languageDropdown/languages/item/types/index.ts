import type { Language } from "@components/carrosel/item/types";
export type Items = {
    id: number;
    label: string;
    icon: string;
    language: Language
}
export type LanguageItemProps = {
    language: Language,
    items: Items[]
}
export type LanguageDropdown = {
    id: number;
    language: string;
    label: string;
}