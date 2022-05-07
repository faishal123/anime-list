import { render } from "@testing-library/react";
import Checkmark from "./Checkmark";

test("Render", () => {
  const { getByTestId } = render(<Checkmark id={"chkmrk-test"} />);
  const checkMark = getByTestId("chkmrk-test");
  expect(checkMark).toBeInTheDocument();
});
