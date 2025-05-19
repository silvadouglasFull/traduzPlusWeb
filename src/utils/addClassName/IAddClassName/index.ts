import type { AddClassNameProps } from "@utils/addClassName/types"

export interface IAddClassName {
    set({ className, element }: AddClassNameProps): void
}