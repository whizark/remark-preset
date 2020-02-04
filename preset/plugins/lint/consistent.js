'use strict';

module.exports = {
    "plugins": {
        "lint": {
            "externals"                        : [],
            "blockquote-indentation"           : [
                "error",
                "consistent",
            ],
            "checkbox-character-style"         : [
                "error",
                "consistent",
            ],
            "checkbox-content-indent"          : ["error"],
            "code-block-style"                 : [
                "error",
                "consistent",
            ],
            "definition-case"                  : ["error"],
            "definition-spacing"               : ["error"],
            "emphasis-marker"                  : [
                "error",
                "consistent",
            ],
            "fenced-code-flag"                 : [
                "error",
                {
                    "allowEmpty": false,
                }
            ],
            "fenced-code-marker"               : [
                "error",
                "consistent",
            ],
            "file-extension"                   : [
                "error",
                "md",
            ],
            "final-definition"                 : ["error"],
            "final-newline"                    : ["error"],
            "first-heading-level"              : [
                "error",
                1,
            ]
            ,
            "hard-break-spaces"                : ["error"],
            "heading-increment"                : ["error"],
            "heading-style"                    : [
                "error",
                "consistent",
            ],
            "link-title-style"                 : [
                "error",
                "consistent",
            ],
            "list-item-bullet-indent"          : ["error"],
            "list-item-content-indent"         : ["error"],
            "list-item-indent"                 : [
                "error",
                "tab-size",
            ],
            "list-item-spacing"                : ["error"],
            "maximum-heading-length"           : [
                "error",
                60,
            ],
            "maximum-line-length"              : [
                "error",
                80,
            ],
            "no-auto-link-without-protocol"    : ["error"],
            "no-blockquote-without-caret"      : ["error"],
            "no-consecutive-blank-lines"       : ["error"],
            "no-duplicate-definitions"         : ["error"],
            "no-duplicate-headings"            : ["error"],
            "no-duplicate-headings-in-section" : ["error"],
            "no-emphasis-as-heading"           : ["error"],
            "no-empty-url"                     : ["error"],
            "no-file-name-articles"            : ["error"],
            "no-file-name-consecutive-dashes"  : ["error"],
            "no-file-name-irregular-characters": [
                "error",
                "\\.a-zA-Z0-9-",
            ],
            "no-file-name-mixed-case"          : ["error"],
            "no-file-name-outer-dashes"        : ["error"],
            "no-heading-content-indent"        : ["error"],
            "no-heading-indent"                : ["error"],
            "no-heading-like-paragraph"        : ["error"],
            "no-heading-punctuation"           : [
                "error",
                "\\.,;:!?",
            ],
            "no-html"                          : ["error"],
            "no-inline-padding"                : ["error"],
            "no-literal-urls"                  : ["error"],
            "no-missing-blank-lines"           : [
                "error",
                {
                    "exceptTightLists": true
                }
            ],
            "no-multiple-toplevel-headings"    : [
                "error",
                1,
            ],
            "no-reference-like-url"            : ["error"],
            "no-shell-dollars"                 : ["error"],
            "no-shortcut-reference-image"      : ["error"],
            "no-shortcut-reference-link"       : ["error"],
            "no-table-indentation"             : ["error"],
            "no-tabs"                          : ["error"],
            "no-undefined-references"          : [
                "error",
                {
                    "allow": [],
                }
            ],
            "no-unused-definitions"            : ["error"],
            "ordered-list-marker-style"        : [
                "error",
                "consistent",
            ],
            "ordered-list-marker-value"        : [
                "error",
                "ordered",
            ],
            "rule-style"                       : [
                "error",
                "consistent",
            ],
            "strong-marker"                    : [
                "error",
                "consistent",
            ],
            "table-cell-padding"               : [
                "error",
                "consistent",
            ],
            "table-pipe-alignment"             : ["error"],
            "table-pipes"                      : ["error"],
            "unordered-list-marker-style"      : [
                "error",
                "consistent",
            ],
        },
    },
};
