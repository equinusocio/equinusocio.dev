import React from 'react';
import { Container } from '@/components/Container';
import style from './hero.module.css';
import { Heading } from '../Heading';

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

    <div>
      <Heading as="h1" lineHeignt="none" className={style.Title}>
        Hi, my name is
        <br aria-hidden="true" />
        {' '}
        <Heading display semantic={false}>Mattia</Heading>
      </Heading>
      <p>ciao</p>
    </div>
  </Container>
);
