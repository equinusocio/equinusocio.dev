import { PrismTheme } from 'prism-react-renderer';

const theme: PrismTheme = {
  plain: {
    color: 'hsl(var(--color-10))',
    backgroundColor: 'hsl(var(--color-90))',
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
      color: '#FF1A43',
      fontStyle: 'italic',
    },
  }, {
    types: ['inserted'],
    style: {
      color: 'hsl(var(--accent-color-alt))',
      fontStyle: 'italic',
    },
  }, {
    types: ['attr-name'],
    style: {
      color: '#A18EEF',
    },
  }, {
    types: ['attr-value'],
    style: {
      color: '#A9EFA3',
    },
  }, {
    types: ['comment'],
    style: {
      color: 'hsl(var(--color-60))',
      fontStyle: 'italic',
    },
  }, {
    types: ['string', 'url'],
    style: {
      color: '#A9EFA3',
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
      color: '#A18EEF',
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
      color: '#E382BC',
    },
  }, {
    types: ['selector', 'doctype'],
    style: {
      color: '#FEE17C',
      fontStyle: 'italic',
    },
  }, {
    types: ['class-name'],
    style: {
      color: 'hsl(var(--color-10))',
    },
  }, {
    types: ['tag', 'operator', 'keyword'],
    style: {
      color: '#70E3EB',
    },
  }, {
    types: ['boolean'],
    style: {
      color: '#FF1A43',
    },
  }, {
    types: ['property'],
    style: {
      color: '#70E3EB',
    },
  }, {
    types: ['namespace'],
    style: {
      color: 'hsl(var(--color-60))',
    },
  }],
};

export default theme;
