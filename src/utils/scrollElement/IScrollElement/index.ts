import type { IElement } from "@utils/scrollElement/IEelement/";

export interface IScrollElement {
    isScrolledIntoView(elem: IElement): boolean
}