module.exports = function (api) {
  const presets = ["react-app"];
  const plugins = [
    "@babel/plugin-transform-modules-commonjs",
    "inline-react-svg"
  ];

  /* change this value when there are a lot of tests */
  api.cache(false);

  return {
    presets,
    plugins
  }
  
};