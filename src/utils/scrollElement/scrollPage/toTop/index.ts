import type { IScrollPage } from "@utils/scrollElement/scrollPage/IScrollPage";
import type { BackToTopOptions } from "@utils/scrollElement/scrollPage/toTop/types";

export class ToTop implements IScrollPage {
    private options: Required<BackToTopOptions>;
    private readonly defaultOptions: Required<BackToTopOptions> = {
        text: "↑",
        minScroll: 500,
        scrollSpeed: 800,
        containerID: "ui-to-top",
        containerClass: "ui-to-top fa fa-angle-up",
        easingType: "ease-in-out",
        isNoviBuilder: false,
    };
    constructor(customOptions: BackToTopOptions = {}) {
        this.options = { ...this.defaultOptions, ...customOptions };
    }
    public init(): void {
        this.injectButton();
        this.bindEvents();
    }
    private injectButton(): void {
        const { containerID, containerClass, text } = this.options;

        const button = document.createElement("a");
        button.href = "#";
        button.id = containerID;
        button.className = containerClass;
        button.innerHTML = text;

        document.body.appendChild(button);
    }
    private bindEvents(): void {
        const { containerID, minScroll } = this.options;
        const button = document.getElementById(containerID);

        if (!button) return;

        button.addEventListener("click", (event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        window.addEventListener("scroll", () => {
            const currentScroll = window.scrollY;

            if (currentScroll > minScroll) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });
    }
}