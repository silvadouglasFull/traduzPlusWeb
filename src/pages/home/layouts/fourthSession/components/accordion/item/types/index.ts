export type Description = {
    id: string | number,
    description: string
}
export type Item = {
    id: number | number,
    title: string
    descriptions: Array<Description>
}