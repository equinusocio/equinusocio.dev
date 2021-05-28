import { PrismTheme } from 'prism-react-renderer';

const theme: PrismTheme = {
  plain: {
    color: 'hsl(var(--color-50))',
    backgroundColor: 'hsl(var(--color-100))',
  },
  styles: [{
    types: ['changed'],
    style: {
      color: 'rgb(162, 191, 252)',
      fontStyle: 'italic',
    },
  }, {
    types: ['deleted'],
    style: {
      color: 'red',
      fontStyle: 'italic',
    },
  }, {
    types: ['inserted', 'attr-name'],
    style: {
      color: 'hsl(var(--color-80))',
      fontStyle: 'italic',
    },
  }, {
    types: ['comment'],
    style: {
      color: 'var(--color-70)',
      fontStyle: 'italic',
    },
  }, {
    types: ['string', 'url'],
    style: {
      color: 'hsl(var(--color-90))',
    },
  }, {
    types: ['variable'],
    style: {
      color: 'hsl(var(--color-40))',
    },
  }, {
    types: ['number'],
    style: {
      color: 'orange',
    },
  }, {
    types: ['builtin', 'char', 'constant', 'function'],
    style: {
      color: 'cyan',
    },
  }, {
    types: ['constant'],
    style: {
      color: 'hsl(var(--color-50))',
    },
  }, {
    // This was manually added after the auto-generation
    // so that punctuations are not italicised
    types: ['punctuation'],
    style: {
      color: 'hotpink',
    },
  }, {
    types: ['selector', 'doctype'],
    style: {
      color: 'hsl(var(--color-100))',
      fontStyle: 'italic',
    },
  }, {
    types: ['class-name'],
    style: {
      color: 'hsl(var(--color-90))',
    },
  }, {
    types: ['tag', 'operator', 'keyword'],
    style: {
      color: 'hsl(var(--color-100))',
    },
  }, {
    types: ['boolean'],
    style: {
      color: 'red',
    },
  }, {
    types: ['property'],
    style: {
      color: 'blue',
    },
  }, {
    types: ['namespace'],
    style: {
      color: 'hsl(var(--color-60))',
    },
  }],
};

export default theme;
