import * as Tapable from 'tapable';
import * as webpack from 'webpack';



interface BabiliPlugin extends webpack.Plugin {
    new (): BabiliPlugin;
}

declare const BabiliPlugin: BabiliPlugin
export = BabiliPlugin

