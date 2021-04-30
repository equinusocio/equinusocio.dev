/* eslint-disable jsx-a11y/anchor-is-valid */

import { Hero } from '@/components/Hero';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { Section } from '@/components/Section';
import React from 'react';

const Home = () => (
  <PageLayout>
    <Section bg="bg-1.svg">
      <Hero />
    </Section>
    <Section color="dark" bg="bg-2.svg">
      B
    </Section>
    <Section color="bright">
      C
    </Section>
  </PageLayout>
);

export default Home;

