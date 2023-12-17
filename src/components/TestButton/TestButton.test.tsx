import TestButton from "./TestButton";
import { render, fireEvent } from "@testing-library/react-native";

describe("MyButton", () => {
  it("MyButton onPress", () => {
    const mockOnPress = jest.fn();

    const { getByTestId } = render(<TestButton onPress={mockOnPress} />);
    const pressMeButton = getByTestId("TestButton");
    fireEvent.press(pressMeButton);

    expect(mockOnPress).toHaveBeenCalled();
  });
});
