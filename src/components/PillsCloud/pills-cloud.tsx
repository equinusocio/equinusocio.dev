import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { Pill } from '@/components/Pill';
import {
  Accessibility, Design, Figma, Geometry, Javascript, Nextjs, PenTool, WindowDev, ReactIcon, Css,
} from '@/components/Icons';
import { Stack } from '@/components/Stack';
import style from './pills-cloud.module.css';

export const PillsCloud = ({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => (
  <Stack as="ul" className={clsx(style.PillsCloud, className)} {...props}>
    <li className={style.Item} style={{ '--top': '140px', '--left': '10%' }}><Pill icon={<PenTool />}>Design Systems</Pill></li>
    <li className={style.Item} style={{ '--top': '170px', '--left': '60%' }}><Pill icon={<WindowDev />}>HTML</Pill></li>
    <li className={style.Item} style={{ '--top': '235px', '--left': '30%' }}><Pill icon={<Javascript />}>JS</Pill></li>
    <li className={style.Item} style={{ '--top': '300px', '--left': '80%' }}><Pill icon={<Nextjs />}>Next.js</Pill></li>
    <li className={style.Item} style={{ '--top': '320px', '--left': '5%' }}><Pill icon={<Figma />}>Figma</Pill></li>
    <li className={style.Item} style={{ '--top': '290px', '--left': '53%' }}><Pill icon={<Accessibility />}>A11y</Pill></li>
    <li className={style.Item} style={{ '--top': '390px', '--left': '40%' }}><Pill icon={<Geometry />}>Components libraries</Pill></li>
    <li className={style.Item} style={{ '--top': '80px', '--left': '75%' }}><Pill icon={<Design />}>Design</Pill></li>
    <li className={style.Item} style={{ '--top': '-20px', '--left': '60%' }}><Pill icon={<ReactIcon />}>React</Pill></li>
    <li className={style.Item} style={{ '--top': '30px', '--left': '30%' }}><Pill icon={<Css />}>CSS</Pill></li>
  </Stack>
);
