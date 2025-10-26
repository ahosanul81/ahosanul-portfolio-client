import { TAddBlog } from "@/types/blog.";

/* eslint-disable @typescript-eslint/no-explicit-any */

/********** GET **************** */
const getAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    return result;
  } catch (error: any) {
    console.log(error);
    return Error(error);
  }
};
const getAllBlogCategories = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/categories`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await res.json();

    return result;
  } catch (error: any) {
    console.log(error);
    return Error(error);
  }
};
const getSingleBlog = async (blogId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/blog/${blogId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await res.json();

    return result;
  } catch (error: any) {
    console.log(error);
    return Error(error);
  }
};

const getAllBlogTitles = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/titles`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await res.json();

    return result;
  } catch (error: any) {
    console.log(error);
    return Error(error);
  }
};

/********** POST **************** */
const addBlog = async (content: TAddBlog) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/add-blog`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      }
    );

    const result = await res.json();

    return result;
  } catch (error: any) {
    console.log(error);
    return Error(error);
  }
};

const addBlogCategory = async (category: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/add-category`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category }),
      }
    );

    const result = await res.json();

    return result;
  } catch (error: any) {
    console.log(error);
    return Error(error);
  }
};

export const blog = {
  getAllBlogs,
  getAllBlogCategories,
  getSingleBlog,
  getAllBlogTitles,

  addBlog,
  addBlogCategory,
};
