import CartCounter from "./CartCounter";
import { render, fireEvent } from "@testing-library/react-native";

describe("CartCounter", () => {
  it("increment and decrement func calls", () => {
    const increment = jest.fn();
    const decrement = jest.fn();

    const { getByTestId } = render(
      <CartCounter count={5} increment={increment} decrement={decrement} />
    );

    const incrementButton = getByTestId("increment");
    const decrementButton = getByTestId("decrement");

    fireEvent.press(incrementButton);
    expect(increment).toHaveBeenCalled();

    fireEvent.press(decrementButton);
    expect(decrement).toHaveBeenCalled();
  });

  it("count render", () => {
    const increment = jest.fn();
    const decrement = jest.fn();

    const { getByText } = render(
      <CartCounter count={5} increment={increment} decrement={decrement} />
    );

    expect(getByText("5")).toBeTruthy();
  });
});
