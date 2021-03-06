module.exports = {
  plugins: [
    // https://github.com/postcss/postcss-dark-theme-class
    require('postcss-import')(),
    require('postcss-dark-theme-class')({
      darkSelector: '[data-theme="dark"]',
      lightSelector: '[data-theme="light"]'
    }),
    // https://preset-env.cssdb.org
    require('postcss-preset-env')({
      stage: 0,
      features: {
        'prefers-color-scheme-query': false,
      },
    }),
    // https://cssnano.co
    require('cssnano')({
      preset: [
        // https://cssnano.co/docs/presets
        // https://cssnano.co/docs/what-are-optimisations#what-optimisations-do-you-support
        'advanced',
        {
          discardComments: {
            removeAll: true,
          },
          reduceIdents: false,
        },
      ],
    }),
  ],
}
