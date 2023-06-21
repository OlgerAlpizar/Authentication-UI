import path from 'path'
import webpack from 'webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import EsLintPlugin from 'eslint-webpack-plugin'
import dotenv from 'dotenv'
import { container } from 'webpack'
import Config from './src/configurations/config'
import { dependencies } from './package.json'

dotenv.config();

module.exports = {
  mode: Config.env(),
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
    uniqueName: 'authentication',
    clean: true,
    asyncChunks: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  devServer: {
    https: true,
    hot: true,
    client: {
      progress: true,
    },
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: Config.port(),
    //open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
    new EsLintPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      favicon: './public/logo.png',
      filename: 'index.html',
    }),
    new BundleAnalyzerPlugin({
      analyzerPort: Config.analyzerPort(),
      openAnalyzer: false
    }),
    new MiniCssExtractPlugin({}),
    new container.ModuleFederationPlugin({
      name: 'authentication',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthenticationRemote': './src/exposes/AuthenticationRemote.tsx'
      },
      shared: {
        ...dependencies,
        react: { singleton: true, requiredVersion: dependencies.react },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: dependencies['react-router-dom'],
        }
      },
    })
  ],
  optimization: {
    removeEmptyChunks: true,
  },
  experiments: {
    topLevelAwait: true,
  }
}
