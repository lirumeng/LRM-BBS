module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "@vue/standard"],
    parserOptions: {
        parser: "babel-eslint"
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "comma-dangle": ["error", "never"],
        "space-before-function-paren": "always",
        indent: ["off", 2],
        quotes: [2, "single", "avoid-escape"],
        "eol-last": 0,
        semi: ["error", "always"]
    }
};