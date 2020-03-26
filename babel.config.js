const presets = [
  [
    '@babel/preset-env',
    {
      /*useBuiltIns: "usage",
      forceAllTransforms: true,
      ignoreBrowserslistConfig: false,
      modules: false,
      debug: true,*/
      targets: {
        firefox: '60',
        chrome: '46',
        ie: '10',
        //safari: "12",
        //browsers: "> 1% or not ie <= 10 or ios_saf > 12"
      }
    }
  ]
];

const plugins = [
  '@babel/plugin-proposal-class-properties'
];

module.exports = {
  presets,
  plugins
};
