# <img src="./src/images/webpack.svg" width="27"> Webpack KT

Contains examples using `webpack 5`.

## Compatibility
- Webpack runs from Node version 10.13+.
- The browser must support ES5 features.
___
## Commands to start
```text
- git clone https://github.com/thiagofranchin/webpack-kt.git
- cd webpack-kt
- yarn     or npm install
- yarn dev or npm run dev
- Open /dist/index.html in the browser and see the output of the /src/index.js file
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

## Images
```bash
yarn add -D file-loader
```

`webpack.config.js`
```javascript
{
  test: /\.(png|jpg|jpeg)$/,
  use: [
    'file-loader'
  ]
}
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


## Minimize JavaScript in the Development Environment

- This configuration is used to test javascript in development environment.
- Production build already minimizes javascript automatically.
- Used, for example, to test the javascript performance

```bash
npm install --save-dev terser-webpack-plugin
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
npm install --save-dev dotenv-webpack
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
npm install --save-dev html-webpack-plugin
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
npm install --save-dev clean-webpack-plugin
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

# Useful links
- https://webpack.js.org/concepts/
- https://babeljs.io/docs/en/plugins
- https://babeljs.io/docs/en/plugins-list
