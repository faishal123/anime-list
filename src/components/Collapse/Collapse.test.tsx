import { render } from "@testing-library/react";
import { useState } from "react";
import Collapse from "./Collapse";
import userEvent from "@testing-library/user-event";

const Component = ({ maxHeight }: { maxHeight?: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        data-testid="btn-toggle"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        toggle
      </button>
      <Collapse maxHeight={maxHeight} isOpen={isOpen} id={"collapse-test"}>
        <div data-testid="collapse-content">Collapse Content</div>
      </Collapse>
    </>
  );
};

test("Render Open and Close", async () => {
  const { getByTestId } = render(<Component />);
  const buttonToggle = getByTestId("btn-toggle");
  const contentContainerClosed = getByTestId("collapse-test-isOpen-false");
  expect(contentContainerClosed).toBeInTheDocument();
  await userEvent.click(buttonToggle);

  const contentContainerOpened = getByTestId("collapse-test-isOpen-true");
  expect(contentContainerOpened).toBeInTheDocument();
});

test("Render with maxHeight", async () => {
  const { getByTestId } = render(<Component maxHeight={100} />);
  const buttonToggle = getByTestId("btn-toggle");
  const contentContainerClosed = getByTestId("collapse-test-isOpen-false");
  expect(contentContainerClosed).toBeInTheDocument();
  await userEvent.click(buttonToggle);

  const contentContainerOpened = getByTestId("collapse-test-isOpen-true");
  expect(contentContainerOpened).toBeInTheDocument();
});

test("Render with maxHeight negative", async () => {
  const { getByTestId } = render(<Component maxHeight={-1} />);
  const buttonToggle = getByTestId("btn-toggle");
  const contentContainerClosed = getByTestId("collapse-test-isOpen-false");
  expect(contentContainerClosed).toBeInTheDocument();
  await userEvent.click(buttonToggle);

  const contentContainerOpened = getByTestId("collapse-test-isOpen-true");
  expect(contentContainerOpened).toBeInTheDocument();
});
