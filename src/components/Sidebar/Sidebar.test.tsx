import { render } from "@testing-library/react";
import mockRouter from "next-router-mock";
import Sidebar from "./Sidebar";

describe("Render Desktop", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/?page=1");
  });
  test("Render Desktop", () => {
    const { getByTestId } = render(
      <Sidebar isDesktop props={{ id: "sidebar-desktop" }} />
    );
    const containerDesktop = getByTestId("sidebar-desktop");
    expect(containerDesktop).toBeInTheDocument();
  });
});
