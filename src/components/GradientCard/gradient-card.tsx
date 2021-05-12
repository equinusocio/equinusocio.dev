import Link from 'next/link';
import React, { CSSProperties, HTMLAttributes } from 'react';
import { Stack } from '@/components/Stack';
import { Text } from '@/components/Text';
import { Heading } from '@/components/Heading';
import style from './gradient-card.module.css';

interface IGradientCardProps extends HTMLAttributes<HTMLElement> {
  url: string;
  label: string;
  title: string;
  text: string;
  color1: string;
  color2: string;
}

export const GradientCard = ({
  className,
  url,
  label,
  title,
  text,
  color1 = 'hsl(var(--color-90))',
  color2 = 'hsl(var(--color-80))',
  ...props
}: IGradientCardProps) => {
  const dynamicStyle: CSSProperties = {
    '--c1': color1,
    '--c2': color2,
  };

  return (
    <Link href={url}>
      <a
        className={style.GradientCard}
        style={dynamicStyle}
        rel="noopener noreferrer"
        target="_blank"
        {...props}
      >
        <Stack className={style.Content} rowGap="0.72rem">
          <div className={style.Title}>
            <Text size="small" className={style.Label} weight="bold">{label}</Text>
            <Heading as="h4" semantic={false}>{title}</Heading>
          </div>
          <Text size="small">{text}</Text>
        </Stack>
      </a>
    </Link>
  );
};

// {% from "label.njk" import Label %}
// {% from "stack.njk" import Stack %}

// {% macro PortfolioCard(
//   label="",
//   title="",
//   text="",
//   url="#",
//   color1 = "var(--color-90)",
//   color2 = "var(--color-80)"
// ) %}
//   <a data-button-target="button" class="PortfolioCard" href="{{ url }}" target="_blank" rel="noopener noreferrer" style="--c1: {{ color1 }}; --c2: {{ color2 }}">
//     {% call Stack(
//       columns=1,
//       rowGap="0.72rem",
//       class="PortfolioCard__Content",
//       verticalAlign="start"
//     ) -%}
//       <div>
//         {% call Label(uppercase=true, class="PortfolioCard__Label") -%}
//           {{ label }}
//         {% endcall %}

//         <h3 class="PortfolioCard__Title">{{ title }}</h3>
//       </div>
//       <p class="PortfolioCard__Text"><small>{{ text }}</small></p>
//     {% endcall %}
//   </a>
// {% endmacro %}
