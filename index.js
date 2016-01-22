var babel = require('babel-core');

module.exports = function (src)
{
    return babel.transform(src, {
        presets: ['es2015']
    }).code;
};