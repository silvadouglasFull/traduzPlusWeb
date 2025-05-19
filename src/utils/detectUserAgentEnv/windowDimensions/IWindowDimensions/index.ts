import type { TWindowDimensions } from "@utils/detectUserAgentEnv/windowDimensions/types";

export interface IWindowDimensions {
    get(): TWindowDimensions
}