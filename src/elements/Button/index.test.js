import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router } from "react-router-dom";

test("should not allow click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
  expect(container.querySelector("span.sr-only")).toBeInTheDocument();
});

test("should render <a> tag", () => {
  const { container } = render(
    <Button target="_blank" type="link" isExternal></Button>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
  expect(container.querySelector("a").getAttribute("target")).toEqual("_blank");
});

test("should render <Link> component", () => {
  const { container } = render(
    <Router>
      <Button href="/test" type="link"></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
  expect(container.querySelector("a").getAttribute("href")).toEqual("/test");
});
