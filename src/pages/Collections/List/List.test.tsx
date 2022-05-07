import { render } from "@testing-library/react";
import List from "./List";
import { MockedProvider } from "@apollo/client/testing";

describe("Render", () => {
  test("Render", () => {
    render(
      <MockedProvider>
        <List />
      </MockedProvider>
    );
  });
});
