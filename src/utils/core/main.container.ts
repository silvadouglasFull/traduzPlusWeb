import { DetectUserAgentEnv } from "@utils/detectUserAgentEnv"
import { LazyInitService } from "@utils/lazzy/lazyInitService"
import { PageTransitionInitializer } from "@utils/pageEfects"
import { PageTransitionService } from "@utils/pageEfects/smooth"
import { ScrollDetection } from "@utils/scrollElement"
import { DefinePlugins } from "./definePlugins"
const detectUserAgentEnv = new DetectUserAgentEnv()
const definePlugins = new DefinePlugins()
const isNoviBuilder = false
const scrollElement = new ScrollDetection(window, isNoviBuilder)
const lazzy = new LazyInitService(window)
const preloader = document.querySelectorAll(".preloader")
const pageTransitionService = new PageTransitionService()
const pageTransitionInitializer = new PageTransitionInitializer(preloader, false, 1000, pageTransitionService)
export const container = {
    detectUserAgentEnv,
    definePlugins,
    scrollElement,
    lazzy,
    pageTransitionInitializer
}