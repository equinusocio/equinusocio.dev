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
import { PillsCloud } from '@/components/PillsCloud';
import { Slider } from '@/components/Slider';
import { TextReveal } from '@/components/TextReveal';
import { GradientCard } from '@/components/GradientCard';
import { getProjects } from '@/core/api/selectors';
import { ProjectType } from '@/core/api/selectors/getProjects';
import { FadeIn } from '@/components/FadeIn';

const Home = ({ projects }: Record<string, ProjectType[]>) => (
  <PageLayout>

    <Section bg="bg-1.svg" accent isFirst>
      <Header />
      <Hero />
    </Section>

    <Section bg="bg-2.svg" verticalAlign="center">
      <Container>
        <Stack verticalAlign="start" columns={2} columnGap="min(10vw, 10.90rem)">
          <Stack verticalAlign="center" rowGap="1.81rem">
            <Heading as="h2">
              <TextReveal>What I do</TextReveal>
            </Heading>
            <FadeIn>
              <Text>
                There is a gap between designers and front-end developers, where we find design scalability,
                accessibility, semantic HTML, UI development, interactions and animations.
                Where UX engineering happens.
              </Text>
            </FadeIn>
            <FadeIn delay="0.2s">
              <Text>
                <strong>This is the front of the front-end.</strong>
              </Text>
            </FadeIn>

          </Stack>
          <PillsCloud />
        </Stack>
      </Container>
    </Section>

    <Section bg="bg-3.svg" verticalAlign="start" columns={1}>
      <Stack rowGap="3rem">
        <Container>
          <Stack>
            <Heading as="h2"><TextReveal>Public Artifacts</TextReveal></Heading>
            <Stack inline>
              <FadeIn>
                <Text>My latest public projects from employers and open-source</Text>
              </FadeIn>
            </Stack>
          </Stack>
        </Container>

        <Slider>
          {projects.map((item, i) => (
            <FadeIn key={item.id} onlyDesktop delay={`${i * 0.1}s`}>
              <GradientCard
                url={item.url}
                color1={item.background[0]}
                color2={item.background[1]}
                label={item.label}
                title={item.title}
                text={item.body}
              />
            </FadeIn>
          ))}
        </Slider>
      </Stack>
    </Section>
  </PageLayout>
);

export const getStaticProps = async () => {
  const projects = await getProjects();

  return {
    props: { projects },
    revalidate: 120,
  };
};

export default Home;
