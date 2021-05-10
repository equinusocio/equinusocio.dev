import React, {
  HTMLAttributes, MouseEvent, useCallback, useEffect, useState,
} from 'react';
import { BlankButton } from '@/components/BlankButton';
import { Sun, MoonStars, Automatic } from '@/components/Icons';
import { Stack } from '@/components/Stack';
import style from './theme-switcher.module.css';

interface IThemeSwitcherProps extends HTMLAttributes<HTMLElement> {
  defaultTheme?: 'dark' | 'auto' | 'light';
}

export const ThemeSwitcher = ({ defaultTheme = 'auto', className, ...props }: IThemeSwitcherProps) => {
  const [theme, setTheme] = useState<string>(defaultTheme);

  const handleClick = useCallback(
    () => (event: MouseEvent<HTMLOrSVGElement>) => {
      const { themeName } = event.currentTarget.dataset;
      const html = document.documentElement;

      if (themeName) {
        html.dataset.theme = themeName;
        localStorage.setItem('theme', themeName);
        setTheme(themeName);
      }
    },
    [],
  );

  useEffect(() => {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme');

    setTheme(savedTheme ?? 'auto');
    html.dataset.theme = savedTheme ?? theme;
  }, [theme]);

  return (
    <Stack
      columnGap="min(0.72rem, 10vw)"
      role="radiogroup"
      inline
      verticalAlign="center"
      {...props}
    >
      <BlankButton
        className={style.Action}
        aria-label="Set light theme"
        data-theme-name="light"
        role="radio"
        aria-checked={theme === 'light'}
        onClick={handleClick()}
      >
        <Sun aria-hidden="true" role="presentation" />
      </BlankButton>

      <BlankButton
        className={style.Action}
        aria-label="Set automatic theme"
        data-theme-name="auto"
        role="radio"
        aria-checked={theme === 'auto'}
        onClick={handleClick()}
      >
        <Automatic aria-hidden="true" role="presentation" />
      </BlankButton>

      <BlankButton
        className={style.Action}
        aria-label="Set dark theme"
        data-theme-name="dark"
        role="radio"
        aria-checked={theme === 'dark'}
        onClick={handleClick()}
      >
        <MoonStars aria-hidden="true" role="presentation" />
      </BlankButton>
    </Stack>
  );
};
