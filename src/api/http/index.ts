import type { Header } from "@api/generateHeaderOptions/types";
import type { IHttp } from "@api/http/IHttp";
import type { RequestResponse } from "@api/http/types";
export class ApiHttp implements IHttp {
    async request({ options, url }: Header): RequestResponse {
        const { body, ...rest } = options
        return fetch(url, { ...rest, body: JSON.stringify(body) })
    }
}