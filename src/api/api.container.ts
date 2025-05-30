import { GenerateBaseUrl } from "@api/generateBaseUrl"
import { GenerateHeaderOptions } from "@api/generateHeaderOptions"
import { ApiHttp } from "@api/http"
import { Api } from "@api/instance"
import { apiVersion } from "@flavor/index"
export const container = () => {
    const generateBaseUrl = new GenerateBaseUrl(apiVersion)
    const generateHeaderOptions = new GenerateHeaderOptions(generateBaseUrl)
    const apiHttp = new ApiHttp()
    const apiInstance = new Api(generateHeaderOptions, apiHttp)
    return apiInstance
}