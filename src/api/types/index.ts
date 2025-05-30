import type { Body } from "@api/generateHeaderOptions/types"

export type RequestResponse = Promise<Response>
export type Get = {
    uri: string
}
export type Delete = {
    uri: string
}
export type Payload = { uri: string, body: Body }