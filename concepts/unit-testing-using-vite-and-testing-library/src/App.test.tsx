import { describe, expect, test } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  test("should render input field and add button", () => {
    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });
    const button = screen.getByRole("button", { name: "Add" });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  //   This test is somewhat ok but will create
  //   issues since if we make input as readOnly then also this test will pass
  //   hence use @testing-library/user-event
  test("should add task to list when add button is clicked using fireEvent", () => {
    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });
    const button = screen.getByRole("button", { name: "Add" });

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("should add task to list when add button is clicked using userEvent", async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });
    const button = screen.getByRole("button", { name: "Add" });

    await user.type(input, "New Task");
    await user.click(button);

    await waitFor(() => {
      expect(screen.getByText("New Task")).toBeInTheDocument();
    });
  });

  test("should clear the input field after adding a task", async () => {
    const user = userEvent.setup();

    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });
    const button = screen.getByRole("button", { name: "Add" });

    await user.type(input, "New Task");
    await user.click(button);

    await waitFor(() => {
      expect(input).toHaveValue("");
    });
  });

  test("should not add an empty task", async () => {
    const user = userEvent.setup();

    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });
    const button = screen.getByRole("button", { name: "Add" });

    await user.type(input, "    ");
    await user.click(button);

    await waitFor(() => {
      expect(screen.queryAllByRole("listitem")).toHaveLength(0);
    });
  });

  test("should add a task by pressing the enter key", async () => {
    const user = userEvent.setup();

    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });

    await user.type(input, "New Task{enter}");
    await waitFor(() => {
      expect(screen.queryAllByRole("listitem")).toHaveLength(1);
    });
  });
});
