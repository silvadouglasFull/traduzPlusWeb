import type { CreateElementOptions } from "../types";

export interface ICreateElement {
    create({ tagName, options }: CreateElementOptions): HTMLElement
}