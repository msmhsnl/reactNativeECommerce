import ProductCardList from "./ProductCardList";
import { render } from "@testing-library/react-native";

describe("ProductCardList", () => {
  it("rendered correctly", () => {
    const getNextPageProducts = jest.fn();
    const navigateToDetail = jest.fn();
    const addToCart = jest.fn();

    const { getByTestId } = render(
      <ProductCardList
        data={[]}
        getNextPageProducts={getNextPageProducts}
        navigateToDetail={navigateToDetail}
        addToCart={addToCart}
      />
    );

    const component = getByTestId("product-card-list");
    expect(component).toBeTruthy();
  });
});
