import CartProductItem from "./CartProductItem";
import { render, fireEvent } from "@testing-library/react-native";

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

const dataMock = {
  product: {
    createdAt: "2023-07-17T02:49:46.692Z",
    name: "Aston Martin Durango",
    image: "https://loremflickr.com/640/480/food",
    price: "374.00",
    description:
      "Odio et voluptates velit omnis incidunt dolor. Illo sint quisquam tenetur dolore nemo molestiae. Dolorum odio dicta placeat. Commodi rerum molestias quibusdam labore. Odio libero doloribus. Architecto repellendus aperiam nulla at at voluptatibus ipsum.\nFugit expedita a quo totam quaerat amet eveniet laboriosam. Ad assumenda atque porro neque iusto. Inventore repudiandae esse non sit veritatis ab reprehenderit quas. Sit qui natus exercitationem quis commodi vero.\nIure reiciendis quas corrupti incidunt repellat voluptatem esse eveniet. Aliquid illo cum doloremque similique. Blanditiis corporis repellendus cumque totam quod iusto dolorum. Incidunt a eos eum voluptas tempora voluptas reiciendis autem.",
    model: "Roadster",
    brand: "Smart",
    id: "2",
  },
  quantity: 8,
};

describe("CartProductItem", () => {
  it("rendered correctly", () => {
    const navigateToDetail = jest.fn();

    const { getByTestId, getByText } = render(
      <CartProductItem data={dataMock} navigateToDetail={navigateToDetail} />
    );

    const image = getByTestId("cart-item-image");
    expect(image.props.source.uri).toEqual(dataMock.product.image);

    expect(getByText(`${dataMock.product.price} ₺`)).toBeTruthy();
    expect(getByText(dataMock.product.name)).toBeTruthy();
    expect(getByText("8")).toBeTruthy();
  });

  it("navigateToDetail called with correct args", () => {
    const navigateToDetail = jest.fn();

    const { getByTestId } = render(
      <CartProductItem data={dataMock} navigateToDetail={navigateToDetail} />
    );

    const cartItem = getByTestId("cart-item");

    fireEvent.press(cartItem);
    expect(navigateToDetail).toHaveBeenCalledWith(dataMock.product.id);
  });
});
