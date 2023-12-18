import axios from "axios";

import type { Product } from "../types/product";

const mockapiKey = process.env.EXPO_PUBLIC_MOCKAPI_KEY;

async function getProductById(
  dataSetterCallback: (data: Product) => void,
  id: string
) {
  try {
    const url = new URL(`https://${mockapiKey}.mockapi.io/products`);
    url.searchParams.append("id", id);

    const { data, status } = await axios.get<Product[]>(url.toString(), {
      headers: {
        Accept: "application/json",
      },
    });

    console.log(JSON.stringify(data, null, 4));
    console.log("response status is: ", status);

    dataSetterCallback(data?.[0]);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

export default getProductById;
