import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ICurrency {
  id: string;
  name: string;
  min_size: string;
}

interface IData {
  data: ICurrency[];
}

export const currencyApi = createApi({
  reducerPath: "currencyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coinbase.com/v2/" }),
  endpoints: (builder) => ({
    getCurrency: builder.query<IData, void>({
      query: () => ({
        url: "currencies",
      }),
    }),
  }),
});

export const { useGetCurrencyQuery } = currencyApi;
