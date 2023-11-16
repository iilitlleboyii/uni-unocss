module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard",
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier/skip-formatting",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "vue/multi-word-component-names": "off",
  },
  globals: {
    uni: "readonly",
    getCurrentPages: "readonly",
    getApp: "readonly",
  },
  ignorePatterns: [
    "uni.promisify.adaptor.js",
    "uni_modules",
    "unpackage",
    "main.js",
  ],
};
