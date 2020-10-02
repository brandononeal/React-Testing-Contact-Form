import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("ContactForm Tests", () => {
  test("ContactForm renders without errors", () => {
    render(<ContactForm />);
  });

  test("User can fill out and submit form", async () => {
    render(<ContactForm />);

    // Arrange
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole(/button/i);

    // Act
    fireEvent.change(firstNameInput, {
      target: { name: "firstName", value: "Brandon" },
    });
    fireEvent.change(lastNameInput, {
      target: { name: "lastName", value: "O'Neal" },
    });
    fireEvent.change(emailInput, {
      target: { name: "email", value: "baoneal95@gmail.com" },
    });
    fireEvent.change(messageInput, {
      target: { name: "message", value: "This is a message" },
    });
    fireEvent.click(submitButton);

    // Assert
    await screen.findByText(/brandon/i);
  });
});
