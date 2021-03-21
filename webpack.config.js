module.exports = {
  // sets the first file webpack looks at as index.jsx
  //located in dir "build"
  entry: "./src/index.jsx",
  output: {
    path: "build",
    filename: "index.js"
  },
  // contains config info for our loaders
  // loaders translate .jsx code to js
  module: {
    loaders: [{
    test: /\.jsx$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        presets: ["es2015", "react"]
      }
    }]
  }
};