import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Form from "./Form";
import { expect, test, afterEach } from "vitest";
import { userEvent } from "@testing-library/user-event";

afterEach(() => {
  cleanup();
});

test("render the personal info form", async () => {
  const user = userEvent.setup();

  render(<Form />);

  const nameInput = screen.getByLabelText("Name");
  const emailInput = screen.getByLabelText("Email");
  const phoneNumber = screen.getByLabelText("Phone Number");
  const button = screen.getByRole("button", { name: "Next Step" });

  await user.type(nameInput, "Duck");

  await user.type(emailInput, "duck@email.com");

  await user.type(phoneNumber, "123456789");

  expect(nameInput).toHaveValue("Duck");

  expect(emailInput).toHaveValue("duck@email.com");

  expect(phoneNumber).toHaveValue("123456789");

  await user.click(button);

  expect(screen.getByText(/select your plan/i)).toBeInTheDocument();
});

test("shows errors with invalid personal info", async () => {
  const user = userEvent.setup();

  render(<Form />);

  const button = screen.getByRole("button", { name: "Next Step" });

  await user.click(button);

  const errors = screen.getAllByText("This field is required");

  expect(errors).toHaveLength(3);
});
