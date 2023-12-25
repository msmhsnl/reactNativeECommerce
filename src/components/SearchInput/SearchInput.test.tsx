import SearchInput from "./SearchInput";
import { render, fireEvent } from "@testing-library/react-native";

describe("SearchInput", () => {
  it("button func called with correct args", () => {
    const search = jest.fn();

    const { getByTestId } = render(
      <SearchInput search={search} placeholder="placeholder" />
    );

    const searchButton = getByTestId("search-button");
    const input = getByTestId("search-input");
    fireEvent.changeText(input, "123");

    fireEvent.press(searchButton);

    expect(search).toHaveBeenCalledWith("123");
  });

  it("should apply the value when changing text", () => {
    const search = jest.fn();

    const { getByTestId } = render(
      <SearchInput search={search} placeholder="placeholder" />
    );

    const input = getByTestId("search-input");
    fireEvent.changeText(input, "123");
    expect(input.props.value).toBe("123");
  });
});
