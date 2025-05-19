import type { IWindowDimensions } from "@utils/detectUserAgentEnv/windowDimensions/IWindowDimensions"
import type { IPopoverInitializer } from "@utils/popouver/IPopoverInitializer"
import type { PopoverElement } from "@utils/popouver/types"
import bootstrap from "bootstrap"
export class PopoverService implements IPopoverInitializer {
    private readonly screenThreshold: number
    private windowDimensions: IWindowDimensions
    constructor(
        screenThreshold: number = 767,
        windowDimensions: IWindowDimensions
    ) {
        this.screenThreshold = screenThreshold
        this.windowDimensions = windowDimensions
    }
    private setAtribute(element: HTMLElement): void {
        element.setAttribute("data-placement", "bottom")
    }
    public init(elements: PopoverElement): void {
        if (!elements.length) return

        elements.forEach((element) => {
            if (this.windowDimensions.get().widht < this.screenThreshold) {
                this.setAtribute(element)
            }
            const popover = bootstrap.Popover.getOrCreateInstance(element)
            popover.show()
        })
    }
}
