import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

interface getPostPhotoResponse {
  status: number;
  message: {
    status: number;
    message: null;
  };
}

interface deletePostPhotoResponse {
  status: number;
  message: string;
}

// getPostPhotosList и addPostPhoto бэкенд не поддерживает, сказал сам сенсей Гиес!!!
// getPostPhotosList и addPostPhoto бэкенд не поддерживает, сказал сам сенсей Гиес!!!
// getPostPhotosList и addPostPhoto бэкенд не поддерживает, сказал сам сенсей Гиес!!!

export const photosApi = createApi({
  reducerPath: "photosApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPostPhotosList: builder.query<any, string>({
      query: () => "/photo",
    }),
    getPostPhotoItem: builder.query<getPostPhotoResponse, number>({
      query: (photo_id: number) => `/photo?photo_id=${photo_id}`,
    }),
    addPostPhoto: builder.mutation<any, any>({
      query: (payload) => ({
        url: "/add-photo",
        method: "POST",
        body: payload,
        // TODO:
      }),
    }),
    deletePostPhoto: builder.mutation<deletePostPhotoResponse, number>({
      query: (photo_id: number) => ({
        url: `/photo/?photo_id=${photo_id}`,
        method: "DELETE",
      }),
    }),
  }),
});
