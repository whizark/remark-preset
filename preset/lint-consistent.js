'use strict';

module.exports = {
    "output" : false,
    "presets": [
        "./settings/common.js",
        "./settings/parse.js",
        "./settings/stringify.js",
        "./plugins/lint/consistent.js",
    ].map(require.resolve),
};
