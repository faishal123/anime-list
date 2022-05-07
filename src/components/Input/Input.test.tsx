import { render } from "@testing-library/react";
import Input from "./index";

test("Render", () => {
  const { getByTestId } = render(<Input id="txt-test" />);
  const input = getByTestId("txt-test");
  expect(input).toBeInTheDocument();
});
