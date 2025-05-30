import { api } from "@api/index"
import { prefix } from "@components/forms/contactUs/modules/fetchMessage/constants"
import { Fetch } from "@components/forms/contactUs/modules/fetchMessage/instance"

export const container = () => {
    const Api = api
    const Prefix = prefix
    const fetchInstance = new Fetch(Api, Prefix)
    return fetchInstance
}