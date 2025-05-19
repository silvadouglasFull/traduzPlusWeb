import type { IAddClassName } from "@utils/addClassName/IAddClassName";
import type { AddClassNameProps } from "@utils/addClassName/types";
import type { IIsTargetOs } from "@utils/detectUserAgentEnv/plataform/isTargetOs/IIsTargetOs";
export class AddClassName implements IAddClassName {
    private readonly isTargetOs: IIsTargetOs
    constructor(isTargetOs: IIsTargetOs) {
        this.isTargetOs = isTargetOs
    }
    set({ className, element }: AddClassNameProps): void {
        if (this.isTargetOs.isOs('Mac')) {
            element.classList.add(className)
        }
    }
}