const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/canvas-system/CanvasSystem2D.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
  output: {
    filename: "pure-ecs.js",
    path: path.resolve(__dirname, "dist"),
    library: "PureECS",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this",
    clean: true,
  },
};
