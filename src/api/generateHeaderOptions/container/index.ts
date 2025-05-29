import { GenerateBaseUrl } from "@api/generateBaseUrl"
import { GenerateHeaderOptions } from "@api/generateHeaderOptions"
import type { TGenerateHeaderProps } from "@api/generateHeaderOptions/types"
import { apiVersion } from "@flavor/index"

export const generateHeaders = ({ body, method, uri }: TGenerateHeaderProps) => {
    const generateBaseUrl = new GenerateBaseUrl(apiVersion)
    const generateHeaders = new GenerateHeaderOptions(generateBaseUrl, { body, method, uri })
    return generateHeaders
}