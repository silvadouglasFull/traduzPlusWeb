import type { PageTransitionOptions } from "@utils/pageEfects/smooth/types";

/**
 * IPageTransitionService
 * @description Contract for the PageTransitionService class.
 */
export interface IPageTransitionService {
    /**
     * Initializes the page transition behavior.
     */
    init(options: Partial<PageTransitionOptions>): void;

    /**
     * Handles the link click and triggers a page transition.
     * @param event MouseEvent
     */
    handleLinkClick(event: Event): void;
}
