'use strict';

module.exports = {
    "output" : false,
    "presets": [
        "./settings/common.js",
        "./settings/parse.js",
        "./settings/stringify.js",
    ].map(require.resolve),
};
