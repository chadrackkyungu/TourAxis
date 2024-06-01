module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    // rules: {
    //     // Basic JavaScript/TypeScript best practices
    //     'eqeqeq': ['error', 'always'], // Enforce the use of === and !==
    //     'no-unused-vars': ['warn', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }], // Warn on variables that are declared but not used
    //     'no-console': 'off', // Depending on your project you might want to turn it off
    //     'no-debugger': 'warn', // Warns about debugger statements
    //     'prefer-const': 'error', // Suggest using const
    //     'no-var': 'error', // Require let or const instead of var

    //     // Best practices specific to TypeScript
    //     '@typescript-eslint/explicit-function-return-type': ['off'], // Consider turning this on if you want explicit return types
    //     '@typescript-eslint/no-explicit-any': 'warn', // Warns when 'any' is used
    //     '@typescript-eslint/no-unused-vars': ['warn', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }], // TypeScript version of the rule
    //     '@typescript-eslint/explicit-module-boundary-types': 'off', // Consider enforcing return types on exported functions
    //     '@typescript-eslint/no-non-null-assertion': 'warn', // Warns when using non-null assertions (! postfix)

    //     // Import/export syntax best practices
    //     'import/no-unresolved': 'off', // Ensure imports point to a file/module that can be resolved
    //     'import/named': 'error', // Ensure named imports correspond to a named export in the remote file
    //     'import/namespace': 'error', // Ensure imported namespaces contain valid properties
    //     'import/default': 'error', // Ensure a default export is present, given a default import
    //     'import/export': 'error', // Ensure all exports are declared at the bottom of the file

    //     // Promise and async/await best practices
    //     'prefer-promise-reject-errors': 'error', // Ensure promises are rejected with Error objects
    //     'require-await': 'off', // Disallow async functions which have no await expression

    //     // Node.js specific
    //     'callback-return': 'off', // Enforce return after a callback
    //     'global-require': 'off', // Enforce require() on the top-level module scope
    //     'handle-callback-err': 'warn', // Enforce error handling in callbacks
    //     'no-mixed-requires': ['off', false], // Disallow mixing regular variable and require declarations
    //     'no-new-require': 'error', // Disallow new operators with calls to require
    //     'no-path-concat': 'error', // Disallow string concatenation with __dirname and __filename
    //     'no-process-env': 'off', // Disallow use of process.env
    //     'no-process-exit': 'off', // Disallow process.exit()
    //     'no-restricted-modules': 'off', // Disallow specific modules when loaded by require
    //     'no-sync': 'off', // Disallow synchronous methods
    // },

}
