module.exports = {
  env: {
    // module.exports に表示される警告を抑制する
    node: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
  },
}
