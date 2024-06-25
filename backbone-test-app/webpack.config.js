import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import webpack from "webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import HtmlWebpackPlugin from "html-webpack-plugin";

// import ESLintPlugin from "eslint-webpack-plugin";
export default {
  mode: "development", // or 'production' depending on your use case
  entry: "./src/rvc/index.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },
  plugins: [
    // new ESLintPlugin({
    //   extensions: ["js"],
    //   eslintPath: "eslint", // Use direct string path to eslint module
    //   overrideConfigFile: async () =>
    //     await import(resolve(__dirname, "eslint.config.js")),
    // }),
    // new ESLintPlugin({
    //   extensions: ["js"],
    //   eslintPath: "eslint", // Use direct string path to eslint module
    //   overrideConfigFile: resolve(__dirname, "eslint.config.js"), // Provide the absolute path to your eslint config file
    // }),
    new HtmlWebpackPlugin({
      template: "./src/rvc/index.html",
      filename: "index.html",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      JQuery: "jquery",
      Backbone: "backbone",
      _: "underscore",
    }),
  ],
  devServer: {
    static: {
      directory: resolve(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: [".js"],
  },
};
