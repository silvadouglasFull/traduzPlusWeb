import type { IDefinePlugins } from "@core/definePlugins/IDefinePlugins"
import type { IDetectUserAgentEnv } from "@utils/detectUserAgentEnv/IDetectUserAgentEnv.ts"
import type { ILazyInitService } from "@utils/lazzy/ILazyInitService"
import type { IPageTransitionInitializer } from "@utils/pageEfects/IPageTransitionInitializer"
import type { IPopoverInitializer } from "@utils/popouver/IPopoverInitializer"
import type { IScrollElement } from "@utils/scrollElement/IScrollElement"
import type { IScrollPage } from "@utils/scrollElement/scrollPage/IScrollPage"
import type { IAddClassName } from "@utils/styling/addClassName/IAddClassName"
import type { IButtonsEfect } from "@utils/styling/buttonsEfect/IButtonsEfect"
import type { ICustomStyling } from "@utils/styling/customStyling/ICustomStyling"
import type { IResponsiveNavBar } from "@utils/styling/responsiveNavBar/IResponsiveNavBar"
import type { ITabHandler } from "@utils/tabsHandler/ITabsHandler"

export type Container = {
    detectUserAgentEnv: IDetectUserAgentEnv,
    definePlugins: IDefinePlugins,
    scrollElement: IScrollElement,
    lazzy: ILazyInitService,
    pageTransitionInitializer: IPageTransitionInitializer,
    addClassName: IAddClassName,
    popouver: IPopoverInitializer,
    butonsEfect: IButtonsEfect | null
    tabHandler: ITabHandler,
    customStyling: ICustomStyling,
    scrollPage: IScrollPage,
    responsiveNavbar: IResponsiveNavBar | null
}