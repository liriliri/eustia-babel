// Built by eustia.
(function(root, factory)
{
    if (typeof define === 'function' && define.amd)
    {
        define([], factory);
    } else if (typeof module === 'object' && module.exports)
    {
        module.exports = factory();
    } else { root._ = factory() }
}(this, function ()
{
    var _ = {};

    if (typeof window === 'object' && window._) _ = window._;

    /* ------------------------------ Person ------------------------------ */

    var Person;

    _.Person = (function ()
    {
        'use strict';

        var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        Person = function () {
            function Person(name, age) {
                _classCallCheck(this, Person);

                this.name = name;
                this.age = age;
            }

            _createClass(Person, [{
                key: 'introduce',
                value: function introduce() {
                    return 'I am ' + this.name + ', ' + 'I\'m ' + this.age + ' years old';
                }
            }]);

            return Person;
        }();

        return Person;
    })();

    return _;
}));