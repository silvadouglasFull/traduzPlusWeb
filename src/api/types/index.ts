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
export type StatusCodeError = 420 | 500
export type StatusCodeSuccess = 201 | 200
export type ResponseError = {
    message: string
    statusCode: StatusCodeError
}
export type ResponseSucess = {
    message: string
    statusCode: StatusCodeSuccess
}