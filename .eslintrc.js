module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": ["plugin:@typescript-eslint/recommended"],
  "parserOptions": { "ecmaVersion": 2018, "sourceType": "module" },
  "rules": {
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/ban-ts-comment": "off"
  }
};