import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.REACT_APP_API_URL;

export const factsApi = createApi({
  reducerPath: "factsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getFacts: builder.query({
      query: () => "/api/v1",
    }),
    getAnimeFacts: builder.query({
      query: (animeName) => `/api/v1/${animeName}`,
    }),
    getSpecificFact: builder.query({
      query: ({ animeName, factId }) => `/api/v1/${animeName}/${factId}`,
    }),
  }),
});

export const {
  useGetFactsQuery,
  useGetAnimeFactsQuery,
  useGetSpecificFactQuery,
} = factsApi;
