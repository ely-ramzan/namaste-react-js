import React from 'react'

export const ThemeContext = React.createContext(
    {
        theme: "light",
        darkTheme: () => {},
        lightTheme: () => {}
    }
);


export const ThemeProvider = ThemeContext.Provider;

const useTheme = () => {
    return React.useContext(ThemeContext);
} 


export default useTheme
