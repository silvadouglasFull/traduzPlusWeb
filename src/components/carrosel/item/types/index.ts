export type Language = 'en' | 'pt' | '缩写'
export type ItemProps = {
    midia: string
    title: string
    subTitle: string
    id?: number
    language?: Language
    textButton?: string
}