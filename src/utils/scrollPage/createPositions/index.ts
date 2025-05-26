import type { ScrollDirection, ScrollPosition } from "@utils/scrollPage/types";

export const createPositions = ({ left, top }: ScrollPosition): ScrollDirection[] => {
    return [
        {
            direction: 'left', scrollPosition: { left: left }
        },
        {
            direction: 'top', scrollPosition: { top: top }
        },
        {
            direction: 'top-left', scrollPosition: { top: top, left: left }
        }
    ]
}