import type { IPageTransitionInitializer } from "@utils/pageEfects/IPageTransitionInitializer";
import type { IPageTransitionService } from "@utils/pageEfects/smooth/IPageTransitionService";

/**
 * PageTransitionInitializer
 * @description Initializes page transition logic on window load.
 */
export class PageTransitionInitializer implements IPageTransitionInitializer {
    private preloader: NodeListOf<Element>;
    private isNoviBuilder: boolean;
    private pageTransitionAnimationDuration: number;
    private smooth: IPageTransitionService
    constructor(
        preloader: NodeListOf<Element>,
        isNoviBuilder: boolean,
        pageTransitionAnimationDuration: number,
        smooth: IPageTransitionService
    ) {
        this.preloader = preloader;
        this.isNoviBuilder = isNoviBuilder;
        this.pageTransitionAnimationDuration = pageTransitionAnimationDuration;
        this.smooth = smooth
    }

    /**
     * Initializes the page transition when the window is fully loaded.
     */
    public initialize(): void {
        window.addEventListener("load", () => {
            if (this.preloader.length && !this.isNoviBuilder) {
                this.smooth.init({
                    target: document.querySelector(".page") as HTMLElement | null,
                    delay: 0,
                    duration: this.pageTransitionAnimationDuration,
                    classActive: "animated",
                    conditions: (event, link) => {
                        return (
                            !/(#|callto:|tel:|mailto:|:\/\/)/.test(link) &&
                            !(event.currentTarget as HTMLElement).hasAttribute("data-lightgallery") &&
                            (event.currentTarget as HTMLElement).getAttribute("href") !== "javascript:void(0);"
                        );
                    },
                    onTransitionStart: (options) => {
                        setTimeout(() => {
                            this.preloader.forEach(element => element.classList.remove('loaded'));
                        }, (options.duration ?? 1000) * 0.75);
                    },
                    onReady: () => {
                        this.preloader.forEach(element => element.classList.add('loaded'));
                        (window as any).windowReady = true;
                    }
                })
            }
        });
    }
}
