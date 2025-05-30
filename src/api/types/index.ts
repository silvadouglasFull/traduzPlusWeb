import type { Body } from "@api/generateHeaderOptions/types"
import { api } from "@api/index"
export type RequestResponse = Promise<Response>
export type Get = {
    uri: string
}
export type Delete = {
    uri: string
}
export type Payload = { uri: string, body: Body }
export type TApi = typeof api
export type StatusCodeInfo = 199
export type StatusCodeSuccess = 200 | 201
export type StatusCodeWarning = 403 | 405 | 420
export type StatusCodeDanger = 500 | 504
export type StatusCode = StatusCodeInfo | StatusCodeSuccess | StatusCodeWarning | StatusCodeDanger
export type ResponseRequest = {
    message: string
    statusCode: StatusCode
    data?: []
}