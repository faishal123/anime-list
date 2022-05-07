import { render } from "@testing-library/react";
import { useState } from "react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";

const Component = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        data-testid="btn-toggle"
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        toggle
      </button>
      <Modal
        show={show}
        onLeave={() => {
          setShow(false);
        }}
        id="modal-test"
      >
        <div data-testid="content-modal">content</div>
      </Modal>
    </>
  );
};

test("Render", async () => {
  const { getByTestId, queryByTestId } = render(<Component />);
  const toggleButton = getByTestId("btn-toggle");
  await userEvent.click(toggleButton);
  const modal = getByTestId("modal-test-main");
  expect(modal).toBeInTheDocument();
  const outsideArea = getByTestId("modal-test-container");
  await userEvent.click(outsideArea);
  const modalHidden = queryByTestId("modal-test-main");
  expect(modalHidden).not.toBeInTheDocument();
});
