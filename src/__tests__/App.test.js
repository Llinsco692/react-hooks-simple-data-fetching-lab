import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"; // ✅ Import this for custom matchers like toBeInTheDocument
import App from "../App";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ message: "https://example.com/dog.jpg" }),
    })
  );
});

afterEach(() => {
  global.fetch.mockClear();
  delete global.fetch;
});

test("renders dog image", async () => {
  render(<App />);
  
  const img = await waitFor(() => screen.getByRole("img"));

  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src", "https://example.com/dog.jpg");
});
