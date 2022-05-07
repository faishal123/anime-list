import { render } from "@testing-library/react";
import { SingleAnimeMock } from "./mock";
import singletonRouter from "next/router";
import { MockedProvider } from "@apollo/client/testing";
import AnimeDetail from "./AnimeDetail";

import mockRouter from "next-router-mock";
import "next-router-mock/dynamic-routes/next-12";

// mockRouter.registerPaths([
//   // These paths should match those found in the `/pages` folder:
//   "/[id]",
//   "/static/path",
//   "/[dynamic]/path",
//   "/[...catchAll]/path",
// ]);

describe("Render wihtout animeId", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });
  test("Render", () => {
    render(
      <MockedProvider mocks={[SingleAnimeMock]}>
        <AnimeDetail />
      </MockedProvider>
    );
    expect(singletonRouter.asPath).toBe("/?page=1");
  });
});

describe("Render with animeId", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/anime/11061");
  });
  test("Render", () => {
    console.log(singletonRouter);
    render(
      <MockedProvider mocks={[SingleAnimeMock]}>
        <AnimeDetail />
      </MockedProvider>
    );
    console.log(singletonRouter);
  });
});
