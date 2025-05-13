export type UserAgentEnv = {
    userAgent: string;
    initialDate: Date;
    htmlElement: HTMLElement;
    bodyElement: HTMLElement;
    isDesktop: boolean;
    isMobile: boolean;
    isNoviBuilder: boolean;
    pageTransitionAnimationDuration: number;
    isIE: number | false;
    windowReady: boolean;
    loaderTimeoutId: number | undefined;
}
