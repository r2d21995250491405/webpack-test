const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = [
  {
    entry: "./src/main.tsx",
    mode: "development",
    target: "web",
    output: {
      path: path.resolve(__dirname, "dist/user"),
      filename: "user_bundle.js",
      assetModuleFilename: "assets/[name][ext]",
    },
    plugins: [
      new HtmlPlugin({
        template: "./src/index.html",
      }),
      new Dotenv(),
    ],
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".css", ".scss", ".svg"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: "ts-loader",
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.module\.scss$/i,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: {
                  mode: "local",
                },
              },
            },
            {
              loader: "sass-loader",
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
  },
];
