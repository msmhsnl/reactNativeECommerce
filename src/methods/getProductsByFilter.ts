import axios from "axios";

import type { Product } from "../types/Product";

const mockapiKey = process.env.EXPO_PUBLIC_MOCKAPI_KEY;

const removeUndefinedAttributes = (obj: object) =>
  Object.entries(obj).reduce((r, [k, v]) => {
    if (v === "" || v === null || v === undefined) return r;
    else r[k] = v;

    return r;
  }, {});

const filterSearchParamsConverter = async (filterObj: any) => {
  const currentFilterObj = removeUndefinedAttributes(filterObj);
  let params = new URLSearchParams(currentFilterObj);

  if (params?._searchParams?.length > 0) {
    return `&${params.toString()}`;
  } else {
    return null;
  }
  // {
  //   name:'value',//search
  //   sortBy:'price',//
  //   order:'asc'//asc-desc
  // }
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

    const convertedFilter = await filterSearchParamsConverter(filters);
    managedURL = convertedFilter
      ? `${managedURL}${convertedFilter}`
      : managedURL;

    const { data, status } = await axios.get<Product[]>(managedURL, {
      headers: {
        Accept: "application/json",
      },
    });

    // console.log(JSON.stringify(data, null, 4));
    // console.log("response status is: ", status);

    dataSetterCallback(data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // console.log("error message: ", error.message);
      return error.message;
    } else {
      // console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

export default getProductsByFilter;
