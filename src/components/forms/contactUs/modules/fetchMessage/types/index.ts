import type { ResponseRequest } from "@api/types"
import type { Language } from "@components/carrosel/item/types"
export type Payload = {
    recipient_email: string
    subject: string
    body: string
    language: Language
}
export type SendMessageResponse = Promise<ResponseRequest>