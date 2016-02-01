var babel = require('babel-core'),
    _ = require('./lib/util');

var defOpts = {
    presets: ['es2015']
};

module.exports = function (options)
{
    _.defaults(options, defOpts);

    return function (src)
    {
        return babel.transform(src, options).code;
    };
};