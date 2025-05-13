import type { IElement } from "@utils/scrollElement/IEelement/";
import type { IScrollElement } from "./IScrollElement";
/**
 * Class responsible for checking whether an element has been scrolled into the viewport.
 */
export class ScrollDetection implements IScrollElement {
    private window: Window;
    private isNoviBuilder: boolean;

    constructor(window: Window, isNoviBuilder: boolean) {
        this.window = window;
        this.isNoviBuilder = isNoviBuilder;
    }

    /**
     * Checks if the element is scrolled into the view of the window.
     * 
     * @param {IElement} elem - The element to check.
     * @returns {boolean} - Returns true if the element is in view, false otherwise.
     */
    public isScrolledIntoView(elem: IElement): boolean {
        if (this.isNoviBuilder) return true;

        const windowScrollTop = this.window.scrollY;
        const windowHeight = this.window.innerHeight;
        const elementOffsetTop = elem.getOffsetTop();
        const elementOuterHeight = elem.getOuterHeight();

        return this.isElementInView(elementOffsetTop, elementOuterHeight, windowScrollTop, windowHeight);
    }

    /**
     * Determines if an element is within the viewport based on its position and height.
     * 
     * @param {number} elementOffsetTop - The top offset of the element.
     * @param {number} elementOuterHeight - The outer height of the element.
     * @param {number} windowScrollTop - The current vertical scroll position of the window.
     * @param {number} windowHeight - The height of the viewport.
     * @returns {boolean} - True if the element is in view, false otherwise.
     */
    private isElementInView(
        elementOffsetTop: number,
        elementOuterHeight: number,
        windowScrollTop: number,
        windowHeight: number
    ): boolean {
        return (
            elementOffsetTop + elementOuterHeight >= windowScrollTop &&
            elementOffsetTop <= windowScrollTop + windowHeight
        );
    }
}
