import type { ICreateElement } from "@utils/styling/createElementHtml/ICreateElement";
import type { ICustomStyling } from "@utils/styling/customStyling/ICustomStyling";
import type { CustomStylingProps } from "@utils/styling/customStyling/types";

export class CustomStyling implements ICustomStyling {
    private readonly createElement: ICreateElement
    constructor(createElement: ICreateElement) {
        this.createElement = createElement
    }
    public set({ className, elements, where, tagNameNewElement, classNameNewElement }: CustomStylingProps): void {
        if (elements.length) {
            elements.forEach(element => {
                element.classList.add(className)
                const newElement = this.createElement.create({ tagName: tagNameNewElement, options: { className: classNameNewElement }, })
                element.insertAdjacentElement(where, newElement);

            })
        }
    }
}