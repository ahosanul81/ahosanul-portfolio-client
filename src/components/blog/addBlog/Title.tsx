"use client";
import { blog } from "@/services/blog";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
type TitleProps = {
  setTitleAndDescription: React.Dispatch<
    React.SetStateAction<Inputs | undefined>
  >;
};
type Inputs = {
  title: string;
  categoryId: string;
  author: string;
  tags?: string;
  shortDescription?: string;
};
export default function Title({ setTitleAndDescription }: TitleProps) {
  const [categories, setCategories] =
    useState<{ _id: string; category: string }[]>();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    const categoryData = async () => {
      const categories = await blog.getAllBlogCategories();
      setCategories(categories.data);
    };
    categoryData();
  }, []);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setTitleAndDescription(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto space-y-5"
    >
      <h2 className="text-xl font-semibold text-white text-center">
        Write a blog
      </h2>
      {/* Athor name */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-gray-300">
          Author Name <span className="text-red-500">*</span>
        </label>
        <input
          {...register("author", { required: true })}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 
                 focus:ring-2 focus:ring-indigo-500 focus:outline-none 
                 text-gray-200 placeholder-gray-500"
          placeholder="Your name"
        />
        {errors.author && (
          <span className="text-red-400 text-sm">This field is required</span>
        )}
      </div>
      {/* Title */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-gray-300">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          {...register("title", { required: true })}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 
                 focus:ring-2 focus:ring-indigo-500 focus:outline-none 
                 text-gray-200 placeholder-gray-500"
          placeholder="Composable Caching with Next.js"
        />
        {errors.title && (
          <span className="text-red-400 text-sm">This field is required</span>
        )}
      </div>
      {/* Category */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-gray-300">
          Category <span className="text-red-500">*</span>
        </label>

        <select
          {...register("categoryId", { required: true })}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 
               focus:ring-2 focus:ring-indigo-500 focus:outline-none 
               text-gray-200"
          defaultValue=""
        >
          <option value="" disabled>
            -- Select Category --
          </option>
          {categories &&
            categories?.map((category) => (
              <option key={category._id} value={category._id}>
                {category.category}
              </option>
            ))}
        </select>

        {errors.categoryId && (
          <span className="text-red-400 text-sm">This field is required</span>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-gray-300">Tags</label>
        <input
          {...register("tags")}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 
                 focus:ring-2 focus:ring-indigo-500 focus:outline-none 
                 text-gray-200 placeholder-gray-500"
          placeholder="React, NextJs, NodeJs, MongoDB, PostgreSQL "
        />
        {errors.title && (
          <span className="text-red-400 text-sm">This field is required</span>
        )}
      </div>

      {/* Short Description */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-gray-300">Short Description</label>
        <textarea
          {...register("shortDescription")}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 
                 focus:ring-2 focus:ring-indigo-500 focus:outline-none 
                 text-gray-200 placeholder-gray-500 resize-none"
          placeholder="Write a short description..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 
               text-white font-medium transition duration-200"
      >
        Add
      </button>
    </form>
  );
}
