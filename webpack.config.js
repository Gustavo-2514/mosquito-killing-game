"use strict";
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: {
    index: "./src/js/index.js",
    game: "./src/js/game.js",
  },
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "public"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "imgs/",
            },
          },
        ],
      },
      ,
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  plugins: [
    new miniCssExtractPlugin({ filename: "index.min.css" }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/game.html",
      filename: "game.html",
      chunks: ["game"],
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "src"),
    },
  },
  stats: {
    warningsFilter: [
      /Deprecation.*percentage units to the global abs\(\) function is deprecated/,
    ],
  },
};
