import type { ResponseError, ResponseSucess } from "@api/types"
import type { States } from "@components/forms/contactUs/context/types"
export type Payload = States
export type SendMessageResponse = Promise<ResponseError | ResponseSucess>