import type { TIsTargetOs } from "@utils/detectUserAgentEnv/plataform/isTargetOs/types";

export interface IIsTargetOs {
    isOs(targetOs: string): TIsTargetOs
}