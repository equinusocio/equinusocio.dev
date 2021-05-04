/* eslint-disable jsx-a11y/anchor-is-valid */

import { Hero } from '@/components/Hero';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { Section } from '@/components/Section';
import { Header } from '@/components/Header';
import React from 'react';
import { Stack } from '@/components/Stack';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Text } from '@/components/Text';

const Home = () => (
  <PageLayout showHeader={false}>
    <Section bg="bg-1.svg" isFirst>
      <div>
        <Header />
        <Hero />
      </div>
    </Section>
    <Section color="dark" bg="bg-2.svg">
      <Container>
        <Stack>
          <Stack column verticalAlign="center" rowGap="1.81rem">
            <Heading as="h2">What I do</Heading>
            <Text>
              There is a gap between designers and front-end developers.
              There is where we find design scalability, accessibility,
              semantic HTML, UI development, interactions and animations. Where UX Enginnering happens.
            </Text>

            <Text>
              <strong>This is the front of the front-end.</strong>
            </Text>
          </Stack>
          <div>B</div>
        </Stack>
      </Container>
    </Section>
    <Section color="bright" bg="bg-3.svg">
      <Container>
        <Stack>
          <Stack column verticalAlign="center" rowGap="1.81rem">
            <Heading as="h2">What I do</Heading>
            <Text>
              There is a gap between designers and front-end developers.
              There is where we find design scalability, accessibility,
              semantic HTML, UI development, interactions and animations. Where UX Enginnering happens.
            </Text>

            <Text>
              <strong>This is the front of the front-end.</strong>
            </Text>
          </Stack>
          <div>B</div>
        </Stack>
      </Container>
    </Section>
  </PageLayout>
);

export default Home;

