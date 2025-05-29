export type ENV = 'develop' | 'test' | 'homol' | 'production'
export type Versions = 'v1' | 'v2'
export type Host = {
    host: string
    env: ENV
}