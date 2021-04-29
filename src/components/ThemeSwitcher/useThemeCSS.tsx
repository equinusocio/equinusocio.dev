import { useEffect } from 'react';
import { useThemeContext } from './useThemeContext';

export const useThemeCSS = (
  lightCSS: string,
  darkCSS: string,
  parentNode?: any,
) => {
  const { theme } = useThemeContext();

  useEffect(() => {
    const style = document.createElement('style');

    if (theme === 'light') {
      style.textContent = lightCSS;
    } else if (theme === 'dark') {
      style.textContent = darkCSS;
    }

    if (style.textContent) {
      const target = parentNode || document.body;
      target.append(style);
    }

    return () => {
      if (style) {
        style.remove();
      }
    };
  }, [theme, lightCSS, darkCSS, parentNode]);
};
