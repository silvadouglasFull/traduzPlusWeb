export type Directions = 'left' | 'top' | 'top-left'
export type Position = number
export type ScrollPosition = {
    top?: Position,
    left?: Position
}
export type ScrollDirection = {
    direction: Directions
    scrollPosition: {
        top?: Position,
        left?: Position
    }
}