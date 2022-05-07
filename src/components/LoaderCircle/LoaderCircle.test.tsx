import { render } from "@testing-library/react";
import LoaderCircle from "./LoaderCircle";

test("Render", () => {
  const { getByTestId } = render(<LoaderCircle id="loader-test" />);
  const loaderCircle = getByTestId("loader-test");
  expect(loaderCircle).toBeInTheDocument();
});
