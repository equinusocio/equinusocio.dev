/*
  eslint-disable
  @typescript-eslint/no-var-requires,
  global-require
*/
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  [
    withBundleAnalyzer({
      enabled: process.env.ANALYZE === 'true',
    }),
  ],
], {
  webpack(conf) {
    let newOneOfTheme = {};
    conf.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((oneof) => {
          if (oneof.test?.toString().includes('css')) {
            // eslint-disable-next-line no-param-reassign
            oneof.exclude = /light\.theme\.css|dark\.theme\.css$/;
            newOneOfTheme = {
              test: /light\.theme\.css|dark\.theme\.css$/,
              use: [{
                loader: 'css-loader',
              }, {
                loader: 'postcss-loader',
              }],
            };
          }
        });
        rule.oneOf.push(newOneOfTheme);
      }
    });
    return conf;
  },
  trailingSlash: true,
  future: {
    webpack5: true,
  },
});
