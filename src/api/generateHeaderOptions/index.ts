import type { IGenerateBaseUrl } from "@api/generateBaseUrl/IGenerateBaseUrl";
import type { IGenerateHeaderOptions } from "@api/generateHeaderOptions/IGenerateHeaderOptions";
import type { Header, Headers, Methods, TGenerateHeaderProps } from "@api/generateHeaderOptions/types";
import { VITE_X_API_KEY } from "@config/index";

export class GenerateHeaderOptions implements IGenerateHeaderOptions {
    private generateBaseUrl: IGenerateBaseUrl
    constructor(generateBaseUrl: IGenerateBaseUrl) {
        this.generateBaseUrl = generateBaseUrl
    }
    setHeaders(method: Methods) {
        const headers: Headers = {
            "Content-Type": 'application/json',
            'Api-Key': VITE_X_API_KEY,
            'Accept': 'application/json'
        }
        if (method === 'get') {
            delete headers["Content-Type"]
        }
        return headers
    }
    public generateHeaders({ body, method, uri }: TGenerateHeaderProps): Header {
        const url = this.generateBaseUrl.formatUrl(uri)
        const headers = this.setHeaders(method)
        const options = {
            headers,
            method,
            body
        }
        if (!body) {
            delete options.body
        }
        return {
            url,
            options
        }
    }
}