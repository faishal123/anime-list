import { render } from "@testing-library/react";
import CollectionDetail from "./CollectionDetail";
import { MockedProvider } from "@apollo/client/testing";

describe("Render", () => {
  test("Render", () => {
    render(
      <MockedProvider>
        <CollectionDetail />
      </MockedProvider>
    );
  });
});
