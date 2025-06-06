const isProduction = process.env.NODE_ENV == "production";
var path = require("path");

module.exports = ({ config }) => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return {
    ...config,
    entry: {
      "grapesjs-preset-ostendis-webpage": "./src/index.ts",
    },
    output: {
      ...config.output,
      filename: "[name].min.js",
    },
    devServer: {
      ...config.devServer,
      static: {
        directory: path.resolve(__dirname, "."),
        watch: true,
      },
    },
  };
};
