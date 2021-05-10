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
import { motion } from 'framer-motion';
import { Slider } from '@/components/Slider';
import { useInViewRef } from 'rooks';

const fadeIn = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: '20%' },
};

const Home = () => {
  const [whatIDoRef, whatIDoRefVisible] = useInViewRef();

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
          <div ref={whatIDoRef}>
            <Stack verticalAlign="start" columnGap="min(10vw, 10.90rem)">
              <Stack column verticalAlign="center" rowGap="1.81rem">
                <motion.div variants={fadeIn} animate={whatIDoRefVisible && 'visible'} initial={false} transition={{ delay: 0.3 }}>
                  <Heading as="h2">What I do</Heading>
                </motion.div>
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

      <Section bg="bg-3.svg" verticalAlign="center">
        <Container>
          <Stack column>
            <Heading as="h2">Public Artifacts</Heading>
            <Stack horizontalAlign="center">
              <Text>My latest public projects from employers and open-source</Text>
            </Stack>
          </Stack>
          <Slider>
            <span>A</span>
            <span>B</span>
            <span>C</span>
            <span>D</span>
          </Slider>
        </Container>
      </Section>
    </PageLayout>
  );
};

export default Home;

