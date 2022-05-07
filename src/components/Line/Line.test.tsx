import { render } from "@testing-library/react";
import Line from "./Line";

test("Render", () => {
  const { getByTestId } = render(<Line id="line-test" />);
  const line = getByTestId("line-test");
  expect(line).toBeInTheDocument();
});
