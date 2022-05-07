import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockRouter from "next-router-mock";
import singletonRouter from "next/router";
import Header from "./Header";

describe("Render Header", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/?page=2");
  });
  test("Render Desktop", () => {
    const { queryByTestId } = render(<Header />);
    const logo = queryByTestId("logo-animu");
    const hamburger = queryByTestId("img-hamburger");

    expect(logo).not.toBeInTheDocument();
    expect(hamburger).not.toBeInTheDocument();
  });

  test("Render Mobile", async () => {
    global.innerWidth = 400;
    const { getByTestId } = render(<Header />);
    const logo = getByTestId("logo-animu");
    const hamburger = getByTestId("img-hamburger");

    expect(logo).toBeInTheDocument();
    expect(hamburger).toBeInTheDocument();

    await userEvent.click(hamburger);

    const sidebarShow = getByTestId(
      "sidebar-mainMobile-mainContainer-show-true"
    );
    expect(sidebarShow).toBeInTheDocument();

    const closeArea = getByTestId("sidebar-mainMobile-closeArea-show-true");
    await userEvent.click(closeArea);

    const sidebarClosed = getByTestId(
      "sidebar-mainMobile-mainContainer-show-false"
    );
    expect(sidebarClosed).toBeInTheDocument();

    await userEvent.click(logo);
    expect(singletonRouter.asPath).toBe("/?page=1");
  });
});
