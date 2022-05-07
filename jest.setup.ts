import "@testing-library/jest-dom";

jest.mock("next/dist/client/router", () => require("next-router-mock"));

jest.mock("next/config", () => () => ({
  publicRuntimeConfig: {
    version: "1.5.0",
  },
}));
