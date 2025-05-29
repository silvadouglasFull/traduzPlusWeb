import type { Header } from "@api/generateHeaderOptions/types";
export class ApiHttp {
    constructor({ options, url }: Header) {
        this.init({ options, url })
    }
    init({ options, url }: Header) {
        const { body, ...rest } = options
        return fetch(url, { ...rest, body: JSON.stringify(body) })
    }
}