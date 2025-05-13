import type { MovieType } from "@components/heroSlider/movie/types";

export type Slide = {
    background: string;
    title: string;
    subtitle: string;
    buttonText: string;
    video?: Array<MovieType>;
}
