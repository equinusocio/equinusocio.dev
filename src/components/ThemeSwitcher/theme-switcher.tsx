import React, {
  HTMLAttributes, MouseEvent, useCallback, useEffect, useState,
} from 'react';
import { BlankButton } from '@/components/BlankButton';
import { Stack } from '@/components/Stack';
import clsx from 'clsx';
import { Sun, MoonStars, Automatic } from '@/components/Icons';
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
    html.dataset.theme = localStorage.getItem('theme') ?? theme;
  }, [theme]);

  return (
    <Stack
      inline
      columnGap="0.36rem"
      className={clsx(style.ThemeSwitcher, className)}
      {...props}
    >
      <BlankButton
        className={style.Action}
        aria-label="Set light theme"
        data-theme-name="light"
        onClick={handleClick()}
      >
        <Sun aria-hidden="true" role="presentation" />
      </BlankButton>

      <BlankButton
        className={style.Action}
        aria-label="Set automatic theme"
        data-theme-name="auto"
        onClick={handleClick()}
      >
        <Automatic aria-hidden="true" role="presentation" />
      </BlankButton>

      <BlankButton
        className={style.Action}
        aria-label="Set dark theme"
        data-theme-name="dark"
        onClick={handleClick()}
      >
        <MoonStars aria-hidden="true" role="presentation" />
      </BlankButton>
    </Stack>
  );
};
