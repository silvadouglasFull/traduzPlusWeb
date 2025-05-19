import type { IWindowDimensions } from "@utils/detectUserAgentEnv/windowDimensions/IWindowDimensions"
import type { TWindowDimensions } from "@utils/detectUserAgentEnv/windowDimensions/types"
export class WindowDimensions implements IWindowDimensions {
    public get(): TWindowDimensions {
        const widht = window.innerWidth
        const height = window.innerHeight
        return {
            widht,
            height,
        }
    }
}