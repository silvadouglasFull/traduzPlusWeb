import type { ResponseRequest } from "@api/types"
export type Payload = {
    recipient_email: string
    subject: string
    body: string
}
export type SendMessageResponse = Promise<ResponseRequest>