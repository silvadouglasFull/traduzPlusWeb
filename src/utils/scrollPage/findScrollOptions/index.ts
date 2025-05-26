import type { Directions, ScrollDirection, ScrollPosition } from "@utils/scrollPage/types";
export const findScrollOptions = (createdPositions: ScrollDirection[], direction: Directions): ScrollPosition => {
    const findScrollOptions = createdPositions?.find(item => item.direction === direction)
    if (!findScrollOptions) {
        throw new Error("Not found options scroll");
    }
    const { scrollPosition: { left = 0, top = 0 } } = findScrollOptions
    return {
        left, top
    }
}