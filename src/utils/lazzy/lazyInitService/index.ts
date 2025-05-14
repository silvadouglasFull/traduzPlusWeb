import type { ILazyElement } from "@utils/lazzy/ILazzy";

/**
 * Service responsible for lazy initialization of elements when they enter the viewport.
 */
export class LazyInitService {
    private window: Window;

    constructor(window: Window) {
        this.window = window;
    }

    /**
     * Initializes the callback only when the element enters the viewport.
     * 
     * @param {ILazyElement} element - The lazy-loadable element.
     * @param {() => void} callback - The callback to execute.
     */
    public observe(element: ILazyElement, callback: () => void): void {
        const handler = (): void => {
            if (!element.isAlreadyLoaded() && element.isInView()) {
                callback();
                element.markAsLoaded();
            }
        };

        // Initial check and binding
        handler();
        this.window.addEventListener('scroll', handler);
    }
}
