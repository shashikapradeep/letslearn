export interface Theme {
    background: string;
    text: string;
    colors: {
        primary: string;
        secondary: string;
    };
}

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}
