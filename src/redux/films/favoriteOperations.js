import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const favoritesApi = createApi({
    reducerPath: 'favorites',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000',
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
    tagTypes: ['favorites'],
    endpoints: builder => ({
        getFavorites: builder.query({
            query: ({page, limit}) => ({
                method: 'GET',
                url: `/api/film?page=${page}&limit=${limit}`,
            }),
            providesTags: ['favorites']
        }),
        addFavorites: builder.mutation({
            query: (body) => ({
                method: 'POST',
                url: `/api/film`,
                body
            }),
            invalidatesTags: ['favorites']
        }),
        deleteFavorites: builder.mutation({
            query: (id) => ({
                method: 'DELETE',
                url:  `/api/film/${id}`
            }),
            invalidatesTags: ['favorites']
        })
    }) 
})
export const {useGetFavoritesQuery, useAddFavoritesMutation, useDeleteFavoritesMutation} = favoritesApi