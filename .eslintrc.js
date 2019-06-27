module.exports = {
  "extends": [
    "airbnb-base",
  ],
  "plugins": [
    "@typescript-eslint",
    "googleappsscript",
    "jest",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "project": "./tsconfig.test.json"
  },
  "env": {
    "node": true,
    "googleappsscript/googleappsscript": true,
    "jest/globals": true,
  },
  "settings": {
    "node": {
      "tryExtensions": [".ts", ".js", ".json"],
    },
    "import/resolver": {
      "node": {
        "paths": ["src", "__tests__"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  "rules": {
  }
};
