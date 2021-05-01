/* eslint-disable jsx-a11y/anchor-is-valid */

import { Hero } from '@/components/Hero';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { Section } from '@/components/Section';
import { Header } from '@/components/Header';
import React from 'react';

const Home = () => (
  <PageLayout showHeader={false}>
    <Section bg="bg-1.svg" isFirst>
      <div>
        <Header />
        <Hero />
      </div>
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

