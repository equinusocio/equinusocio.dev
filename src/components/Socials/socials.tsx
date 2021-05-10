import React from 'react';
import { Stack } from '@/components/Stack';
import { Text } from '@/components/Text';
import {
  LogoTwitter, LogoGithub, LogoDribbble, LogoCodepen, LogoUnsplash,
} from '@/components/Icons';
import style from './socials.module.css';

export const Socials = () => (
  <Stack horizontalAlign="start" rowGap="0.36rem" as="address" className={style.Socials}>
    <Text size="small"><b>But there is more...</b></Text>
    <Stack as="ul" inline className={style.List} columnGap="1.09rem">
      <li>
        <a href="https://twitter.com/equinusocio" rel="noopener noreferrer" target="_blank" aria-label="Mattia Astorino on Twitter">
          <LogoTwitter aria-hidden="true" role="presentation" />
        </a>
      </li>
      <li>
        <a href="https://github.com/equinusocio" rel="noopener noreferrer" target="_blank" aria-label="Mattia Astorino on Github">
          <LogoGithub aria-hidden="true" role="presentation" />
        </a>
      </li>
      <li>
        <a href="https://dribbble.com/astorino_mattia" rel="noopener noreferrer" target="_blank" aria-label="Mattia Astorino on Dribbble">
          <LogoDribbble aria-hidden="true" role="presentation" />
        </a>
      </li>
      <li>
        <a href="https://unsplash.com/@equinusocio" rel="noopener noreferrer" target="_blank" aria-label="Mattia Astorino on Unsplash">
          <LogoUnsplash aria-hidden="true" role="presentation" />
        </a>
      </li>
      <li>
        <a href="https://codepen.io/equinusocio/" rel="noopener noreferrer" target="_blank" aria-label="Mattia Astorino on Codepen">
          <LogoCodepen aria-hidden="true" role="presentation" />
        </a>
      </li>
    </Stack>
  </Stack>
);
