import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme) // В качестве значения типа используется Theme

    // Не возвращать новый а оставлять если из массива зависимостей ничего не изменилось
    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme]) // theme-это и есть массив зависимостей

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;