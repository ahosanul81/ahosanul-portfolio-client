import { baseApi } from "@/redux/baseApi/baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdmin: builder.query({
      query: () => "/admin",
    }),
  }),
});

export const { useGetAdminQuery } = adminApi;
