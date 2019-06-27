module.exports = {
  "extends": [
    "airbnb-base",
  ],
  "plugins": [
    "@typescript-eslint",
    "googleappsscript"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "project": "./tsconfig.test.json"
  },
  "env": {
    "node": true,
    "googleappsscript/googleappsscript": true,
  },
  "settings": {
    "node": {
      "tryExtensions": [".ts", ".js", ".json"],
    },
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  "rules": {
  }
};
