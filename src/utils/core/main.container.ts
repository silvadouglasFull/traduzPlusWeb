import type { Container } from "@core/types"
import { DetectUserAgentEnv } from "@utils/detectUserAgentEnv"
import { PlataForms } from "@utils/detectUserAgentEnv/plataform"
import { IsTagerOs } from "@utils/detectUserAgentEnv/plataform/isTargetOs"
import { WindowDimensions } from "@utils/detectUserAgentEnv/windowDimensions"
import { LazyInitService } from "@utils/lazzy/lazyInitService"
import { PageTransitionInitializer } from "@utils/pageEfects"
import { PageTransitionService } from "@utils/pageEfects/smooth"
import { PopoverService } from "@utils/popouver"
import { ScrollDetection } from "@utils/scrollElement"
import { ToTop } from "@utils/scrollElement/scrollPage/toTop"
import { AddClassName } from "@utils/styling/addClassName"
import { StatefulButtonService } from "@utils/styling/buttonsEfect"
import { CreateElementHml } from "@utils/styling/createElementHtml"
import { CustomStyling } from "@utils/styling/customStyling"
import { ResponsiveNavbar } from "@utils/styling/responsiveNavBar"
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
const createElement = new CreateElementHml()
const customStyling = new CustomStyling(createElement)
const scrollPage = new ToTop({
    easingType: 'easeOutQuad',
    containerClass: 'ui-to-top'
})
const rdNavbarElements = definePlugins.getPlugins()?.rdNavbar as NodeListOf<HTMLElement> | undefined
const responsiveNavbar = rdNavbarElements ? new ResponsiveNavbar(rdNavbarElements, detectUserAgentEnv.detect()?.isNoviBuilder || false) : null
export const container: Container = {
    detectUserAgentEnv,
    definePlugins,
    scrollElement,
    lazzy,
    pageTransitionInitializer,
    addClassName,
    popouver,
    butonsEfect,
    tabHandler,
    customStyling,
    scrollPage,
    responsiveNavbar
}