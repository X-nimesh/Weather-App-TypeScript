import React, { useContext, useState } from 'react'
export const ThemeContext = React.createContext(false)

const ThemeProvider = ({ children }) => {
    const [DarkTheme, setDarkTheme] = useState(false)
    let themeChange = () => {
        setDarkTheme(!DarkTheme);
        console.log(DarkTheme, 'asd');
    }
    return (
        <ThemeContext.Provider value={{ DarkTheme, themeChange }}>
            {children}
        </ThemeContext.Provider >
    )
    // const { DarkTheme, themeChange } = useContext(ThemeContext);
}


export default ThemeProvider


