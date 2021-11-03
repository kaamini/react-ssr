const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "../src/index.js"),
    mode: "development",
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
        port: 3002,
      },
    resolve: {
        extensions: ['*','.js', '.jsx'],
    },
    output: {
        publicPath: "auto", //"http:localhost:3002/"
      },
    /** can module be omitted for a simple project? No, it cannot. */
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
          name: "customerPreference",
          library: { type: "window", name: "customerPreference" },
          filename: "remoteEntry.js",
          exposes: {
            "./Button": "./src/components/Button",
          },
          shared: ["react", "react-dom","react-router-dom"]
        })
      ],
}