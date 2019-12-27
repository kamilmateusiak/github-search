const {
  override,
  addBabelPlugins,
  addBabelPresets,
  addWebpackResolve,
  enableEslintTypescript
} = require("customize-cra");

module.exports = override(
  ...addBabelPlugins(
    "emotion"
  ),
  ...addBabelPresets(
    [
      "@emotion/babel-preset-css-prop",
      {
        "autoLabel": true,
        "labelFormat": "[local]"
      }
    ]
  ),
  enableEslintTypescript(),
  addWebpackResolve({
    extensions: ['.ts', '.tsx', '.js', '.json']
  })
);