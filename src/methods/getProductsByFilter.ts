import axios from "axios";

import type { Product } from "../types/product";

const mockapiKey = process.env.EXPO_PUBLIC_MOCKAPI_KEY;

async function getProductsByFilter(
  dataSetterCallback: (data: Product[]) => void,
  page: number,
  filters: any
) {
  try {
    const url = new URL(`https://${mockapiKey}.mockapi.io/products`);
    url.searchParams.append("page", page.toString());
    url.searchParams.append("limit", "12");

    const { data, status } = await axios.get<Product[]>(url.toString(), {
      headers: {
        Accept: "application/json",
      },
    });

    console.log(JSON.stringify(data, null, 4));
    console.log("response status is: ", status);

    dataSetterCallback(data);
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

export default getProductsByFilter;
