export const scrollOnElenet = (elementId: string): void => {
    elementId && document.getElementById(elementId)?.scrollIntoView()
}