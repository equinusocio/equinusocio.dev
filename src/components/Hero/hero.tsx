import React from 'react';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Stack } from '@/components/Stack';
import { Socials } from '@/components/Socials';
import style from './hero.module.css';

export const Hero = () => (
  <Container className={style.Hero}>
    <picture className={style.Photo}>
      <source srcSet="/mattia_astorino.webp" type="image/webp" />
      <img
        className={style.Image}
        src="/mattia_astorino.jpg"
        alt="Mattia Astorino"
        width="529"
        height="696"
        decoding="async"
      />
    </picture>

    <Stack column>
      <Heading as="h1" className={style.Title}>
        Hi, my name is
        {' '}
        {' '}
        <br aria-hidden="true" />
        <img className={style.Name} draggable="false" src="/mattia.svg" alt="Mattia" />
      </Heading>
      <p>
        As
        {' '}
        <strong>UX Engineer</strong>
        {' '}
        I build web interfaces, components library and design systems with a special love to CSS.
        I don’t work with CSS frameworks, I build them.
      </p>
      <p>
        I’m also an
        {' '}
        <strong>open-source developer</strong>
        , and in my spare time I do photography and digital art.
      </p>
      <Socials />
    </Stack>
  </Container>
);
