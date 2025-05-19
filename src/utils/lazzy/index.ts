import type { ILazyElement } from "@utils/lazzy/ILazzy";
import type { IScrollElement } from "@utils/scrollElement/IScrollElement";
/**
 * Class implementing ILazyElement, wrapping a DOM element.
 */
export class LazyDOMElement implements ILazyElement {
    private element: HTMLElement;
    private readonly loadedClass: string = 'lazy-loaded';
    private readonly scrollDetector: IScrollElement;

    constructor(element: HTMLElement, scrollDetector: IScrollElement) {
        this.element = element;
        this.scrollDetector = scrollDetector;
    }

    public isAlreadyLoaded(): boolean {
        return this.element.classList.contains(this.loadedClass);
    }

    public markAsLoaded(): void {
        this.element.classList.add(this.loadedClass);
    }

    public isInView(isNoviBuilder: boolean): boolean {
        if (isNoviBuilder) {
            return true
        }
        const elementWrapper = {
            getOffsetTop: () => this.element.offsetTop,
            getOuterHeight: () => this.element.offsetHeight
        };
        return this.scrollDetector.isScrolledIntoView(elementWrapper);
    }
}
