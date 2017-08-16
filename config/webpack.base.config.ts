// https://webpack.js.org/configuration/

import * as BabiliPlugin from 'babili-webpack-plugin';
import * as webpack from 'webpack';
import * as path from 'path';
declare var __dirname: string;

const resolvePath: (path: string) => string = (pathRelateRoot) => {
  const currFolderPath = './';
  return path.resolve(currFolderPath, pathRelateRoot);
};

const config: webpack.Configuration = {
  entry: resolvePath('src/index.ts'),
  output: {
    path: resolvePath('dist'),
    filename: 'test[name][chunkhash:4].js'
  },
  stats: {
    warnings: false
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          configFile: resolvePath('tslint.json'),
          failOnHint: false,
          tsConfigFile: resolvePath('tsconfig.es2015.json'),
          // name of your formatter (optional)
          // formatter: 'yourformatter',
          fileOutput: {
            dir: resolvePath('report/tslint/')
          }
        }
      },
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        options: {
          configFileName: './tsconfig.es2015.json'
        }
      }
    ]
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    // directories where to look for modules
    // modules: [
    //   resolvePath('node_modules'),
    //   resolvePath('src')
    // ],
    // extensions that are used
    extensions: ['.ts', '.js', '.vue']
  },
  plugins: [
    new BabiliPlugin()
  ]
};

export default config;
