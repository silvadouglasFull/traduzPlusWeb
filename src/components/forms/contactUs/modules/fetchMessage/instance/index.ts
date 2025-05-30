import type { StatusCode, TApi } from "@api/types";
import { endPoints } from "@components/forms/contactUs/modules/fetchMessage/constants";
import type { Prefix } from "@components/forms/contactUs/modules/fetchMessage/constants/types";
import type { IFetch } from "@components/forms/contactUs/modules/fetchMessage/instance/IFetch";
import type { Payload, SendMessageResponse } from "@components/forms/contactUs/modules/fetchMessage/types";

export class Fetch implements IFetch {
    private api: TApi
    private prefix: Prefix
    constructor(api: TApi, prefix: Prefix) {
        this.api = api
        this.prefix = prefix
    }
    async send(body: Payload): SendMessageResponse {
        try {
            const response = await this.api.post(`/${this.prefix}/${endPoints.sendMessage}`, body)
            const json = await response.json()
            return {
                message: json?.message,
                statusCode: response.status as StatusCode
            }
        } catch (error) {
            return {
                message: String(error),
                statusCode: 500
            }
        }
    }
}