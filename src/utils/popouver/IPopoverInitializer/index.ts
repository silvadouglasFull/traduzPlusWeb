import type { PopoverElement } from "@utils/popouver/types";

export interface IPopoverInitializer {
    init(elements: PopoverElement): void;
}
