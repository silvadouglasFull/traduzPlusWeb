import type { ICopyRight } from "@utils/copyright/ICopyRight"
import type { TCopyRight } from "@utils/copyright/types"
export class CopyRight implements ICopyRight {
    constructor(elements: NodeListOf<HTMLElement>) {
        this.set(elements)
    }
    private set(elements: NodeListOf<HTMLElement>): void {
        if (elements.length) {
            elements.forEach(element => element.innerText = this.createTextCopyRight())
        }
    }
    private createTextCopyRight(): TCopyRight {
        return String(new Date().getFullYear())
    }
}