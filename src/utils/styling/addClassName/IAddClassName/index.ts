import type { AddClassNameProps } from "@utils/styling/addClassName/types"

export interface IAddClassName {
    set({ className, element }: AddClassNameProps): void
}