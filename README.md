# <img src="./src/images/webpack.svg" width="27"> Webpack KT

Contains examples using `webpack 5`.

## Compatibility
- Webpack runs from Node version 10.13+.
- The browser must support ES5 features.
___
## Commands to start
```bash
git clone https://github.com/thiagofranchin/webpack-kt.git
```
```bash
cd webpack-kt
```
```bash
yarn | npm install
```
### To start the development server
```bash
yarn dev | npm run dev
```

### To build the project for production.

Open `/dist/index.html` in the browser and see the output of the /src/index.js file.
```bash
yarn prod | npm run prod
```
___
## Install

```bash
yarn add webpack webpack-cli
```

`package.json`
```json
"scripts": {
  "dev": "webpack --mode development --watch",
  "build": "webpack --mode production"
},
```
### With different configuration
```json
"scripts": {
  "dev": "webpack --config webpack.config.dev.js --watch",
  "prod": "webpack --config webpack.config.prod.js"
},
```

`webpack.config.js`
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        // LOADER 1
      },
      {
        // LOADER 2
      }
    ]
  },
  plugins: [
    // PLUGIN 1
  ]
}
```
# Loaders and Plugins
## CSS and SASS
```bash
yarn add -D sass style-loader css-loader sass-loader
```

`webpack.config.js`
```javascript
{
  test: /\.s?css$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ]
}
```
___

## Remove CSS from JS
```bash
yarn add -D mini-css-extract-plugin
```
`webpack.config.js`
```javascript
  {
    test: /\.s?css$/,
    use: [
      MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
    ]
  }
...
plugins: [
  new MiniCssExtractPlugin({
    filename: 'styles.css'
  })
]
```
___

## Images
No need loaders for images.

Read more in [Asset Modules](https://webpack.js.org/guides/asset-modules/)

`webpack.config.js`
```javascript
{
  test: /\.(png|jpg|jpeg|svg)$/,
  type: 'asset/resource'
},
```
___

## HTML
```bash
yarn add -D html-loader
```

`webpack.config.js`
```javascript
{
  test: /\.html$/,
  use: {
    loader: 'html-loader'
  }
}
```
___

## TXT Files
```bash
yarn add -D raw-loader
```

`webpack.config.js`
```javascript
{
  test: /\.txt$/,
  use: 'raw-loader'
}
```
___

## JSON
- JSON files are standard webpack data.
- Don't need loaders.

`register.json`
```json
{
  "name": "Sr(a). Webpack",
  "email": "webpack@email.com",
}
```
`index.js`
```javascript
import register from './register.json';

document.body.innerHTML = `
  <h1>${register.name}</h1>
  <p>${register.email}</p>
`;
```
___

## Minimize JavaScript in the Development Environment

- This configuration is used to test javascript in development environment.
- Production build already minimizes javascript automatically.
- Used, for example, to test the javascript performance

```bash
yarn add -D terser-webpack-plugin
```
`webpack.config.js`
```js
const TerserPlugin = require('terser-webpack-plugin');
...
module.exports = {
  ...
  mode: 'development',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  ...
```
___

## Global Variables

- DefinePlugin is used to define global environment variables.
- It comes with webpack, no need to install it.

`webpack.config.js`
```js
const webpack = require('webpack');

plugins: [
  ...
  new webpack.DefinePlugin({
    VERSION: JSON.stringify('1.0.0'),
    PORT: JSON.stringify('8080')
  })
]
```
`index.js` example:
```js
document.body.innerHTML += `<p>Version: ${VERSION}</p>`
document.body.innerHTML += `<p>Port: ${PORT}</p>`
```
___

## DotEnv
Create file `.env` and add environment variables.

`.env` example:
```bash
PORT=8080
```

`webpack.config.js`
```bash
yarn add -D dotenv-webpack
```

`webpack.config.js`
```js
const DotenvPlugin = require('dotenv-webpack');
...

plugins: [
  ...
  new DotenvPlugin()
]
```
`index.js` example:
```js
document.body.innerHTML += `<p>API KEY: ${process.env.API_KEY}</p>`
```
___

## HtmlWebpackPlugin
Gererate html file with webpack.

```bash
yarn add -D html-webpack-plugin
```
`webpack.config.js`
```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
...
plugins: [
  ...
  new HtmlWebpackPlugin()
]
```
___

## Control cache using [contenthash]
`webpack.config.js`
```js
  filename: '[name].js?[contenthash]'
```
___

## Remove unused files
```bash
yarn add -D clean-webpack-plugin
```
`webpack.config.js`

Make CleanWebpackPlugin the first plugin to run so that it erases old files before recreating them.

```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
...
plugins: [
  new CleanWebpackPlugin()
  ...
]
```
___

## Webpack Dev Server
```bash
yarn add -D webpack-dev-server
```
`package.json`
```json
"scripts": {
  "dev": "webpack serve --config webpack.config.dev.js",
  ...
},
```

`webpack.config.dev.js`
```js
mode: 'development',
devServer: {
  static: {
    directory: path.resolve(__dirname, 'dist'),
  },
  port: 8080,
  historyApiFallback: {
    index: 'index.html'
  }
},

```
___

## JQuery

Read more in [Usage: jQuery](https://webpack.js.org/plugins/provide-plugin/#usage-jquery)

```bash
yarn add -D jquery
```

`webpack.config.js`
```js
var webpack = require("webpack");
...

plugins: [
  ...
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  })
]

```

`index.js` example:
```js
// The "import" is not needed if jquery was called in plugins in the webpack file
import $ from 'jquery';

$('h1').text('Hello World');
```

# Useful links
- https://webpack.js.org/concepts/
- https://babeljs.io/docs/en/plugins
- https://babeljs.io/docs/en/plugins-list
