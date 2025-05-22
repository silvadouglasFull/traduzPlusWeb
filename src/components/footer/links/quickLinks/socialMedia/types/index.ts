import type { ItemSocialMidia } from "@components/footer/links/quickLinks/socialMedia/item/types";

export type Items = {
    items: Array<ItemSocialMidia>
}
export type SocialMidiaItems = Items & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
