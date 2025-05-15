import type { IPageTransitionService } from "@utils/pageEfects/smooth/IPageTransitionService";
import type { PageTransitionOptions } from "@utils/pageEfects/smooth/types";

/**
 * PageTransitionService
 * @description Handles page transitions with optional classes and animations.
 */
export class PageTransitionService implements IPageTransitionService {
    public defaultOptions: PageTransitionOptions;

    constructor() {
        this.defaultOptions = {
            target: null,
            delay: 500,
            duration: 1000,
            classIn: null,
            classOut: null,
            classActive: null,
            onReady: undefined,
            onTransitionStart: undefined,
            onTransitionEnd: undefined,
            conditions: (_: MouseEvent, href: string) => !/(#|callto:|tel:|mailto:|:\/\/)/.test(href),
        };
    }

    /**
     * Initializes the page transition behavior.
     */
    public init(options: Partial<PageTransitionOptions>): void {
        setTimeout(() => {
            if (!options.target) {
                return null
            }
            this.defaultOptions = {
                ...this.defaultOptions,
                ...options
            }
            const {
                target,
                classIn,
                classActive,
                duration,
                onReady,
                onTransitionEnd,
            } = this.defaultOptions;

            if (!target) return;

            onReady?.(this.defaultOptions);

            if (classIn) target.classList.add(classIn);
            if (classActive) target.classList.add(classActive);
            if (duration) target.style.animationDuration = `${duration}ms`;

            target.addEventListener("animationstart", () => {
                setTimeout(() => {
                    if (classIn) target.classList.remove(classIn);
                    onTransitionEnd?.(this.defaultOptions);
                }, duration);
            });
        }, this.defaultOptions.delay);
        // adaptar para hooks
        document.querySelectorAll("a[href]").forEach((anchor) => {
            anchor.addEventListener("click", (event) => this.handleLinkClick(event));
        });
    }

    /**
     * Handles link click and triggers page transition.
     * @param event MouseEvent
     */
    public handleLinkClick(event: Event): void {
        const anchor = event.currentTarget as HTMLAnchorElement;
        const href = anchor.getAttribute("href") || "";

        if (!this.defaultOptions.conditions?.(event as MouseEvent, href)) return;

        event.preventDefault();
        this.defaultOptions.onTransitionStart?.(this.defaultOptions);

        const { target, classIn, classOut, duration, onReady } = this.defaultOptions;

        if (!target) return;

        if (classIn) target.classList.remove(classIn);
        if (classOut) target.classList.add(classOut);

        setTimeout(() => {
            window.location.href = anchor.href;

            const userAgent = navigator.userAgent.toLowerCase();
            const isFirefox = /firefox/i.test(userAgent);
            const isSafari = /safari/i.test(userAgent) && !/chrome/i.test(userAgent);

            if (isFirefox || isSafari) {
                onReady?.(this.defaultOptions);
                if (classOut) target.classList.remove(classOut);
            }
        }, duration);
    }
}
