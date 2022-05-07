import { render } from "@testing-library/react";
import Arrow from "./Arrow";

test("Render Test", () => {
  const { getByTestId } = render(<Arrow id="arw-testArrow" />);
  const arrowElement = getByTestId("arw-testArrow");
  expect(arrowElement).toBeInTheDocument();
});
