type MovieType = {
    url: string
    type: "mp4" | "webm" | "ogg"
}
type MovieProps = {
    video: MovieType[],
    autPlay: boolean
    muted: boolean
    loop: boolean
}
export type { MovieProps, MovieType }
