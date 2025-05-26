import type { AnimationSlideProps, UseXPoint } from "@components/animationSlide/slideLeftRight/types";

export const useXPoint = ({ direction }: AnimationSlideProps): UseXPoint => {
    const xPoint = direction === 'left' ? -200 : 200;
    return { xPoint };
}