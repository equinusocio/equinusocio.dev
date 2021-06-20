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
  trailingSlash: true,
});
