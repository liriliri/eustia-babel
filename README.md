# eustia-babel

[Eustia](https://github.com/liriliri/eustia) Babel plugin.

## Installation

`npm install eustia-babel`

## Usage

`npm install babel-preset-es2015`

```javascript
module.exports = {
    util: {
        files: 'index.html',
        extension: ['js', 'es6'],
        transpiler: [
            {
                test: /\.es6$/,
                handler: require('../index.js')({
                    presets: ['es2015']
                })
            }
        ]
    }
};
```



