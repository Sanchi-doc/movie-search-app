import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const filmsApi = createApi({
    reducerPath: 'films',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org',
        prepareHeaders: (headers, {getState}) => {
          const token = getState().auth.token
          if (token){
            headers.set('authorization', `Bearer ${token}`)
          } else {
            headers.delete('authorization')
          }
          return headers 
        }
    }),
    tagTypes: ['films'],
    endpoints: builder => ({
    getPopularMovie: builder.query({
      query: (page) => {
        const searchParams = new URLSearchParams({
          api_key: '3b597bca23ceb7f8807c56bd094cb646',
          page
        })   
        return  {
          method: 'GET',
          url: `/3/trending/movie/week?${searchParams}`
        }},
        providesTags: ['films']
      }),
      getMovieByID: builder.query({
        query: (id) => {
          const searchParams = new URLSearchParams({
            api_key: '3b597bca23ceb7f8807c56bd094cb646',
          })
          return{
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${id}?${searchParams}`
          }},
          providesTags:['films']
      }),
      getCastByID: builder.query({
        query: (id) => {
          const searchParams = new URLSearchParams({
            api_key: '3b597bca23ceb7f8807c56bd094cb646',
          })
          return {
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${id}/credits?${searchParams}`
          }},
          providesTags:['films']
      }),
      getReviewByID: builder.query({
        query: (id) => {
          const searchParams = new URLSearchParams({
            api_key: '3b597bca23ceb7f8807c56bd094cb646',
          })
          return {
           method: 'GET',
           url: `https://api.themoviedb.org/3/movie/${id}/reviews?${searchParams}`
          }},
          providesTags:['films']
      }),
      getReviewVideoByID: builder.query({
        query: (id) => {
          const searchParams = new URLSearchParams({
            api_key: '3b597bca23ceb7f8807c56bd094cb646',
          })
          return {
           method: 'GET',
           url: `https://api.themoviedb.org/3/movie/${id}/videos?${searchParams}`
          }},
          providesTags:['films']
      }),
      getByName: builder.query({
        query: ({name, page}) => {
          const searchParams = new URLSearchParams({
          api_key: '3b597bca23ceb7f8807c56bd094cb646',
          language: 'en-US',
          page: page,
          include_adult: false,
          query: `${name}`,
        });
        return{
          method: 'GET',
          url: `https://api.themoviedb.org/3/search/movie?${searchParams}`
        }},
        providesTags: ['films']
      })
    })
})
export const {useGetPopularMovieQuery, useGetMovieByIDQuery, useGetCastByIDQuery, useGetReviewByIDQuery, useGetReviewVideoByIDQuery, useLazyGetByNameQuery} = filmsApi
