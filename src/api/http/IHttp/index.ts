import type { Header } from "@api/generateHeaderOptions/types";
import type { RequestResponse } from "@api/http/types";

export interface IHttp {
    request({ options, url }: Header): RequestResponse
}