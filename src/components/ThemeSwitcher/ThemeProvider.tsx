import React, {
  FC, createContext, useState, useEffect, ReactNode,
} from 'react';

export type ThemeType = 'light' | 'dark' | 'auto' | undefined;

export type ThemeContextType = {
  theme: ThemeType;
  setTheme?: (value: ThemeType) => void;
}

type ThemeProviderProps = {
  children: ReactNode;
  theme?: ThemeType;
  persistState?: boolean;
}

export const ThemeContext = createContext<ThemeContextType>({ theme: 'auto' });

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme: initialTheme = 'auto',
  persistState = false,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(initialTheme);

  const value: ThemeContextType = { theme, setTheme };

  useEffect(() => {
    if (persistState) {
      const persistedTheme = localStorage.getItem('theme') as ThemeType;
      if (persistedTheme) {
        setTheme(persistedTheme);
      }
    }
  }, [persistState]);

  useEffect(() => {
    if (theme) {
      document.documentElement.dataset.theme = theme;
      if (persistState) {
        localStorage.setItem('theme', theme);
      }
    }

    return () => {
      document.documentElement.removeAttribute('data-theme');
      if (!persistState) {
        localStorage.removeItem('theme');
      }
    };
  }, [persistState, theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
