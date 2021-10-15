import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders ={
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': 'bfc5f7c27fmsh762414e9a380be9p1f43dcjsn5ee6f8e77c17'
      
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi;