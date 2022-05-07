import { render, act } from "@testing-library/react";
import { useState } from "react";
import userEvent from "@testing-library/user-event";
import { NotificationStateType } from "src/constant/interface";
import Notification from "./Notification";

const Component = ({ passOnClose }: { passOnClose: boolean }) => {
  const [renderNotification, setRenderNotification] =
    useState<NotificationStateType>({
      message: "",
      type: "success",
    });

  return (
    <>
      <button
        data-testid="btn-toggle"
        onClick={() => {
          setRenderNotification((prev) => ({
            ...prev,
            message: prev.message ? "" : "Show",
          }));
        }}
      >
        toggle
      </button>
      <Notification
        id="notification-test"
        type={renderNotification?.type}
        message={renderNotification?.message}
        onClose={
          passOnClose
            ? () => {
                setRenderNotification((prev) => ({ ...prev, message: "" }));
              }
            : undefined
        }
      />
    </>
  );
};

test("Render with onClose", async () => {
  const { getByTestId, queryByTestId } = render(<Component passOnClose />);
  const toggleButton = getByTestId("btn-toggle");
  await userEvent.click(toggleButton);
  const notificationMessage = queryByTestId("txt-notification-message");
  expect(notificationMessage).toBeInTheDocument();
  const closeButton = getByTestId("notification-test-close-button");
  await userEvent.click(closeButton);
  expect(notificationMessage).not.toBeInTheDocument();
});

test("Render auto close", async () => {
  await act(async () => {
    const { getByTestId, queryByTestId } = render(<Component passOnClose />);
    const toggleButton = getByTestId("btn-toggle");
    await userEvent.click(toggleButton);
    const notificationMessage = queryByTestId("txt-notification-message");
    expect(notificationMessage).toBeInTheDocument();
    await new Promise((r) => setTimeout(r, 5500));
    expect(notificationMessage).not.toBeInTheDocument();
  });
});

test("Render without onClose", async () => {
  const { getByTestId, queryByTestId } = render(
    <Component passOnClose={false} />
  );
  const toggleButton = getByTestId("btn-toggle");
  await userEvent.click(toggleButton);
  const notificationMessage = queryByTestId("txt-notification-message");
  expect(notificationMessage).toBeInTheDocument();
  const closeButton = getByTestId("notification-test-close-button");
  await userEvent.click(closeButton);
  expect(notificationMessage).toBeInTheDocument();
});
