import { baseApi } from "@/redux/baseApi/baseApi";

export const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => "/projects",
    }),
    getSingleProjectDetalail: builder.query({
      query: (id) => `/projects/${id}`,
    }),
  }),
});

export const { useGetAllProjectsQuery } = projectApi;
