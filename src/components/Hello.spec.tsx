import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";

it("HelloWorldのレンダー", () => {
  render(<Hello />);
  const el = screen.getByText(/hello/);

  expect(el).toBeInTheDocument();
});
