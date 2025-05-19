export type ClassName = {
    className: string
}
export type CreateElementOptions<K extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap> = {
    tagName: K,
    options?: ElementCreationOptions & ClassName
}