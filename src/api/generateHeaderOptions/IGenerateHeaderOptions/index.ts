import type { Header, TGenerateHeaderProps } from "@api/generateHeaderOptions/types";

export interface IGenerateHeaderOptions {
    generateHeaders({ body, method, uri }: TGenerateHeaderProps): Header
}