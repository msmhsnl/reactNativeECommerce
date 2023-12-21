import axios from "axios";

import type { Product } from "../types/product";

const mockapiKey = process.env.EXPO_PUBLIC_MOCKAPI_KEY;

const filterSearchParamsConverter = (filterObj: any) => {
  // {
  //   name:'value',//search
  //   sortBy:'price',//
  //   order:'asc'//asc-desc
  // }
  if (filterObj) {
    let params = new URLSearchParams(filterObj);
    let keysForDel: Array<string> = [];
    params.forEach((value, key) => {
      if (value == "" || value == null || value == undefined) {
        keysForDel.push(key);
      }
    });

    keysForDel.forEach((key) => {
      params.delete(key);
    });

    if (params?.size > 0) {
      return `&${params.toString()}`;
    } else {
      return null;
    }
  }
};

async function getProductsByFilter(
  dataSetterCallback: (data: Product[]) => void,
  page: number,
  filters: any = null
  //resetpagecallback
) {
  try {
    const url = new URL(`https://${mockapiKey}.mockapi.io/products`);
    url.searchParams.append("page", page.toString());
    url.searchParams.append("limit", "12");

    let managedURL = url.toString();

    const convertedFilter = filterSearchParamsConverter(filters);
    managedURL = convertedFilter
      ? `${managedURL}&${convertedFilter}`
      : managedURL;

    const { data, status } = await axios.get<Product[]>(managedURL, {
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
