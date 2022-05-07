import { render } from "@testing-library/react";
import PageWrapper from "./PageWrapper";

test("Render", () => {
  const { getByTestId } = render(
    <PageWrapper id="pageWrapper">
      <div data-testid="content">content</div>
    </PageWrapper>
  );
  const pageWrapper = getByTestId("pageWrapper");
  expect(pageWrapper).toBeInTheDocument();
});
