import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Async } from ".";

test("its renders correctly", async () => {
  render(<Async />);

  expect(screen.getByText("Hello world")).toBeInTheDocument();
  expect(await screen.findByText("Button")).toBeInTheDocument();

  await waitForElementToBeRemoved(screen.queryByText("button"));

  await waitFor(() => {
    return expect(screen.queryByText("Button")).not.toBeInTheDocument(); // waitfor tb executa de forma assincrona igual acima
  });
});
