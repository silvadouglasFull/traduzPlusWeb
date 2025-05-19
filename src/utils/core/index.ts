/**
 * Main.ts
 * @description Concrete implementation for the main operation with a boolean return value.
 */

import type { IDefinePlugins } from "@core/definePlugins/IDefinePlugins"
import type { IMain } from "@core/IMain"
import { container } from "@core/main.container"
import type { IAddClassName } from "@utils/addClassName/IAddClassName"
import type { IButtonsEfect } from "@utils/buttonsEfect/IButtonsEfect"
import type { IDetectUserAgentEnv } from "@utils/detectUserAgentEnv/IDetectUserAgentEnv.ts"
import { LazyDOMElement } from "@utils/lazzy"
import type { ILazyElement } from "@utils/lazzy/ILazzy"
import type { ILazyInitService } from "@utils/lazzy/lazyInitService/ILazyInitService"
import type { IPageTransitionInitializer } from "@utils/pageEfects/IPageTransitionInitializer"
import type { IPopoverInitializer } from "@utils/popouver/IPopoverInitializer"
import type { IScrollElement } from "@utils/scrollElement/IScrollElement"
import type { ITabHandler } from "@utils/tabsHandler/ITabsHandler"

/**
 * Service responsible for executing the main operation.
 */
export class Main implements IMain {
    private detectUserAgente: IDetectUserAgentEnv
    private definePlugins: IDefinePlugins
    private scrollElement: IScrollElement
    private readonly lazyInitService: ILazyInitService
    private pageEfects: IPageTransitionInitializer
    private readonly addClassName: IAddClassName
    private popouver: IPopoverInitializer
    private buttonsEfect: IButtonsEfect
    private tabHandler: ITabHandler
    constructor(
        detectUserAgente: IDetectUserAgentEnv,
        definePlugins: IDefinePlugins,
        scrollElement: IScrollElement,
        lazyInitService: ILazyInitService,
        pageEfects: IPageTransitionInitializer,
        addClassName: IAddClassName,
        popouver: IPopoverInitializer,
        buttonsEfect: IButtonsEfect,
        tabHandler: ITabHandler
    ) {
        this.detectUserAgente = detectUserAgente
        this.definePlugins = definePlugins
        this.scrollElement = scrollElement
        this.lazyInitService = lazyInitService
        this.pageEfects = pageEfects
        this.addClassName = addClassName
        this.popouver = popouver
        this.buttonsEfect = buttonsEfect
        this.tabHandler = tabHandler
    }
    public execute(): boolean {
        try {
            const userAgente = this.detectUserAgente.detect()
            const definePlugins = this.definePlugins.getPlugins()
            if (definePlugins?.lazyComponent) {
                const lazyElement: ILazyElement = new LazyDOMElement(definePlugins?.lazyComponent as HTMLElement, this.scrollElement);
                this.lazyInitService.observe(lazyElement, () => {
                    console.log("Lazy element in view! Initializing plugin...");
                }, userAgente?.isNoviBuilder || false);
            }
            this.pageEfects.initialize()
            const htmlElement = document.documentElement
            this.addClassName.set({ className: 'mac-os', element: htmlElement })
            if (definePlugins?.popover) {
                this.popouver.init(definePlugins?.popover)
            }
            this.buttonsEfect.initialize()
            if (definePlugins?.bootstrapTabs) {
                this.tabHandler.init(definePlugins?.bootstrapTabs)
            }
            console.log('initiliazed')
            return (userAgente !== null) && (definePlugins !== null)
        } catch (error) {
            console.error("Main operation failed:", error)
            return false
        }
    }
}

const main = new Main(
    container.detectUserAgentEnv,
    container.definePlugins,
    container.scrollElement,
    container.lazzy,
    container.pageTransitionInitializer,
    container.addClassName,
    container.popouver,
    container.butonsEfect as IButtonsEfect,
    container.tabHandler
)
export { main }
