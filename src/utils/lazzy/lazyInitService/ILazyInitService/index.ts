import type { ILazyElement } from "@utils/lazzy/ILazzy";

// ILazyInitService.ts
export interface ILazyInitService {
    observe(element: ILazyElement, callback: () => void): void;
}
