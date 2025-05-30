import type { StatusCodeError, StatusCodeSuccess, TApi } from "@api/types";
import { endPoints } from "@components/forms/contactUs/modules/fetchMessage/constants";
import type { IFetch } from "@components/forms/contactUs/modules/fetchMessage/instance/IFetch";
import type { Payload, SendMessageResponse } from "@components/forms/contactUs/modules/fetchMessage/types";

export class Fetch implements IFetch {
    private api: TApi
    constructor(api: TApi) {
        this.api = api
    }
    async send(body: Payload): SendMessageResponse {
        try {
            const response = await this.api.post(endPoints.sendMessage, body)
            const json = await response.json()
            return {
                message: json?.message,
                statusCode: response.ok ? response.status as StatusCodeSuccess : response.status as StatusCodeError
            }
        } catch (error) {
            return {
                message: String(error),
                statusCode: 500
            }
        }
    }
}