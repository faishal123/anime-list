import { render } from "@testing-library/react";
import BackgroundWrapper from "./BackgroundWrapper";

describe("Render Desktop", () => {
  test("Render Desktop", () => {
    const { getByTestId } = render(
      <BackgroundWrapper>
        <div data-testid="children"></div>
      </BackgroundWrapper>
    );
    const backgroundWrapper = getByTestId("backgroundWrapper");
    const children = getByTestId("children");
    const sidebar = getByTestId("sidebar-mainNav");
    expect(backgroundWrapper).toBeInTheDocument();
    expect(children).toBeInTheDocument();
    expect(sidebar).toBeInTheDocument();
  });
});

describe("Render Mobile", () => {
  beforeEach(() => {
    global.innerWidth = 480;
  });
  test("Render Mobile", () => {
    const { getByTestId, queryByTestId } = render(
      <BackgroundWrapper>
        <div data-testid="children"></div>
      </BackgroundWrapper>
    );
    const backgroundWrapper = getByTestId("backgroundWrapper");
    const sidebarDesktop = queryByTestId("sidebar-mainNav");
    const children = getByTestId("children");
    expect(backgroundWrapper).toBeInTheDocument();
    expect(children).toBeInTheDocument();
    expect(sidebarDesktop).not.toBeInTheDocument();
  });
});
