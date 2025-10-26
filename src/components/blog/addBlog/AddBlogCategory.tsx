import { blog } from "@/services/blog";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
// type AddBlogCategoryProps = {
//   setCategoryId: React.Dispatch<React.SetStateAction<Inputs | undefined>>;
// };
type Inputs = {
  category: string;
};
export default function AddBlogCategory() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const category = await blog.addBlogCategory(data.category);
    console.log(category);
  };
  return (
    <div className="mb-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center space-x-4 space-y-2">
          <label className="text-sm text-gray-300">
            Blog Category<span className="text-red-500">*</span>
          </label>
          <input
            {...register("category", { required: true })}
            className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 
                 focus:ring-2 focus:ring-indigo-500 focus:outline-none 
                 text-gray-200 placeholder-gray-500"
            placeholder="Write category name"
          />
          {errors.category && (
            <span className="text-red-400 text-sm">This field is required</span>
          )}
          <button
            type="submit"
            className="px-8 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 
               text-white font-medium transition duration-200"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
