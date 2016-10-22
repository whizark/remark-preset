'use strict';

module.exports = {
    "presets": [
        "./settings/common.js",
        "./settings/parse.js",
        "./settings/stringify.js",
    ].map(require.resolve),
};
