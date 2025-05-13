/**
 * Main.ts
 * @description Concrete implementation for the main operation with a boolean return value.
 */

import type { IDefinePlugins } from "@core/definePlugins/IDefinePlugins"
import type { IMain } from "@core/IMain"
import type { IDetectUserAgentEnv } from "@utils/detectUserAgentEnv/IDetectUserAgentEnv.ts"
import type { IScrollElement } from "@utils/scrollElement/IScrollElement"

/**
 * Service responsible for executing the main operation.
 */
export class Main implements IMain {
    private detectUserAgente: IDetectUserAgentEnv
    private definePlugins: IDefinePlugins
    private scrollElement: IScrollElement
    constructor(
        detectUserAgente: IDetectUserAgentEnv,
        definePlugins: IDefinePlugins,
        scrollElement: IScrollElement) {
        this.detectUserAgente = detectUserAgente
        this.definePlugins = definePlugins
        this.scrollElement = scrollElement
    }
    public execute(): boolean {
        try {
            const userAgente = this.detectUserAgente.detect()
            const definePlugins = this.definePlugins.getPlugins()
            // const scrollElement = this.scrollElement.isScrolledIntoView()
            return true
        } catch (error) {
            console.error("Main operation failed:", error)
            return false
        }
    }
}
