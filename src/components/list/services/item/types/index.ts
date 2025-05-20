export type Description = {
    id: number,
    description: string
}
export type Item = {
    id: number
    icon: string,
    name: string,
    descriptions: Array<Description>,
    textButon: string,
    link: string
}