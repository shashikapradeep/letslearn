// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
import light from './varients/light';
import dark from './varients/dark';
import { ThemeContextType } from '../types/theme';

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [isDark, setIsDark] = useState<boolean>(true);
    const theme = isDark ? dark : light;

    const toggleTheme = () => setIsDark(prev => !prev);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
