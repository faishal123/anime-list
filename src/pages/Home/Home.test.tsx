import { render } from "@testing-library/react";
import Home from "./Home";
import { beforeEachFunction, animeListMock } from "./mock";
import { MockedProvider } from "@apollo/client/testing";
jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("Render", () => {
  beforeEach(() => {
    beforeEachFunction();
  });

  test("Render", () => {
    render(
      <MockedProvider mocks={[animeListMock({})]}>
        <Home />
      </MockedProvider>
    );
  });
});
