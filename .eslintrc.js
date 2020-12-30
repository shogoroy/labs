module.exports = {
  env: { browser: true, es6: true, node: true },
  parser: "@typescript-eslint/parser",
  plugins: ["simple-import-sort", "react", "react-hooks", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "react/prop-types": "off",
    "@typescript-eslint/no-empty-interface": "warn",
  },
}
