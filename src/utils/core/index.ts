/**
 * Main.ts
 * @description Concrete implementation for the main operation with a boolean return value.
 */

import type { IDefinePlugins } from "@core/definePlugins/IDefinePlugins"
import type { IMain } from "@core/IMain"
import { container } from "@core/main.container"
import type { IDetectUserAgentEnv } from "@utils/detectUserAgentEnv/IDetectUserAgentEnv.ts"
import { LazyDOMElement } from "@utils/lazzy"
import type { ILazyElement } from "@utils/lazzy/ILazzy"
import type { ILazyInitService } from "@utils/lazzy/lazyInitService/ILazyInitService"
import type { IPageTransitionInitializer } from "@utils/pageEfects/IPageTransitionInitializer"
import type { IScrollElement } from "@utils/scrollElement/IScrollElement"
/**
 * Service responsible for executing the main operation.
 */
export class Main implements IMain {
    private detectUserAgente: IDetectUserAgentEnv
    private definePlugins: IDefinePlugins
    private scrollElement: IScrollElement
    private readonly lazyInitService: ILazyInitService
    private pageEfects: IPageTransitionInitializer
    constructor(
        detectUserAgente: IDetectUserAgentEnv,
        definePlugins: IDefinePlugins,
        scrollElement: IScrollElement,
        lazyInitService: ILazyInitService,
        pageEfects: IPageTransitionInitializer) {
        this.detectUserAgente = detectUserAgente
        this.definePlugins = definePlugins
        this.scrollElement = scrollElement
        this.lazyInitService = lazyInitService
        this.pageEfects = pageEfects
    }
    public execute(): boolean {
        try {
            const userAgente = this.detectUserAgente.detect()
            const definePlugins = this.definePlugins.getPlugins()
            const element = document.querySelector('.lazy-component') as HTMLElement;
            if (element) {
                const lazyElement: ILazyElement = new LazyDOMElement(element, this.scrollElement);
                this.lazyInitService.observe(lazyElement, () => {
                    console.log("Lazy element in view! Initializing plugin...");
                });
            }
            this.pageEfects.initialize()
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
    container.pageTransitionInitializer
)
export { main }
