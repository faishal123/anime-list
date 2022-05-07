import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import threeDots from "src/assets/svg/threeDotsWhite.svg";
import Button from "./Button";

test("Test Button without onClick", async () => {
  const { getByTestId } = render(
    <>
      <Button text="button" id="btn-test" />
    </>
  );
  const button = getByTestId("btn-test");
  const buttonText = getByTestId("btn-test-text");

  await userEvent.click(button);
  expect(button).toBeInTheDocument();
  expect(buttonText).toBeInTheDocument();
});

test("Test Button with onClick", async () => {
  const mockClick = jest.fn();
  const { getByTestId } = render(
    <>
      <Button onClick={mockClick} text="button" id="btn-test" />
    </>
  );
  const button = getByTestId("btn-test");

  await userEvent.click(button);
  await userEvent.click(button);
  expect(mockClick).toHaveBeenCalledTimes(2);
});

test("Test Button without text", async () => {
  const mockClick = jest.fn();
  const { getByTestId, queryByTestId } = render(
    <>
      <Button onClick={mockClick} id="btn-test" />
    </>
  );
  const button = getByTestId("btn-test");
  const buttonText = queryByTestId("btn-test-text");
  expect(button).toBeInTheDocument();
  expect(buttonText).not.toBeInTheDocument();
});

test("Test Button Icon Only", () => {
  const { getByTestId } = render(
    <>
      <Button iconOnly={{ src: threeDots, alt: "action" }} id="btn-test" />
    </>
  );
  const icon = getByTestId("btn-test-icon");
  expect(icon).toBeInTheDocument();
});

test("Test Button Icon Only with src empty string", () => {
  const { queryByTestId } = render(
    <>
      <Button iconOnly={{ src: "", alt: "action" }} id="btn-test" />
    </>
  );
  const icon = queryByTestId("btn-test-icon");
  expect(icon).not.toBeInTheDocument();
});
