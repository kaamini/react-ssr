var path = require("path");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

var serverConfig = {
  entry: ["@babel/polyfill", path.resolve(__dirname, "../src/server/index.js")],
  target: "node",
  output: {
    filename: "server.js",
    publicPath: "auto",
  },
  externals: ["enhanced-resolve"],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  optimization: {
    minimize: false,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|GeneralJS|Global)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "customerPreference",
      library: { type: "commonjs-module" },
      filename: "remoteServerEntry.js",

      exposes: {
        "./HeaderComponent": "./src/components/HeaderComponent",
        "./PreferencesComponent": "./src/components/PreferencesComponent",
        "./Button": "./src/components/Button",
      },
      //shared: ["react", "react-dom"],
    }),
  ],
};

module.exports = [serverConfig];