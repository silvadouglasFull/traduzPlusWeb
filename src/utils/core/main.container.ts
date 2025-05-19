import type { Container } from "@core/types"
import { AddClassName } from "@utils/addClassName"
import { StatefulButtonService } from "@utils/buttonsEfect"
import { DetectUserAgentEnv } from "@utils/detectUserAgentEnv"
import { PlataForms } from "@utils/detectUserAgentEnv/plataform"
import { IsTagerOs } from "@utils/detectUserAgentEnv/plataform/isTargetOs"
import { WindowDimensions } from "@utils/detectUserAgentEnv/windowDimensions"
import { LazyInitService } from "@utils/lazzy/lazyInitService"
import { PageTransitionInitializer } from "@utils/pageEfects"
import { PageTransitionService } from "@utils/pageEfects/smooth"
import { PopoverService } from "@utils/popouver"
import { ScrollDetection } from "@utils/scrollElement"
import { TabHandler } from "@utils/tabsHandler"
import { DefinePlugins } from "./definePlugins"

const plataforms = new PlataForms()
const detectUserAgentEnv = new DetectUserAgentEnv(plataforms)
const definePlugins = new DefinePlugins()
const isNoviBuilder = false
const scrollElement = new ScrollDetection(window, isNoviBuilder)
const lazzy = new LazyInitService(window)
const preloader = document.querySelectorAll(".preloader")
const pageTransitionService = new PageTransitionService()
const isTargetOs = new IsTagerOs(plataforms)
const addClassName = new AddClassName(isTargetOs)
const windowDimensions = new WindowDimensions()
const pageTransitionInitializer = new PageTransitionInitializer(preloader, false, 1000, pageTransitionService)
const popouver = new PopoverService(720, windowDimensions)
const statefulButtons = definePlugins.getPlugins()?.statefulButton as NodeListOf<HTMLButtonElement> | undefined
const butonsEfect = statefulButtons ? new StatefulButtonService(statefulButtons) : null
const tabHandler = new TabHandler({ isBuilderMode: detectUserAgentEnv.detect()?.isNoviBuilder || false })
export const container: Container = {
    detectUserAgentEnv,
    definePlugins,
    scrollElement,
    lazzy,
    pageTransitionInitializer,
    addClassName,
    popouver,
    butonsEfect,
    tabHandler
}