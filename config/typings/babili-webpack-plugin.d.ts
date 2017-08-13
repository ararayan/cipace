import * as Tapable from 'tapable';
import * as webpack from 'webpack';



declare namespace BabiliPlugin {
  class Ctor {
    new(a?: any, b?: any): any;
    apply(compiler: webpack.Compiler): void;
  }
}

export = BabiliPlugin;
