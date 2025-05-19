import type { ICreateElement } from "@utils/styling/createElementHtml/ICreateElement"
import type { CreateElementOptions } from "@utils/styling/createElementHtml/types"

export class CreateElementHml implements ICreateElement {
    public create({ tagName, options }: CreateElementOptions): HTMLElement {
        const element = document.createElement(tagName, options)
        return element
    }
}