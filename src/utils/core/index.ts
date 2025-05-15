/**
 * Main.ts
 * @description Concrete implementation for the main operation with a boolean return value.
 */

import type { IDefinePlugins } from "@core/definePlugins/IDefinePlugins"
import type { IMain } from "@core/IMain"
import { DetectUserAgentEnv } from "@utils/detectUserAgentEnv"
import type { IDetectUserAgentEnv } from "@utils/detectUserAgentEnv/IDetectUserAgentEnv.ts"
import { LazyDOMElement } from "@utils/lazzy"
import type { ILazyElement } from "@utils/lazzy/ILazzy"
import { LazyInitService } from "@utils/lazzy/lazyInitService"
import type { ILazyInitService } from "@utils/lazzy/lazyInitService/ILazyInitService"
import { PageTransitionInitializer } from "@utils/pageEfects"
import type { IPageTransitionInitializer } from "@utils/pageEfects/IPageTransitionInitializer"
import { PageTransitionService } from "@utils/pageEfects/smooth"
import { ScrollDetection } from "@utils/scrollElement"
import type { IScrollElement } from "@utils/scrollElement/IScrollElement"
import { DefinePlugins } from "./definePlugins"

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
const detectUserAgentEnv = new DetectUserAgentEnv()
const definePlugins = new DefinePlugins()
// Use the global window object directly
const isNoviBuilder = false
const scrollElement = new ScrollDetection(window, isNoviBuilder)
const lazzy = new LazyInitService(window)
const preloader = document.querySelectorAll(".preloader")
const pageTransitionService = new PageTransitionService()
const pageTransitionInitializer = new PageTransitionInitializer(preloader, false, 1000, pageTransitionService)
const main = new Main(
    detectUserAgentEnv,
    definePlugins,
    scrollElement,
    lazzy,
    pageTransitionInitializer
)
export { main }
