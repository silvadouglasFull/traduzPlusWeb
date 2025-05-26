import { Context } from "@context/language";
import { useContext } from "react";

export const useLanguage = () => {
    const context = useContext(Context)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}