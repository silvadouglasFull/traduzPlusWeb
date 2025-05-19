import type { IIsTargetOs } from "@utils/detectUserAgentEnv/plataform/isTargetOs/IIsTargetOs";
import type { IPlataform } from "../IPlataform";
import type { TIsTargetOs } from "./types";

export class IsTagerOs implements IIsTargetOs {
    private plataform: IPlataform
    constructor(plataform: IPlataform) {
        this.plataform = plataform
    }
    public isOs(targetOs: string): TIsTargetOs {
        const plataform = this.plataform.get()
        return !!plataform?.match(new RegExp(targetOs, 'i'))
    }
}