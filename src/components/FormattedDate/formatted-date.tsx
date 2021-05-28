import React, { HTMLAttributes } from 'react';

export interface IDateProps extends HTMLAttributes<HTMLTimeElement> {
  date: string;
}

export const FormattedDate = ({ date }: IDateProps) => {
  const timeDate: Date = new Date(date);
  const humanDate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(timeDate);

  return (
    <time
      aria-label={`Published on ${humanDate}.`}
      dateTime={date}
    >
      {humanDate}
    </time>
  );
};
