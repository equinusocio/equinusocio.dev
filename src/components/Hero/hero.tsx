import React from 'react';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Stack } from '@/components/Stack';
import { Text } from '@/components/Text';
import { Socials } from '@/components/Socials';
import style from './hero.module.css';

export const Hero = () => (
  <Container className={style.Hero}>
    <Text size="small" className={style.SideText}>
      <Text as="span" color="hsl(var(--accent-color-alt))">EQUINUSOCIO</Text>
      {' '}
      — FOR — FRIENDS
    </Text>
    <picture className={style.Photo}>
      <source srcSet="/mattia_astorino.webp" type="image/webp" />
      <img
        className={style.Image}
        src="/mattia_astorino.jpg"
        alt="Mattia Astorino close-up portrait"
        width="529"
        height="696"
        decoding="async"
      />
    </picture>

    <Stack column>
      <Heading as="h1" className={style.Title} arial-label="Hi, my name is Mattia">
        Hi, my name is
        <br aria-hidden="true" />
        {' '}
        <img className={style.Name} src="/mattia.svg" alt="Mattia" />
      </Heading>
      <Text>
        As
        <abbr title="User Experience"> UX </abbr>
        engineer I build web interfaces, components library and design systems with a special love to CSS.
        I don’t work with CSS frameworks, I build them.
      </Text>
      <Text>
        I’m also an
        {' '}
        <strong>open-source developer</strong>
        , and in my spare time I do photography and digital art.
      </Text>
      <Socials />
    </Stack>
  </Container>
);
