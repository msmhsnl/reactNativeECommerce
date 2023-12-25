import ProductCard from "./ProductCard";
import { render, fireEvent } from "@testing-library/react-native";

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

const productMock = {
  createdAt: "2023-07-17T02:49:46.692Z",
  name: "Aston Martin Durango",
  image: "https://loremflickr.com/640/480/food",
  price: "374.00",
  description:
    "Odio et voluptates velit omnis incidunt dolor. Illo sint quisquam tenetur dolore nemo molestiae. Dolorum odio dicta placeat. Commodi rerum molestias quibusdam labore. Odio libero doloribus. Architecto repellendus aperiam nulla at at voluptatibus ipsum.\nFugit expedita a quo totam quaerat amet eveniet laboriosam. Ad assumenda atque porro neque iusto. Inventore repudiandae esse non sit veritatis ab reprehenderit quas. Sit qui natus exercitationem quis commodi vero.\nIure reiciendis quas corrupti incidunt repellat voluptatem esse eveniet. Aliquid illo cum doloremque similique. Blanditiis corporis repellendus cumque totam quod iusto dolorum. Incidunt a eos eum voluptas tempora voluptas reiciendis autem.",
  model: "Roadster",
  brand: "Smart",
  id: "2",
};

describe("ProductCard", () => {
  it("rendered correctly", () => {
    const navigateToDetail = jest.fn();

    const { getByTestId, getByText } = render(
      <ProductCard item={productMock} navigateToDetail={navigateToDetail} />
    );

    const image = getByTestId("product-image");
    expect(image.props.source.uri).toEqual(productMock.image);

    expect(getByText(`${productMock.price} ₺`)).toBeTruthy();
    expect(getByText(productMock.name)).toBeTruthy();
  });

  it("navigateToDetail called with correct args", () => {
    const navigateToDetail = jest.fn();

    const { getByTestId } = render(
      <ProductCard item={productMock} navigateToDetail={navigateToDetail} />
    );

    const cartItem = getByTestId("product-item");

    fireEvent.press(cartItem);
    expect(navigateToDetail).toHaveBeenCalledWith(productMock.id);
  });

  it("addToCart button click calls func with correct args", () => {
    const addToCart = jest.fn();

    const { getByTestId } = render(
      <ProductCard item={productMock} addToCart={addToCart} />
    );

    const addToCartButton = getByTestId("addToCart-button");

    fireEvent.press(addToCartButton);
    expect(addToCart).toHaveBeenCalledWith(productMock);
  });
});
