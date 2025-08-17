import { createContext, useContext } from "react";

// can give default value 
// context can also be empty but recommended in this format
export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}
