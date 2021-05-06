import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { Pill } from '@/components/Pill';
import {
  Accessibility, Design, Figma, Geometry, Javascript, Nextjs, PenTool, WindowDev, ReactIcon, Css, Magic,
} from '@/components/Icons';
import { Stack } from '@/components/Stack';
import style from './pills-cloud.module.css';

export const PillsCloud = ({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => (
  <Stack as="ul" className={clsx(style.PillsCloud, className)} {...props}>
    <li className={style.Item} style={{ '--top': '140px', '--left': '10%' }}>
      <Pill color="lime" icon={<PenTool aria-hidden="true" role="presentation" />}>Design Systems</Pill>
    </li>
    <li className={style.Item} style={{ '--top': '170px', '--left': '60%' }}>
      <Pill color="green" icon={<WindowDev aria-hidden="true" role="presentation" />}>HTML</Pill>
    </li>
    <li className={style.Item} style={{ '--top': '235px', '--left': '30%' }}>
      <Pill color="yellow" icon={<Javascript aria-hidden="true" role="presentation" />}>JS</Pill>
    </li>
    <li className={style.Item} style={{ '--top': '300px', '--left': '80%' }}>
      <Pill color="black" icon={<Nextjs aria-hidden="true" role="presentation" />}>Next.js</Pill>
    </li>
    <li className={style.Item} style={{ '--top': '320px', '--left': '5%' }}>
      <Pill color="pink" icon={<Figma aria-hidden="true" role="presentation" />}>Figma</Pill>
    </li>
    <li className={style.Item} style={{ '--top': '390px', '--left': '40%' }}>
      <Pill color="orange" icon={<Geometry aria-hidden="true" role="presentation" />}>Components libraries</Pill>
    </li>
    <li className={style.Item} style={{ '--top': '290px', '--left': '53%' }}>
      <Pill color="grey" icon={<Accessibility aria-hidden="true" role="presentation" />}>A11y</Pill>
    </li>
    <li className={style.Item} style={{ '--top': '80px', '--left': '75%' }}>
      <Pill color="violet" icon={<Design aria-hidden="true" role="presentation" />}>Design</Pill>
    </li>
    <li className={style.Item} style={{ '--top': '-20px', '--left': '60%' }}>
      <Pill color="blue" icon={<ReactIcon aria-hidden="true" role="presentation" />}>React</Pill>
    </li>
    <li className={style.Item} style={{ '--top': '30px', '--left': '30%' }}>
      <Pill color="cyan" icon={<Css aria-hidden="true" role="presentation" />}>CSS</Pill>
    </li>
    <li className={style.Item} style={{ '--top': '-60px', '--left': '10%' }}>
      <Pill color="purple" icon={<Magic aria-hidden="true" role="presentation" />}>Interactions</Pill>
    </li>
  </Stack>
);
