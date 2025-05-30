import { api } from "@api/index"
import { Fetch } from "@components/forms/contactUs/modules/fetchMessage/instance"

export const container = () => {
    const Api = api
    const fetchInstance = new Fetch(Api)
    return fetchInstance
}