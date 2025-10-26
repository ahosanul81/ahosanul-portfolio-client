"use client";

import { project } from "@/services/project";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
type AddProjectInfoProps = {
  setAddProjectInfo: React.Dispatch<
    React.SetStateAction<addProjectInfoInputs | undefined>
  >;
};
export type addProjectInfoInputs = {
  title: string;
  coverImage: File;
  shortDescription: string;
  technologies: string;
  categoryId: string;
  liveLink: string;
};
export default function AddProjectInfo({
  setAddProjectInfo,
}: AddProjectInfoProps) {
  const [categories, setCategories] =
    useState<{ _id: string; categoryName: string }[]>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<addProjectInfoInputs>();

  useEffect(() => {
    const data = async () => {
      const categories = await project.getAllCategory();
      setCategories(categories.data);
    };
    data();
  }, []);

  const onSubmit: SubmitHandler<addProjectInfoInputs> = (data) => {
    setAddProjectInfo(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto space-y-5"
    >
      <h2 className="text-xl font-semibold text-white text-center">
        Project Info
      </h2>
      {/* title */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-gray-300">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          {...register("title", { required: true })}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 
                 focus:ring-2 focus:ring-indigo-500 focus:outline-none 
                 text-gray-200 placeholder-gray-500"
          placeholder="Your name"
        />
        {errors.title && (
          <span className="text-red-400 text-sm">This field is required</span>
        )}
      </div>
      {/* file */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-gray-300">
          Cover Image <span className="text-red-500">*</span>
        </label>
        <input
          type="file"
          {...register("coverImage", { required: true })}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 
                 focus:ring-2 focus:ring-indigo-500 focus:outline-none 
                 text-gray-200 placeholder-gray-500"
          placeholder="Your name"
        />
        {errors.coverImage && (
          <span className="text-red-400 text-sm">This field is required</span>
        )}
      </div>

      {/* Category */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-gray-300">Category</label>

        <select
          {...register("categoryId")}
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
                {category.categoryName}
              </option>
            ))}
        </select>

        {errors.categoryId && (
          <span className="text-red-400 text-sm">This field is required</span>
        )}
      </div>

      {/* technologies */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-gray-300">Tags</label>
        <input
          {...register("technologies")}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 
                 focus:ring-2 focus:ring-indigo-500 focus:outline-none 
                 text-gray-200 placeholder-gray-500"
          placeholder="React, NextJs, NodeJs.... "
        />
        {errors.technologies && (
          <span className="text-red-400 text-sm">This field is required</span>
        )}
      </div>
      {/* livelink */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-gray-300">
          live Link <span className="text-red-500">*</span>
        </label>
        <input
          {...register("liveLink", { required: true })}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 
                 focus:ring-2 focus:ring-indigo-500 focus:outline-none 
                 text-gray-200 placeholder-gray-500"
          placeholder="Your name"
        />
        {errors.liveLink && (
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
