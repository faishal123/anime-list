import { render } from "@testing-library/react";
import { act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

const Component = ({
  onYes,
  onNo,
}: {
  onYes: () => void;
  onNo: () => void;
}) => {
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
      <ConfirmationModal
        id="confirmationModal-test"
        show={show}
        onLeave={() => {
          setShow(false);
        }}
        onYes={onYes}
        onNo={onNo}
        title="Title"
      />
    </>
  );
};

test("Render", async () => {
  await act(async () => {
    const onYesMock = jest.fn();
    const onNoMock = jest.fn();
    const { queryByTestId, getByTestId } = render(
      <Component onYes={onYesMock} onNo={onNoMock} />
    );
    const toggleButton = getByTestId("btn-toggle");
    const modalTitle = queryByTestId("confirmationModal-test-title");
    expect(modalTitle).not.toBeInTheDocument();
    await userEvent.click(toggleButton);
    const modalTitleShow = queryByTestId("confirmationModal-test-title");
    expect(modalTitleShow).toBeInTheDocument();
    const yesButton = getByTestId("btn-confirmationModal-test-yes");
    await userEvent.click(yesButton);
    expect(onYesMock).toHaveBeenCalled();
    const noButton = getByTestId("btn-confirmationModal-test-no");
    await userEvent.click(noButton);
    expect(onNoMock).toHaveBeenCalled();
  });
});
