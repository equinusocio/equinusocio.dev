module.exports = {
  memo: true,
  typescript: true,
  replaceAttrValues: {
    '#000': 'currentColor',
  },
  svgProps: {
    width: '{props.size || 24}',
    height: '{props.size || 24}',
  },
};
