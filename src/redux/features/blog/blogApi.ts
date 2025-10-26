import { baseApi } from "@/redux/baseApi/baseApi";

export const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => "/blogs",
    }),
    getSingleBlog: builder.query({
      query: (blogId) => `/blogs/${blogId}`,
    }),
    addBlog: builder.query({
      query: () => `/blogs/add-blog`,
    }),
  }),
});

export const { useGetAllBlogsQuery, useGetSingleBlogQuery } = projectApi;
