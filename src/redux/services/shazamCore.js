import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: headers => {
      headers.set(
        'X-RapidAPI-Key',
        '67cafbe831mshdb06b5279ea2aaap114eaejsn11bfab44185a',
      );
      return headers;
    },
  }),
  endpoints: builder => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
