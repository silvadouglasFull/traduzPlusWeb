import type { IIsTargetOs } from "@utils/detectUserAgentEnv/plataform/isTargetOs/IIsTargetOs";
import type { IAddClassName } from "@utils/styling/addClassName/IAddClassName";
import type { AddClassNameProps } from "@utils/styling/addClassName/types";
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