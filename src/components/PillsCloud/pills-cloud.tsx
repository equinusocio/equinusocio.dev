import clsx from 'clsx';
import React, { CSSProperties, HTMLAttributes, useEffect } from 'react';
import { Pill } from '@/components/Pill';
import {
  Accessibility, Design, Figma, Geometry, Javascript, Nextjs, PenTool, WindowDev, ReactIcon, Css, Magic,
} from '@/components/Icons';
import { useInViewRef } from 'rooks';
import { motion, useAnimation } from 'framer-motion';
import style from './pills-cloud.module.css';

export const PillsCloud = ({
  className,
}: HTMLAttributes<HTMLUListElement>) => {
  const [myRef, inView] = useInViewRef();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      void controls.start('visible');
    }
  }, [controls, inView]);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const item = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <motion.ul
      initial="hidden"
      animate={controls}
      variants={list}
      ref={myRef}
      className={clsx(style.PillsCloud, className)}
    >
      <motion.li
        className={style.Item}
        style={{ '--top': '140px', '--left': '10%' } as CSSProperties}
        variants={item}
      >
        <Pill
          color="lime"
          icon={<PenTool aria-hidden="true" role="presentation" />}
        >
          Design Systems
        </Pill>
      </motion.li>
      <motion.li
        className={style.Item}
        style={{ '--top': '170px', '--left': '60%' } as CSSProperties}
        variants={item}
      >
        <Pill
          color="green"
          icon={<WindowDev aria-hidden="true" role="presentation" />}
        >
          HTML
        </Pill>
      </motion.li>
      <motion.li
        className={style.Item}
        style={{ '--top': '235px', '--left': '30%' } as CSSProperties}
        variants={item}
      >
        <Pill
          color="yellow"
          icon={<Javascript aria-hidden="true" role="presentation" />}
        >
          JS
        </Pill>
      </motion.li>
      <motion.li
        className={style.Item}
        style={{ '--top': '300px', '--left': '80%' } as CSSProperties}
        variants={item}
      >
        <Pill
          color="black"
          icon={<Nextjs aria-hidden="true" role="presentation" />}
        >
          Next.js
        </Pill>
      </motion.li>
      <motion.li
        className={style.Item}
        style={{ '--top': '320px', '--left': '5%' } as CSSProperties}
        variants={item}
      >
        <Pill
          color="pink"
          icon={<Figma aria-hidden="true" role="presentation" />}
        >
          Figma
        </Pill>
      </motion.li>
      <motion.li
        className={style.Item}
        style={{ '--top': '390px', '--left': '40%' } as CSSProperties}
        variants={item}
      >
        <Pill
          color="orange"
          icon={<Geometry aria-hidden="true" role="presentation" />}
        >
          Components libraries
        </Pill>
      </motion.li>
      <motion.li
        className={style.Item}
        style={{ '--top': '290px', '--left': '53%' } as CSSProperties}
        variants={item}
      >
        <Pill
          color="grey"
          icon={<Accessibility aria-hidden="true" role="presentation" />}
        >
          A11y
        </Pill>
      </motion.li>
      <motion.li
        className={style.Item}
        style={{ '--top': '80px', '--left': '75%' } as CSSProperties}
        variants={item}
      >
        <Pill
          color="violet"
          icon={<Design aria-hidden="true" role="presentation" />}
        >
          Design
        </Pill>
      </motion.li>
      <motion.li
        className={style.Item}
        style={{ '--top': '-20px', '--left': '60%' } as CSSProperties}
        variants={item}
      >
        <Pill
          color="blue"
          icon={<ReactIcon aria-hidden="true" role="presentation" />}
        >
          React
        </Pill>
      </motion.li>
      <motion.li
        className={style.Item}
        style={{ '--top': '30px', '--left': '30%' } as CSSProperties}
        variants={item}
      >
        <Pill
          color="cyan"
          icon={<Css aria-hidden="true" role="presentation" />}
        >
          CSS
        </Pill>
      </motion.li>
      <motion.li
        className={style.Item}
        style={{ '--top': '-60px', '--left': '10%' } as CSSProperties}
        variants={item}
      >
        <Pill
          color="purple"
          icon={<Magic aria-hidden="true" role="presentation" />}
        >
          Interactions
        </Pill>
      </motion.li>
    </motion.ul>
  );
};
