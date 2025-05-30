import type { Payload, SendMessageResponse } from "@components/forms/contactUs/modules/fetchMessage/types";
export interface IFetch {
    send(body: Payload): SendMessageResponse
}