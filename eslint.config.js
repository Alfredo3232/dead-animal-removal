import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
    { ignores: ["dist"] },
    {
        files           : ["**/*.{js,jsx}"],
        languageOptions : {
            ecmaVersion   : 2020,
            globals       : globals.browser,
            parserOptions : {
                ecmaVersion  : "latest",
                ecmaFeatures : { jsx: true },
                sourceType   : "module"
            }
        },
        settings : { react: { version: "18.3" } },
        plugins  : {
            react,
            "react-hooks"   : reactHooks,
            "react-refresh" : reactRefresh
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs["jsx-runtime"].rules,
            ...reactHooks.configs.recommended.rules,
            "arrow-body-style" : ["error", "as-needed"],
            "key-spacing"      : [
                "error",
                {
                    align: {
                        afterColon  : true,
                        beforeColon : true,
                        on          : "colon"
                    }
                }
            ],
            "no-console"           : "warn",
            "no-debugger"          : "error",
            "no-dupe-keys"         : "error",
            "no-duplicate-imports" : "error",
            "no-empty"             : "error",
            "no-trailing-spaces"   : "error",
            "no-unused-vars"       : "warn",
            "no-var"               : "error",
            "object-curly-newline" : [
                "error",
                {
                    ExportDeclaration : { consistent: true, minProperties: 3 },
                    ImportDeclaration : { consistent: true, minProperties: 3 },
                    ObjectExpression  : { consistent: true, minProperties: 3 },
                    ObjectPattern     : { consistent: true, minProperties: 3 }
                }
            ],
            quotes: [
                "error",
                "double",
                {
                    allowTemplateLiterals : true,
                    avoidEscape           : true
                }
            ],
            "comma-dangle": [
                "error",
                {
                    arrays    : "never",
                    objects   : "never",
                    imports   : "never",
                    exports   : "never",
                    functions : "never"
                }
            ],
            semi                                   : ["error", "always"],
            eqeqeq                                 : ["error", "smart"],
            "no-else-return"                       : "error",
            "react/jsx-no-target-blank"            : "off",
            "react-refresh/only-export-components" : [
                "warn",
                { allowConstantExport: true }
            ]
        }
    }
];
