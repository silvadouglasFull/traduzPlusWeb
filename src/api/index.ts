import { generateHeaders } from "@api/generateHeaderOptions/container";
import type { TGenerateHeaderProps } from "@api/generateHeaderOptions/types";
import { ApiHttp } from "./http";

export class Api {
    constructor({ body, method, uri }: TGenerateHeaderProps) {
        this.init({ body, method, uri })
    }
    init({ body, method, uri }: TGenerateHeaderProps) {
        const generateHeader = generateHeaders({ body, method, uri })
        return new ApiHttp(generateHeader.generateHeaders({ body, method, uri }))
    }
}