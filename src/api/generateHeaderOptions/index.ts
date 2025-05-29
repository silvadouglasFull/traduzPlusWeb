import type { IGenerateBaseUrl } from "@api/generateBaseUrl/IGenerateBaseUrl";
import type { Header, Headers, Methods, TGenerateHeaderProps } from "@api/generateHeaderOptions/types";
export class GenerateHeaderOptions {
    private generateBaseUrl: IGenerateBaseUrl
    constructor(generateBaseUrl: IGenerateBaseUrl, { body, method, uri }: TGenerateHeaderProps) {
        this.generateBaseUrl = generateBaseUrl
        this.generateHeaders({ body, method, uri })

    }
    setHeaders(method: Methods) {
        const headers: Headers = {
            "Content-Type": 'application/json',
            Authentication: '',
            Authorization: ''
        }
        if (method === 'get') {
            delete headers["Content-Type"]
        }
        return headers
    }
    generateHeaders({ body, method, uri }: TGenerateHeaderProps): Header {
        const url = this.generateBaseUrl.formatUrl(uri)
        const headers = this.setHeaders(method)
        return {
            url: url,
            options: {
                body,
                headers,
                method
            }
        }
    }
}