import type { AnimationSlideProps } from "@components/animationSlide/types";
import { motion } from "framer-motion";
import type React from "react";
import { useInView } from 'react-intersection-observer';
import { useXPoint } from "./hooks/useXPoint";
export const AnimationSlide: React.FC<React.PropsWithChildren<{}> & AnimationSlideProps> = ({ children, direction = 'left' }) => {
    const { xPoint } = useXPoint({ direction })
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2 // 20% of the image is visible to trigger
    })
    return (
        <motion.div
            ref={ref}
            initial={{ x: xPoint, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: xPoint, opacity: 0 }}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20
            }}
        >
            {children}
        </motion.div>
    )
}