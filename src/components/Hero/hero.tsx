import React from 'react';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Stack } from '@/components/Stack';
import { Text } from '@/components/Text';
import { Socials } from '@/components/Socials';
import { TextReveal } from '@/components/TextReveal';
import {
  motion, LazyMotion, domAnimation, m, useReducedMotion,
} from 'framer-motion';
import style from './hero.module.css';

const fadeIn = {
  visible: (custom: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.2,
    },
  }),
  hidden: {
    opacity: 0,
    y: '20%',
    transition: { duration: 0.8 },
  },
};

export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Container className={style.Hero}>
      <Text size="small" className={style.SideText}>
        <TextReveal>
          <Text as="span" color="hsl(var(--accent-color-alt))">EQUINUSOCIO</Text>
          {' '}
          — FOR — FRIENDS
        </TextReveal>
      </Text>

      <picture
        className={style.Photo}
      >
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

      <Stack>
        <Heading as="h1" className={style.Title} arial-label="Hi, my name is Mattia">
          <TextReveal>
            Hi, my name is
            <br aria-hidden="true" />
            {' '}
            <img className={style.Name} width="490" height="130" src="/mattia.svg" alt="Mattia" />
          </TextReveal>
        </Heading>
        <LazyMotion features={domAnimation}>
          <m.div variants={fadeIn} initial={shouldReduceMotion ? 'visible' : 'hidden'} animate="visible">
            <Text>
              As
              <strong> UX engineer </strong>
              I build web interfaces, components library and design systems with a special love to CSS.
              I don’t work with CSS frameworks, I build them.
            </Text>
          </m.div>
          <m.div custom={2} variants={fadeIn} initial={shouldReduceMotion ? 'visible' : 'hidden'} animate="visible">
            <Text>
              I’m also an
              {' '}
              <strong>open-source developer</strong>
              , and in my spare time I do photography and digital art.
            </Text>
          </m.div>
          <m.div custom={3} variants={fadeIn} initial={shouldReduceMotion ? 'visible' : 'hidden'} animate="visible">
            <Socials />
          </m.div>
        </LazyMotion>
      </Stack>
    </Container>
  );
};
