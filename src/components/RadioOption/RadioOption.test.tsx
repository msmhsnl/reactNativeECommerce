import RadioOption from "./RadioOption";
import { render, fireEvent } from "@testing-library/react-native";

describe("RadioOption", () => {
  it("onPress func called", () => {
    const func = jest.fn();

    const { getByTestId } = render(
      <RadioOption onPress={func} title="testTitle" active={true} />
    );

    const radioOption = getByTestId("radio-option");

    fireEvent.press(radioOption);
    expect(func).toHaveBeenCalled();
  });

  it("rendered correctly", () => {
    const func = jest.fn();

    const { getByText } = render(
      <RadioOption onPress={func} title="testTitle" active={true} />
    );

    expect(getByText("testTitle")).toBeTruthy();
  });
});
