# <img src="./src/images/webpack.svg" width="27"> Webpack KT

Contains examples using `webpack 5`.

## Compatibility
- Webpack runs from Node version 10.13+.
- The browser must support ES5 features.

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

`webpack.config.js` example:
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

## Images
```bash
yarn add -D file-loader
```
```javascript
{
  test: /\.(png|jpg|jpeg)$/,
  use: [
    'file-loader'
  ]
}
```
## HTML
```bash
yarn add -D html-loader
```
```javascript
{
  test: /\.html$/,
  use: {
    loader: 'html-loader'
  }
}
```

## TXT Files
```bash
yarn add -D raw-loader
```
```javascript
{
  test: /\.txt$/,
  use: 'raw-loader'
}
```

## JSON
- JSON files are standard webpack data.
- Don't need loaders.

## Remove CSS from JS
```bash
yarn add -D mini-css-extract-plugin
```
### Loader
```javascript
{
  test: /\.s?css$/,
  use: [
    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
  ]
}
```
### Plugin
```javascript
plugins: [
  new MiniCssExtractPlugin({
    filename: 'styles.css'
  })
]
```

# Useful links
- https://webpack.js.org/concepts/
- https://babeljs.io/docs/en/plugins
- https://babeljs.io/docs/en/plugins-list
