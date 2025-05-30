import type { StatusCode } from "@api/types"
export type ToastStatusCode = StatusCode | null
export type UseSetVariant = {
    statusCode: ToastStatusCode
}