import type { ILazyElement } from "@utils/lazzy/ILazzy";

export interface ILazyInitService {
    observe(element: ILazyElement, callback: () => void, isNoviBuilder: boolean): void
}