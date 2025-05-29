import type { ENV } from "@api/constants/types";

export interface IGenerateBaseUrl {
    getBaseURL(env: ENV): string
    formatUrl(url: string): string
}