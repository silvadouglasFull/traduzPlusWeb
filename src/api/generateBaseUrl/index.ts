import { hosts } from "@api/constants";
import type { ENV, Versions } from "@api/constants/types";
import type { IGenerateBaseUrl } from "@api/generateBaseUrl/IGenerateBaseUrl";
import { REACT_APP_ENV } from "@config/index";

export class GenerateBaseUrl implements IGenerateBaseUrl {
    private version: Versions
    constructor(version: Versions) {
        this.version = version
    }

    public getBaseURL(env: ENV): string {
        return hosts.find(item => item.env === env)?.host ?? ''
    }
    public formatUrl(url: string): string {
        return `${this.getBaseURL(REACT_APP_ENV)}/${this.version}${url}`
    }
}