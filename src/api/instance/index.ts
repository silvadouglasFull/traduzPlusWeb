import type { IGenerateHeaderOptions } from "@api/generateHeaderOptions/IGenerateHeaderOptions";
import type { IHttp } from "@api/http/IHttp";
import type { Delete, Get, Payload, RequestResponse } from "@api/types";
export class Api {
    private generateHeaderOptions: IGenerateHeaderOptions
    private http: IHttp
    constructor(generateHeaderOptions: IGenerateHeaderOptions, http: IHttp) {
        this.generateHeaderOptions = generateHeaderOptions
        this.http = http
    }
    async get({ uri }: Get): RequestResponse {
        return this.http.request(this.generateHeaderOptions.generateHeaders({ method: 'get', uri }))
    }

    async post({ uri, body }: Payload): RequestResponse {
        return this.http.request(this.generateHeaderOptions.generateHeaders({ method: 'post', uri, body }))
    }

    async put({ uri, body }: Payload): RequestResponse {
        return this.http.request(this.generateHeaderOptions.generateHeaders({ method: 'put', uri, body }))
    }

    async patch({ uri, body }: Payload): RequestResponse {
        return this.http.request(this.generateHeaderOptions.generateHeaders({ method: 'patch', uri, body }))
    }

    async delete({ uri }: Delete): RequestResponse {
        return this.http.request(this.generateHeaderOptions.generateHeaders({ method: 'delete', uri }))
    }
}
