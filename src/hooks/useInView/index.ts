import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(): [React.RefObject<T>, boolean] {
    const ref = useRef<T>(null!);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.3 }
        );

        const current = ref.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);

    return [ref, isInView];
}
