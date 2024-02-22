module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
    },
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
  };
  