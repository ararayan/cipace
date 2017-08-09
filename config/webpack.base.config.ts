import webpack from 'webpack';
import path from 'path';

export let config: webpack.Configuration = {
  entry: path.resolve('../', 'src/index.js'),
  module: {
    rules: [
      {
        test: "*.js",
        use: "babel"
      }
    ]
  }
}
