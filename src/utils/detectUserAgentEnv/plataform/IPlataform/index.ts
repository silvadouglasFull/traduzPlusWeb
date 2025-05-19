import type { TPlataforms } from "@utils/detectUserAgentEnv/plataform/types"
export interface IPlataform {
    get(): TPlataforms
}