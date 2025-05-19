/**
 * Interface representing an element that can be lazily initialized.
 */
export interface ILazyElement {
    isAlreadyLoaded(): boolean;
    markAsLoaded(): void;
    isInView(isNoviBuilder: boolean): boolean;
}
