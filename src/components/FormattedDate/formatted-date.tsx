import React, { HTMLAttributes } from 'react';

export interface IDateProps extends HTMLAttributes<HTMLTimeElement> {
  date?: Date | string;
}

export const FormattedDate = ({ date = '' }: IDateProps) => {
  const timeDate: Date = new Date(date);

  return (
    <time
      aria-label={`Published on ${new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(timeDate)}.`}
      dateTime={timeDate.toISOString()}
    >
      {new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(timeDate)}
    </time>
  );
};
