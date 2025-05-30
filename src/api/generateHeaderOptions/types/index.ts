export type Methods = 'get' | 'post' | 'update' | 'put' | 'patch' | 'delete'
export type Body = Object | undefined
export type TGenerateHeaderProps = {
    uri: string
    method: Methods
    body?: Body
}
export type ContentType = 'application/json'
export type Headers = {
    'API-KEY': string
    'Content-Type'?: ContentType
}
export type Options = {
    method: Methods
    headers: Headers
    body?: Body
}
export type Header = {
    url: string
    options: Options
}
