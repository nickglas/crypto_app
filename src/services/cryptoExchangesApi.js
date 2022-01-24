import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://api.coingecko.com/api/v3'

const createRequest = (url) => ({url})

export const cryptoExchangesApi = createApi({
  reducerPath: 'cryptoExchangesApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getCryptoExchanges: builder.query({
      query: (count) => createRequest(`/exchanges?per_page=${count}`)
    })
  })
})

export const{
  useGetCryptoExchangesQuery,
} = cryptoExchangesApi