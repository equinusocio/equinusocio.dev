import React from 'react';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Stack } from '@/components/Stack';
import { Text } from '@/components/Text';
import { Socials } from '@/components/Socials';
import { TextReveal } from '@/components/TextReveal';
import { FadeIn } from '@/components/FadeIn';
import style from './hero.module.css';

export const Hero = () => (
  <Container className={style.Hero}>
    <Text size="small" className={style.SideText}>
      <TextReveal>
        <Text as="span" color="hsl(var(--accent-color-alt))">EQUINUSOCIO</Text>
        <span aria-hidden="true"> — </span>
        FOR
        <span aria-hidden="true"> — </span>
        FRIENDS
      </TextReveal>
    </Text>

    <picture
      className={style.Photo}
    >
      <source
        srcSet="https://images.ctfassets.net/gz0sygvqczyz/13KLuNzRcXJPhoCUjVxG7o/970b9a154356879e19bf46d1753aef12/mattia_astorino.webp?w=1058&h=1392 2x"
        type="image/webp"
      />
      <source
        srcSet="https://images.ctfassets.net/gz0sygvqczyz/13KLuNzRcXJPhoCUjVxG7o/970b9a154356879e19bf46d1753aef12/mattia_astorino.webp?w=1058&h=1392&fm=jpg 2x"
        type="image/jpg"
      />
      <img
        className={style.Image}
        src="https://images.ctfassets.net/gz0sygvqczyz/13KLuNzRcXJPhoCUjVxG7o/970b9a154356879e19bf46d1753aef12/mattia_astorino.webp?w=529&h=696&fm=jpg"
        alt="Mattia Astorino close-up portrait"
        width="529"
        height="696"
        decoding="async"
      />
    </picture>

    <Stack>
      <Heading as="h1" className={style.Title}>
        <TextReveal>
          Hi, my name is
          <br aria-hidden="true" />
          {' '}
          <img decoding="async" className={style.Name} width="490" height="130" src="/mattia.svg" aria-label="Mattia" alt="Mattia" />
        </TextReveal>
      </Heading>

      <FadeIn>
        <Text>
          As
          <strong> UX engineer </strong>
          I build web interfaces, components library and design systems with a special love to CSS.
          I don’t work with CSS frameworks, I build them.
        </Text>
      </FadeIn>

      <FadeIn delay="0.2s">
        <Text>
          I’m also an
          {' '}
          <strong>open-source developer</strong>
          , and in my spare time I do photography and digital art.
        </Text>
      </FadeIn>

      <FadeIn delay="0.4s">
        <Socials />
      </FadeIn>
    </Stack>
  </Container>
);
