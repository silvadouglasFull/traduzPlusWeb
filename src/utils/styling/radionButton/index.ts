import type { ICreateElement } from "@utils/styling/createElementHtml/ICreateElement";
import type { IRadioButon } from "@utils/styling/radionButton/IRadionButon";
import type { Radio } from "@utils/styling/radionButton/types";

export class RadioButon implements IRadioButon {
    private readonly createElement: ICreateElement
    constructor(createElement: ICreateElement) {
        this.createElement = createElement
    }
    public set(radios: Radio): void {
        if (radios.length) {
            radios.forEach(radio => {
                radio.classList.add("radio-custom")
                const element = this.createElement.create({ tagName: 'span', options: { className: 'radio-custom-dummy' }, })
                radio.insertAdjacentElement("afterend", element);

            })
        }
    }
}