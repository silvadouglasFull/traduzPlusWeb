import type { IDefinePlugins } from "@core/definePlugins/IDefinePlugins"
import type { IDetectUserAgentEnv } from "@utils/detectUserAgentEnv/IDetectUserAgentEnv.ts"
import type { ILazyInitService } from "@utils/lazzy/ILazyInitService"
import type { IPageTransitionInitializer } from "@utils/pageEfects/IPageTransitionInitializer"
import type { IPopoverInitializer } from "@utils/popouver/IPopoverInitializer"
import type { IScrollElement } from "@utils/scrollElement/IScrollElement"
import type { IAddClassName } from "@utils/styling/addClassName/IAddClassName"
import type { IButtonsEfect } from "@utils/styling/buttonsEfect/IButtonsEfect"
import type { IRadioButon } from "@utils/styling/radionButton/IRadionButon"
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
    stylingRadiosButons: IRadioButon
}