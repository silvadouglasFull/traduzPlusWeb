import type { CustomStylingProps } from "@utils/styling/customStyling/types";

export interface ICustomStyling {
    set({ elements, className, where }: CustomStylingProps): void
}