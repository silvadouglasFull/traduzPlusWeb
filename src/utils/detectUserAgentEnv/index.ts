/**
 * DetectUserAgentEnv.ts
 * @description Concrete implementation of user agent environment detection.
 */

import type { IDetectUserAgentEnv } from "@utils/detectUserAgentEnv/IDetectUserAgentEnv.ts";
import type { IPlataform } from "@utils/detectUserAgentEnv/plataform/IPlataform";
import type { UserAgentEnv } from "@utils/detectUserAgentEnv/types";

/**
 * Class responsible for detecting user agent and environment information.
 */
export class DetectUserAgentEnv implements IDetectUserAgentEnv {
    private readonly plataform: IPlataform
    constructor(plataform: IPlataform) {
        this.plataform = plataform
    }
    public detect(): UserAgentEnv | null {
        try {
            const userAgent: string = navigator.userAgent.toLowerCase();
            const initialDate: Date = new Date();

            const htmlElement = document.documentElement;
            const bodyElement = document.body;
            const isDesktop: boolean = htmlElement.classList.contains("desktop");

            let isIE: number | false = false;
            if (userAgent.indexOf("msie") !== -1) {
                isIE = parseInt(userAgent.split("msie")[1], 10);
            } else if (userAgent.indexOf("trident") !== -1) {
                isIE = 11;
            } else if (userAgent.indexOf("edge") !== -1) {
                isIE = 12;
            }

            const isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            const isNoviBuilder: boolean = false;
            const pageTransitionAnimationDuration: number = 500;
            let windowReady: boolean = false;
            let loaderTimeoutId: number | undefined;
            const plataform = this.plataform.get()
            return {
                userAgent,
                initialDate,
                htmlElement,
                bodyElement,
                isDesktop,
                isMobile,
                isNoviBuilder,
                pageTransitionAnimationDuration,
                isIE,
                windowReady,
                loaderTimeoutId,
                plataform,
            };
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
