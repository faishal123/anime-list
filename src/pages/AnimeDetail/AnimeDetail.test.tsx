import { render, act } from "@testing-library/react";
import { SingleAnimeMock, beforeEachFunction } from "./mock";
import userEvent from "@testing-library/user-event";
import singletonRouter from "next/router";
import { MockedProvider } from "@apollo/client/testing";
import { waitProcessWithoutAct } from "src/functions/testUtil";
import AnimeDetail from "./AnimeDetail";

import mockRouter from "next-router-mock";
jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("Render wihtout animeId", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });
  test("Render", () => {
    render(
      <MockedProvider mocks={[SingleAnimeMock({})]}>
        <AnimeDetail />
      </MockedProvider>
    );
    expect(singletonRouter.asPath).toBe("/?page=1");
  });
});

describe("Render with animeId", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/anime?id=11061");
    beforeEachFunction();
  });
  test("Render Desktop", async () => {
    await act(async () => {
      const { getByTestId } = render(
        <MockedProvider mocks={[SingleAnimeMock({})]}>
          <AnimeDetail />
        </MockedProvider>
      );
      await waitProcessWithoutAct(10);
      const title = getByTestId("txt-title-11061");
      expect(title).toHaveTextContent("Hunter x Hunter (2011)");
      const summaryOpen = getByTestId("collapse-Summary-isOpen-true");
      expect(summaryOpen).toBeInTheDocument();
      const collapsibleContainer = getByTestId("collapsible-toggle-Summary");
      await userEvent.click(collapsibleContainer);
      const summaryClosed = getByTestId("collapse-Summary-isOpen-false");
      expect(summaryClosed).toBeInTheDocument();
      const collectionC1 = getByTestId("txt-collection-11061-c1");
      const collectionC2 = getByTestId("txt-collection-11061-c2");
      const collectionC3 = getByTestId("txt-collection-11061-c3");
      const collectionC4 = getByTestId("txt-collection-11061-c4");
      const collectionC5 = getByTestId("txt-collection-11061-c5");
      expect(collectionC1).toBeInTheDocument();
      expect(collectionC2).toBeInTheDocument();
      expect(collectionC3).toBeInTheDocument();
      expect(collectionC4).toBeInTheDocument();
      expect(collectionC5).toBeInTheDocument();
      const addToCollectionButton = getByTestId("btn-addToCollection-11061");
      await userEvent.click(addToCollectionButton);
      const collectionC1AlreadyIn = getByTestId("txt-title-alreadyIn-c1");
      const collectionC2AlreadyIn = getByTestId("txt-title-alreadyIn-c2");
      const collectionC3AlreadyIn = getByTestId("txt-title-alreadyIn-c3");
      const collectionC4AlreadyIn = getByTestId("txt-title-alreadyIn-c4");
      const collectionC5AlreadyIn = getByTestId("txt-title-alreadyIn-c5");
      expect(collectionC1AlreadyIn).toBeInTheDocument();
      expect(collectionC2AlreadyIn).toBeInTheDocument();
      expect(collectionC3AlreadyIn).toBeInTheDocument();
      expect(collectionC4AlreadyIn).toBeInTheDocument();
      expect(collectionC5AlreadyIn).toBeInTheDocument();
      const addNewCollectionButton = getByTestId("btn-submit-11061");
      expect(addNewCollectionButton).toHaveTextContent("Add New Collection");
      await userEvent.click(addNewCollectionButton);
      const inputNewCollection = getByTestId("txt-inputNewCollectionName");
      expect(inputNewCollection).toBeInTheDocument();
      await userEvent.type(inputNewCollection, "newCollection");
      const addCollectionButton = getByTestId("txt-add");
      await userEvent.click(addCollectionButton);
      const newCollectionChoice = getByTestId("txt-title-newCollection");
      expect(newCollectionChoice).toBeInTheDocument();
      await userEvent.click(newCollectionChoice);
      const submitButton = getByTestId("btn-submit-11061");
      expect(submitButton).toHaveTextContent("Save");
      await userEvent.click(submitButton);
      const notificationSuccess = getByTestId(
        "notification-11061-type-success"
      );
      expect(notificationSuccess).toBeInTheDocument();
    });
  });

  test("Exit collection modal", async () => {
    await act(async () => {
      const { getByTestId, queryByTestId } = render(
        <MockedProvider mocks={[SingleAnimeMock({})]}>
          <AnimeDetail />
        </MockedProvider>
      );
      await waitProcessWithoutAct(10);
      const title = getByTestId("txt-title-11061");
      expect(title).toHaveTextContent("Hunter x Hunter (2011)");
      const watchTrailer = queryByTestId("btn-watchTrailerButton-11061");
      expect(watchTrailer).toBeInTheDocument();
      const summaryOpen = getByTestId("collapse-Summary-isOpen-true");
      expect(summaryOpen).toBeInTheDocument();
      const collapsibleContainer = getByTestId("collapsible-toggle-Summary");
      await userEvent.click(collapsibleContainer);
      const summaryClosed = getByTestId("collapse-Summary-isOpen-false");
      expect(summaryClosed).toBeInTheDocument();
      const collectionC1 = getByTestId("txt-collection-11061-c1");
      const collectionC2 = getByTestId("txt-collection-11061-c2");
      const collectionC3 = getByTestId("txt-collection-11061-c3");
      const collectionC4 = getByTestId("txt-collection-11061-c4");
      const collectionC5 = getByTestId("txt-collection-11061-c5");
      expect(collectionC1).toBeInTheDocument();
      expect(collectionC2).toBeInTheDocument();
      expect(collectionC3).toBeInTheDocument();
      expect(collectionC4).toBeInTheDocument();
      expect(collectionC5).toBeInTheDocument();
      const addToCollectionButton = getByTestId("btn-addToCollection-11061");
      await userEvent.click(addToCollectionButton);
      const addToCollectionTitle = queryByTestId(
        "txt-addToCollection-title-11061"
      );
      expect(addToCollectionTitle).toBeInTheDocument();

      const addNewCollectionButton = getByTestId("btn-submit-11061");
      await userEvent.click(addNewCollectionButton);
      const cancelButton = getByTestId("txt-cancel");
      await userEvent.click(cancelButton);

      const modalCollectionCloseArea = getByTestId(
        "modal-addToCollection-11061-container"
      );
      await userEvent.click(modalCollectionCloseArea);
      expect(addToCollectionTitle).not.toBeInTheDocument();
    });
  });

  test("Render Error Response", async () => {
    await act(async () => {
      const { queryByTestId } = render(
        <MockedProvider mocks={[SingleAnimeMock({ responseType: "error" })]}>
          <AnimeDetail />
        </MockedProvider>
      );
      await waitProcessWithoutAct(10);
      const notification = queryByTestId("notification-11061-type-error");
      expect(notification).toBeInTheDocument();
      await waitProcessWithoutAct(5500);
      expect(notification).not.toBeInTheDocument();
    });
  });

  test("Render No Trailer", async () => {
    await act(async () => {
      const { queryByTestId } = render(
        <MockedProvider mocks={[SingleAnimeMock({ responseType: "error" })]}>
          <AnimeDetail />
        </MockedProvider>
      );
      await waitProcessWithoutAct(10);
      const watchTrailer = queryByTestId("btn-watchTrailerButton-11061");
      expect(watchTrailer).not.toBeInTheDocument();
    });
  });

  test("Render Mobile", async () => {
    await act(async () => {
      global.innerWidth = 400;
      const { getByTestId } = render(
        <MockedProvider mocks={[SingleAnimeMock({})]}>
          <AnimeDetail />
        </MockedProvider>
      );
      await waitProcessWithoutAct(10);
      const title = getByTestId("txt-title-11061");
      expect(title).toHaveTextContent("Hunter x Hunter (2011)");
      const summaryOpen = getByTestId("collapse-Summary-isOpen-false");
      expect(summaryOpen).toBeInTheDocument();
      const collapsibleContainer = getByTestId("collapsible-toggle-Summary");
      await userEvent.click(collapsibleContainer);
      const summaryClosed = getByTestId("collapse-Summary-isOpen-true");
      expect(summaryClosed).toBeInTheDocument();
      const collectionC1 = getByTestId("txt-collection-11061-c1");
      const collectionC2 = getByTestId("txt-collection-11061-c2");
      const collectionC3 = getByTestId("txt-collection-11061-c3");
      const collectionC4 = getByTestId("txt-collection-11061-c4");
      const collectionC5 = getByTestId("txt-collection-11061-c5");
      expect(collectionC1).toBeInTheDocument();
      expect(collectionC2).toBeInTheDocument();
      expect(collectionC3).toBeInTheDocument();
      expect(collectionC4).toBeInTheDocument();
      expect(collectionC5).toBeInTheDocument();
      const addToCollectionButton = getByTestId("btn-addToCollection-11061");
      await userEvent.click(addToCollectionButton);
      const collectionC1AlreadyIn = getByTestId("txt-title-alreadyIn-c1");
      const collectionC2AlreadyIn = getByTestId("txt-title-alreadyIn-c2");
      const collectionC3AlreadyIn = getByTestId("txt-title-alreadyIn-c3");
      const collectionC4AlreadyIn = getByTestId("txt-title-alreadyIn-c4");
      const collectionC5AlreadyIn = getByTestId("txt-title-alreadyIn-c5");
      expect(collectionC1AlreadyIn).toBeInTheDocument();
      expect(collectionC2AlreadyIn).toBeInTheDocument();
      expect(collectionC3AlreadyIn).toBeInTheDocument();
      expect(collectionC4AlreadyIn).toBeInTheDocument();
      expect(collectionC5AlreadyIn).toBeInTheDocument();
      const addNewCollectionButton = getByTestId("btn-submit-11061");
      expect(addNewCollectionButton).toHaveTextContent("Add New Collection");
      await userEvent.click(addNewCollectionButton);
      const inputNewCollection = getByTestId("txt-inputNewCollectionName");
      expect(inputNewCollection).toBeInTheDocument();
      await userEvent.type(inputNewCollection, "newCollection");
      const addCollectionButton = getByTestId("txt-add");
      await userEvent.click(addCollectionButton);
      const newCollectionChoice = getByTestId("txt-title-newCollection");
      expect(newCollectionChoice).toBeInTheDocument();
    });
  });
});
