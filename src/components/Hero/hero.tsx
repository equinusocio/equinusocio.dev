import React from 'react';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Stack } from '@/components/Stack';
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
      />
    </picture>

    <Stack column>
      <Heading as="h1" lineHeignt="small" className={style.Title}>
        Hi, my name is
        <Heading display semantic={false}>Mattia</Heading>
      </Heading>
      <p>ciao</p>
    </Stack>
  </Container>
);
