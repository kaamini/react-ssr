const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "../src/index.js"),
    mode: "development",
    target: "web",
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
        port: 3001,
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
          name: "preferenceView",
          library: { type: "window", name: "preferenceView" },
          filename: "remoteEntry.js",
          remotes: {
            customerPreference:  "customerPreference@http://localhost:3002/remoteEntry.js",
          },
          shared: ["react", "react-dom","react-router-dom"]
        }),
        new HtmlWebpackPlugin({
          template: "./public/index.html",
        }),
      ],
}

function getRemoteEntryUrl(port) {
  const { CODESANDBOX_SSE, HOSTNAME = "" } = process.env;

  // Check if the example is running on codesandbox
  // https://codesandbox.io/docs/environment
  if (!CODESANDBOX_SSE) {
    return `http://localhost:${port}/remoteEntry.js`;
  }

  const parts = HOSTNAME.split("-");
  const codesandboxId = parts[parts.length - 1];

  return `//${codesandboxId}-${port}.sse.codesandbox.io/remoteEntry.js`;
}