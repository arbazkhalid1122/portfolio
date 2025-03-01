"use client";

import { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";



export const themes: Record<
    string,
    { background: string; cardBackground: string; primary: string; secondary: string; text: string; heading: string; navActive: string }
> = {
    dark: {
        background: "#121212",
        cardBackground: "#1E1E1E",
        primary: "#FFD700",
        secondary: "#FF6347",
        text: "#FFFFFF",
        heading: "#FFD700",
        navActive: "#FFD700",
    },
    cyberpunk: {
        background: "#0D0D0D",
        cardBackground: "#1A1A2E",
        primary: "#FF00FF",
        secondary: "#00FFFF",
        text: "#EAEAEA",
        heading: "#FF00FF",
        navActive: "#FF00FF",
    },
    minimalist: {
        background: "#181818",
        cardBackground: "#222831",
        primary: "#76ABAE",
        secondary: "#EEEEEE",
        text: "#F1F1F1",
        heading: "#76ABAE",
        navActive: "#76ABAE",
    },
    light: {
        background: "#F5F5F5",
        cardBackground: "#FFFFFF",
        primary: "#3498db",
        secondary: "#2ecc71",
        text: "#333333",
        heading: "#2C3E50",
        navActive: "#3498db",
    },
    sunset: {
        background: "#2E1A47",
        cardBackground: "#5B2C6F",
        primary: "#E74C3C",
        secondary: "#F39C12",
        text: "#FFFFFF",
        heading: "#E74C3C",
        navActive: "#E74C3C",
    },
};


export const ThemeContext = createContext({
    theme: "dark",
    toggleTheme: (theme: string) => { },
});
export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "dark";
        setTheme(storedTheme);
    }, []);

    const toggleTheme = (selectedTheme: string) => {
        setTheme(selectedTheme);
        localStorage.setItem("theme", selectedTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};
