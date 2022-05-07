const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  testEnvironment: "jsdom",
  testTimeout: 20000,
  coveragePathIgnorePatterns: [
    "<rootDir>/src/components/index.ts",
    "<rootDir>/src/components/(.*)/index.ts",
    "<rootDir>/src/pages/(.*)/index.ts",
    "<rootDir>/src/api/graphql/(.*)/index.ts",
    "<rootDir>/src/pages/(.*)/index.ts",
    "<rootDir>/src/constant/index.ts",
  ],
  collectCoverage: true,
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
