
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext()

export const ThemeProvider =({children} )=> {
    const [theme,setTheme] =useState(()=>{
        const savedTheme = localStorage.getItem('theme')
        return savedTheme? savedTheme: 'dark'
    })

    useEffect(()=>{
        document.documentElement.classList.remove('dark', 'light')
        document.documentElement.classList.add(theme)
        localStorage.setItem('theme',theme)
    },[theme])

    const toggleTheme=()=> {
        setTheme((prev) => (prev === 'dark' ? 'light':'dark'))
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
