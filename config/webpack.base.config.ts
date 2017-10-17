// https://webpack.js.org/configuration/
import * as webpack from 'webpack';
import * as path from 'path';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

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
  plugins: [new BundleAnalyzerPlugin({
    // Can be `server`, `static` or `disabled`.
    // In `server` mode analyzer will start HTTP server to show bundle report.
    // In `static` mode single HTML file with bundle report will be generated.
    // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
    analyzerMode: 'static',
    // Host that will be used in `server` mode to start HTTP server.
    analyzerHost: '127.0.0.1',
    // Port that will be used in `server` mode to start HTTP server.
    analyzerPort: 8888,
    // Path to bundle report file that will be generated in `static` mode.
    // Relative to bundles output directory.
    reportFilename: resolvePath('report/bundle.analyzer/index.html'),
    // Module sizes to show in report by default.
    // Should be one of `stat`, `parsed` or `gzip`.
    // See "Definitions" section for more information.
    defaultSizes: 'parsed',
    // Automatically open report in default browser
    openAnalyzer: false,
    // If `true`, Webpack Stats JSON file will be generated in bundles output directory
    generateStatsFile: false,
    // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
    // Relative to bundles output directory.
    statsFilename: 'stats.json',
    // Options for `stats.toJson()` method.
    // For example you can exclude sources of your modules from stats file with `source: false` option.
    // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
    statsOptions: null,
    // Log level. Can be 'info', 'warn', 'error' or 'silent'.
    logLevel: 'info'
  })]
};

export default config;
