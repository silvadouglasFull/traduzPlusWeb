import type { ITabHandler } from "@utils/tabsHandler/ITabsHandler";
import type { TabContainers, TabHandlerOptions } from "@utils/tabsHandler/types";
export class TabHandler implements ITabHandler {
    private readonly isBuilderMode: boolean;

    constructor(options: TabHandlerOptions) {
        this.isBuilderMode = options.isBuilderMode;
    }

    public init(tabContainers: TabContainers): void {
        if (tabContainers.length) {
            tabContainers.forEach((container) => {
                const slickInsideTab = container.querySelector(".slick-slider");

                if (slickInsideTab) {
                    const tabLinks = container.querySelectorAll<HTMLAnchorElement>(".tabs-custom-list > li > a");

                    tabLinks.forEach((link) => {
                        link.addEventListener("click", () => {
                            const timeout = this.isBuilderMode ? 1500 : 300;

                            setTimeout(() => {
                                const activePane = container.querySelector<HTMLElement>(".tab-content .tab-pane.active .slick-slider");
                                if (activePane && typeof (window as any).$ !== "undefined") {
                                    const $ = (window as any).$;
                                    if ($.fn.slick) {
                                        $(activePane).slick("setPosition");
                                    }
                                }
                            }, timeout);
                        });
                    });
                }
            });
        }
    }
}