"use client";

import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { GlobalStyle } from "../../../GlobalStyle";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <GlobalStyle />
            <div>
                <h1>Theme Switcher</h1>
                {["dark", "cyberpunk", "minimalist", "light", "sunset"].map((themeKey) => (
                    <button key={themeKey} onClick={() => toggleTheme(themeKey)}>
                        {themeKey.charAt(0).toUpperCase() + themeKey.slice(1)}
                    </button>
                ))}
            </div>
        </>
    );
};

export default ThemeSwitcher;
