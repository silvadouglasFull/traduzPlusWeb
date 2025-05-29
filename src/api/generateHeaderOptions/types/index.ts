export type Methods = 'get' | 'post' | 'update' | 'put' | 'delete'
export type Uri = string
export type Body = Object
export type TGenerateHeaderProps = {
    uri: Uri
    method: Methods
    body: Body
}
export type ContentType = 'application/json'
export type Headers = {
    Authentication?: string
    Authorization?: string
    'Content-Type'?: ContentType
}
export type Options = {
    method: Methods
    headers: Headers
    body: Body
}
export type Header = {
    url: string
    options: Options
}