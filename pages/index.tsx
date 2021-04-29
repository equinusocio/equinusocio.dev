/* eslint-disable jsx-a11y/anchor-is-valid */

import { Hero } from '@/components/Hero';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { Section } from '@/components/Section';
import React from 'react';

const Home = () => (
  <PageLayout>
    <Section>
      <Hero />
    </Section>
    <Section color="accent">
      B
    </Section>
    <Section color="bright">
      C
    </Section>
  </PageLayout>
);

export default Home;

