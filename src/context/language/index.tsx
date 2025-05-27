import type { Language } from "@components/carrosel/item/types";
import type { ContextProvider } from "@context/language/types";
import { createContext, useState } from "react";

export const Context = createContext<ContextProvider | undefined>(undefined)
export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en')
    const [icon, setIcon] = useState('🌐')
    return (
        <Context.Provider
            value={{
                language, setLanguage, icon, setIcon
            }}>
            {children}
        </Context.Provider>
    )
}