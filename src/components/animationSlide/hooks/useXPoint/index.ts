import type { AnimationSlideProps, UseXPoint } from "@components/animationSlide/types";

export const useXPoint = ({ direction }: AnimationSlideProps): UseXPoint => {
    const xPoint = direction === 'left' ? -200 : 200;
    return { xPoint };
}