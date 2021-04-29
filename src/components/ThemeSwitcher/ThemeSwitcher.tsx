import React, { HTMLAttributes, useCallback } from 'react';
import { Sun, Moon, Automatic } from '@components/Icons';
import style from './theme-switcher.module.css';
import { ThemeType } from './ThemeProvider';
import { useThemeContext } from './useThemeContext';

export interface IThemeSwitcherProps extends HTMLAttributes<HTMLElement> {}

export const ThemeSwitcher = ({
  className,
  ...attributes
}: IThemeSwitcherProps) => {
  const idLight = 'theme-light';
  const idAuto = 'theme-auto';
  const idDark = 'theme-dark';
  const { theme, setTheme } = useThemeContext();

  const selectTheme = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof setTheme === 'function') {
        setTheme(event.target.value as ThemeType);
      }
    },
    [setTheme],
  );

  return (
    <fieldset
      data-theme={theme}
      className={`${style.ThemeSwitcher} ${className ?? ''}`}
      {...attributes}
    >
      {/* Sliding thumb */}
      <span className={style.Thumb} />

      {/* Light trigger */}
      <label htmlFor={idLight} aria-label="Set the light theme" data-theme-switcher-light className={style.Button}>
        <input id={idLight} type="radio" onChange={selectTheme} value="light" name="theme" checked={theme === 'light'} />
        <Sun size={16} />
      </label>

      {/* Auto trigger */}
      <label htmlFor={idAuto} aria-label="Set automatic theme based on system preferences" data-theme-switcher-auto className={style.Button}>
        <input id={idAuto} type="radio" onChange={selectTheme} value="auto" name="theme" checked={theme === 'auto'} />
        <Automatic size={16} />
      </label>

      {/* Dark trigger */}
      <label htmlFor={idDark} aria-label="Set the dark theme" data-theme-switcher-dark className={style.Button}>
        <input id={idDark} type="radio" onChange={selectTheme} value="dark" name="theme" checked={theme === 'dark'} />
        <Moon size={16} />
      </label>

    </fieldset>
  );
};
