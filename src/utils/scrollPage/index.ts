import { createPositions } from "@utils/scrollPage/createPositions";
import { findScrollOptions } from "@utils/scrollPage/findScrollOptions";
import type { ScrollDirection } from "@utils/scrollPage/types";
export const scrollTo = ({ direction, scrollPosition }: ScrollDirection): void => {
    const createdPositions = createPositions({ ...scrollPosition })
    const scrollPositions = findScrollOptions(createdPositions, direction)
    if (scrollPositions) window.scrollTo({ top: scrollPositions.top, left: scrollPositions.left, behavior: 'smooth' })
}