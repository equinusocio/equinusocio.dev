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
import { useInViewRef } from 'rooks';
import { TextReveal } from '@/components/TextReveal';
import { GradientCard } from '@/components/GradientCard';
import { getProjects } from '@/core/api/selectors';
import { ProjectType } from '@/core/api/selectors/getProjects';

const Home = ({ projects }: Record<string, ProjectType[]>) => {
  const [skillsRef, skillsRefInView] = useInViewRef();

  return (
    <PageLayout showHeader={false}>

      <Section bg="bg-1.svg" accent isFirst>
        <div>
          <Header />
          <Hero />
        </div>
      </Section>

      <Section bg="bg-2.svg" verticalAlign="center">
        <Container>
          <div ref={skillsRef}>
            <Stack verticalAlign="start" columns={2} columnGap="min(10vw, 10.90rem)">
              <Stack verticalAlign="center" rowGap="1.81rem">
                <Heading as="h2">
                  <TextReveal isRunning={skillsRefInView}>What I do</TextReveal>
                </Heading>
                <Text>
                  There is a gap between designers and front-end developers, where we find design scalability,
                  accessibility, semantic HTML, UI development, interactions and animations.
                  Where UX engineering happens.
                </Text>

                <Text>
                  <strong>This is the front of the front-end.</strong>
                </Text>
              </Stack>
              <PillsCloud />
            </Stack>
          </div>
        </Container>
      </Section>

      <Section bg="bg-3.svg" verticalAlign="start" columns={1}>
        <Stack rowGap="3rem">
          <Container>
            <Stack>
              <Heading as="h2">Public Artifacts</Heading>
              <Stack inline>
                <Text>My latest public projects from employers and open-source</Text>
              </Stack>
            </Stack>
          </Container>

          <Slider>
            {projects.map(item => (
              <GradientCard
                url={item.url}
                key={item.id}
                color1={item.background[0]}
                color2={item.background[1]}
                label={item.label}
                title={item.title}
                text={item.body}
              />
            ))}
          </Slider>
        </Stack>
      </Section>
    </PageLayout>
  );
};

export const getStaticProps = async () => {
  const projects = await getProjects();

  return {
    props: { projects },
    revalidate: 120,
  };
};

export default Home;
