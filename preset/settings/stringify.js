'use strict';

module.exports = {
    "settings": {
        "entities"           : false,
        "setext"             : false,
        "closeAtx"           : false,
        "looseTable"         : false,
        "spacedTable"        : true,
        "paddedTable"        : true,
        "stringLength"       : s => s.length,
        "fence"              : "`",
        "fences"             : false,
        "bullet"             : "*",
        "listItemIndent"     : "tab",
        "incrementListMarker": true,
        "rule"               : "-",
        "ruleRepetition"     : 3,
        "ruleSpaces"         : false,
        "strong"             : "*",
        "emphasis"           : "_",
    },
};
