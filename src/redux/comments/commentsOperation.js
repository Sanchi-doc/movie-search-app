import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const commentsApi = createApi({
    reducerPath: 'comments',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000',
        prepareHeaders: (headers, {getState}) => {
            const token = getState().auth.token 
            if(token){
                headers.set('authorization', `Bearer${token}`)
            } else {
                headers.delete('authorization')
            }
            return headers      
        }
    }),
    tagTypes: ['comments'],
    endpoints: builder => ({
        getComments: builder.query({
            query: (id) => ({
                method: 'GET',
                url: `/api/comments/${id}`
            }),
            providesTags: ['comments']
        }),
        addComments: builder.mutation({
            query: (body) => ({
                method: 'POST',
                url: `/api/comments`,
                body
            }),
            invalidatesTags: ['comments']
        }),
        deleteComments: builder.mutation({
            query: (id) => ({
                method: 'DELETE',
                url: `/api/comments/${id}`
            }),
            invalidatesTags: ['comments']
        })
    })
})
export const {useGetCommentsQuery, useAddCommentsMutation, useDeleteCommentsMutation} = commentsApi