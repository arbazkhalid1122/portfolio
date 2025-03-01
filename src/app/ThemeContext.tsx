"use client";

import { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

export const themes: Record<
    string,
    { background: string; cardBackground: string; text: string; heading: string; navActive: string }
> = {
    dark: {
        background: "#121212",
        cardBackground: "#1E1E1E",
        text: "#A3BE8C",
        heading: "#A3BE8C",
        navActive: "#A3BE8C",
    },
    minimalist: {
        background: "#181818",
        cardBackground: "#222831",
        text: "#76ABAE",
        heading: "#76ABAE",
        navActive: "#76ABAE",
    },
    light: {
        background: "#F5F5F5",
        cardBackground: "#FFFFFF",
        text: "#1D3557",
        heading: "#1D3557",
        navActive: "#457B9D",
    },
    sunset: {
        background: "#1B3B5F",
        cardBackground: "#1F4E78",
        text: "#A8DADC",
        heading: "#A8DADC",
        navActive: "#A8DADC",
    },
    pastel: {
        background: "#FFFAF3",
        cardBackground: "#FFF5E1",
        text: "#A67DB8",
        heading: "#8A4F7D",
        navActive: "#E9A8A8",
    },
    classic: {
        background: "#EAEAEA",
        cardBackground: "#FFFFFF",
        text: "#333333",
        heading: "#222222",
        navActive: "#555555",
    },
    sky: {
        background: "#E3F2FD",
        cardBackground: "#BBDEFB",
        text: "#1565C0",
        heading: "#0D47A1",
        navActive: "#1976D2",
    },
    warmGlow: {
        background: "#FFF3E0",
        cardBackground: "#FFCCBC",
        text: "#BF360C",
        heading: "#D84315",
        navActive: "#FF7043",
    },
};


export const ThemeContext = createContext({
    theme: "dark",
    toggleTheme: (theme: string) => { },
});
export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const themeKeys = Object.keys(themes);
        const randomTheme = themeKeys[Math.floor(Math.random() * themeKeys.length)];
        setTheme(randomTheme);
    }, []);

    const toggleTheme = (selectedTheme: string) => {
        setTheme(selectedTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};


