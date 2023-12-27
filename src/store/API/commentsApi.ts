import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

interface getPostCommentsResponse {
  status: number;
  message: [];
}

interface addPostCommentsPayload {
  post_id: number;
  user_id: number;
  text: string;
}

interface addCommentToPostResponse {
  status: number;
  message: string;
}

interface editToPostCommentPayload {
  comment_id: number;
  new_comment_text: string;
}

interface editCommentToPostResponse {
  status: number;
  message: string;
}

interface deleteCommentToPostResponse {
  status: number;
  message: string;
}

export const commentApi = createApi({
  reducerPath: "commentaApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPostComments: builder.query<getPostCommentsResponse, number>({
      query: (postId: number) => `/comment?post_id=${postId}`,
    }),
    addCommentToPost: builder.mutation<
      addCommentToPostResponse,
      addPostCommentsPayload
    >({
      query: (payload) => ({
        url: "/comment",
        method: "POST",
        body: payload,
      }),
    }),
    editCommentToPost: builder.mutation<
      editCommentToPostResponse,
      editToPostCommentPayload
    >({
      query: (payload) => ({
        url: "/comment",
        method: "PUT",
        body: payload,
      }),
    }),
    deletePostComment: builder.mutation<deleteCommentToPostResponse, number>({
      query: (comment_id: number) => ({
        url: `/post/?post_id=${comment_id}`,
        method: "DELETE",
      }),
    }),
  }),
});
