var path = require("path");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
  const remotePath = path.resolve(
    __dirname,
    "../../../customer-preference/dist/remoteServerEntry.js"
)
var serverConfig = {
  entry: path.resolve(__dirname, "../src/server/index.js"),
  target: "async-node",
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
      name: "preferenceView",
      library: { type: "commonjs-module" },
      filename: "remoteServerEntry.js",
      remotes: {
        customerPreference: "http://localhost:3002/remoteServerEntry.js"
      },
      //shared: ["react", "react-dom"],
    }),
  ],
};

module.exports = [serverConfig];

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