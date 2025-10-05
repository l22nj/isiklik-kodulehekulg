const path = require("path");
const pluginid = require("./src/javascript/webpack-config-abifunktsioonid.js");

module.exports = {
    mode: "development",
    entry: [ "./src/index.js", "./src/tekstid/cv/dummy-cv.pdf" ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: pluginid,
  module: {
    rules: [
        {
            test: /\.(pdf|gif|png|jpe?g)$/,
            loader: 'file-loader',
        },
        {
            test: /\.txt$/i,
            loader: "raw-loader",
        },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

