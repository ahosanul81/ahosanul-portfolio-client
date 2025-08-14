/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/baseApi/baseApi";

export const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query<any, void>({
      query: () => "/projects",
    }),
    getSingleProjectDetail: builder.query<any, string>({
      query: (id) => `/projects/${id}`,
    }),
  }),
});

// Hooks (optional, for client components)
export const { useGetAllProjectsQuery, useGetSingleProjectDetailQuery } =
  projectApi;
