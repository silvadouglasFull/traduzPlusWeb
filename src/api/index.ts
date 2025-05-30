import { container } from "@api/api.container"
import type { Body } from "@api/generateHeaderOptions/types"
export const api = {
    get: async (uri: string) => container().get({ uri }),
    post: async (uri: string, body?: Body) => container().post({ uri, body }),
    put: async (uri: string, body?: Body) => container().put({ uri, body }),
    patch: async (uri: string, body?: Body) => container().patch({ uri, body }),
    delete: async (uri: string) => container().delete({ uri })
}