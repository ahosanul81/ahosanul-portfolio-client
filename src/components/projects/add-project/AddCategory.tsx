import AhForm from "@/components/form/AhForm";
import AhInputs from "@/components/form/AhInputs";
import { project } from "@/services/project";
import React from "react";
import { FieldValues } from "react-hook-form";

export default function AddCategory() {
  const handleCategory = async (data: FieldValues) => {
    const categoryObj = { categoryName: data.categoryName };
    const category = await project.addCategory(categoryObj);
    console.log(category);
  };
  return (
    <div className=" mt-8 p-6 ">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 ">
        Add Category
      </h2>

      <AhForm onSubmit={handleCategory}>
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <AhInputs
            name="categoryName"
            type="text"
            placeholder="Enter category name"
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white rounded-md px-6 py-2 transition-colors duration-200"
          >
            Add
          </button>
        </div>
      </AhForm>
    </div>
  );
}
