import { render } from "@testing-library/react";
import Genre from "./Genre";

test("Render", () => {
  const { getByTestId } = render(<Genre genre={"Adventure Fighting"} />);
  const genre = getByTestId("txt-adventureFighting");
  expect(genre).toBeInTheDocument();
});
