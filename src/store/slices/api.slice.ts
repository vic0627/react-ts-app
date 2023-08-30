import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    todos: builder.query({ query: () => "/todos" }),
    addTodo: builder.mutation({
      query: (initialTodo) => ({
        url: "/todos",
        method: "POST",
        body: initialTodo
      })
    })
  })
});

export const { useTodosQuery, useAddTodoMutation } = apiSlice;
