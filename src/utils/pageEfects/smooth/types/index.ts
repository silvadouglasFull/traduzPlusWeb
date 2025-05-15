/**
 * type for the configuration of the page transition.
 */
export type PageTransitionOptions = {
    target: HTMLElement | null;
    delay?: number;
    duration?: number;
    classIn?: string | null;
    classOut?: string | null;
    classActive?: string | null;
    onReady?: (options: PageTransitionOptions) => void;
    onTransitionStart?: (options: PageTransitionOptions) => void;
    onTransitionEnd?: (options: PageTransitionOptions) => void;
    conditions?: (event: MouseEvent, href: string) => boolean;
}