import { container } from "@components/forms/contactUs/modules/fetchMessage/container";
import type { Payload } from "@components/forms/contactUs/modules/fetchMessage/types";

export const message = {
    send: (body: Payload) => container().send(body)
}