// Built by eustia.
module.exports = (function ()
{
    var _ = {};

    /* ------------------------------ isUndef ------------------------------ */

    var isUndef;

    _.isUndef = (function ()
    {
        /* function
         *
         * isUndef: Checks if value is undefined.
         * value(*): The value to check.
         * return(boolean): Returns true if value is undefined, else false.
         *
         * ```javascript
         * _.isUndef(void 0) // -> true
         * _.isUndef(null) // -> false
         * ```
         *
         * Just a shortcut for **x === undefined**, doesn't matter that much whether you
         * use it or not.
         */

        isUndef = function (value) { return value === void 0 };

        return isUndef;
    })();

    /* ------------------------------ _createAssigner ------------------------------ */

    var _createAssigner;

    _._createAssigner = (function ()
    {

        _createAssigner = function (keysFunc, defaults)
        {
            return function (obj)
            {
                var len = arguments.length;

                if (defaults) obj = Object(obj);

                if (len < 2 || obj == null) return obj;

                for (var i = 1; i < len; i++)
                {
                    var src     = arguments[i],
                        keys    = keysFunc(src),
                        keysLen = keys.length;

                    for (var j = 0; j < keysLen; j++)
                    {
                        var key = keys[j];
                        if (!defaults || isUndef(obj[key])) obj[key] = src[key];
                    }
                }

                return obj;
            };
        };

        return _createAssigner;
    })();

    /* ------------------------------ allKeys ------------------------------ */

    var allKeys;

    _.allKeys = (function ()
    {
        /* function
         * allKeys: Retrieve all the names of object's own and inherited properties.
         * object(object): The object to query.
         * return(array): Returns the array of all property names.
         *
         * ```javascript
         * var obj = Object.create({ a: 0 });
         * obj.b = 1;
         * _.allKeys(obj) // -> ['a', 'b']
         * ```
         *
         * > Members of Object's prototype won't be retrieved.
         */

        allKeys = function (obj)
        {
            var ret = [], key;

            for (key in obj) ret.push(key);

            return ret;
        };

        return allKeys;
    })();

    /* ------------------------------ defaults ------------------------------ */

    var defaults;

    _.defaults = (function ()
    {
        // @TODO

        defaults = _createAssigner(allKeys, true);

        return defaults;
    })();

    return _;
})();