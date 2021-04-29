/* eslint-disable @typescript-eslint/no-var-requires, global-require */

module.exports = {
  plugins: {
    /* More info at https://github.com/TrySound/postcss-easy-import */
    'postcss-easy-import': {
      extensions: '.css',
    },
    /* https://github.com/postcss/postcss-dark-theme-class */
    'postcss-dark-theme-class': {
      darkSelector: '[data-theme="dark"]',
      lightSelector: '[data-theme="light"]',
    },
    /* More info at https://github.com/csstools/postcss-preset-env */
    'postcss-preset-env': {
      stage: 0,
      features: {
        'logical-properties-and-values': false,
        'prefers-color-scheme-query': false,
        'gap-properties': false,
      },
      insertAfter: {
        'custom-media-queries': require('postcss-mixins')(),
      },
    },
    /* More info at https://github.com/jonathantneal/postcss-inset#readme */
    'postcss-inset': {},
    /* More info at https://cssnano.co/ */
    cssnano: {
      preset: [
        'advanced',
        {
          discardComments: {
            removeAll: true,
          },
          reduceIdents: false,
        },
      ],
    },
  },
};
