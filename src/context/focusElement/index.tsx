import type { Provider as TProvider } from "@context/focusElement/types";
import React, { createContext, useRef } from "react";

export const Context = createContext<TProvider | undefined>(undefined)
export const Provider: React.FC<React.PropsWithChildren> = ({ children }: React.PropsWithChildren) => {
    const refElement = useRef<HTMLDivElement | null>(null)
    const scrollEment = () => {
        if (refElement.current?.scrollIntoView) {
            refElement.current?.scrollIntoView()
        }
    }
    return (
        <Context.Provider
            value={{
                scrollEment,
                refElement
            }}>
            {children}
        </Context.Provider>
    )
}