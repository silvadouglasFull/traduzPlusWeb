import type { Delete, Get, Payload, RequestResponse } from "@api/types"

export interface IApi {
    get({ uri }: Get): RequestResponse

    post({ uri, body }: Payload): RequestResponse

    put({ uri, body }: Payload): RequestResponse

    patch({ uri, body }: Payload): RequestResponse

    delete({ uri }: Delete): RequestResponse
}