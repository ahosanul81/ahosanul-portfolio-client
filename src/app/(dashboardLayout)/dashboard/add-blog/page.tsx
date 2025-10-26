/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import AddBlogCategory from "@/components/blog/addBlog/AddBlogCategory";
import Title from "@/components/blog/addBlog/Title";
import TextEditor from "@/components/customComponent/editor/TextEditor";
import { blog } from "@/services/blog";
import { TAddBlog } from "@/types/blog.";
import { useState } from "react";

export default function AddBlogPage() {
  const [content, setContent] = useState<string>("");

  const [titleAndDescription, setTitleAndDescription] = useState<{
    title: string;
    categoryId: string;
    tags?: string;
    author: string;
    shortDescription?: string;
  }>();

  const blogData: TAddBlog = {
    title: titleAndDescription?.title,
    categoryId: titleAndDescription?.categoryId as string,
    shortDescription: titleAndDescription?.shortDescription,
    author: titleAndDescription?.author as string,
    tags: titleAndDescription?.tags,
    content: content,
  };

  const handleSubmit = async () => {
    const addedBlog = await blog.addBlog(blogData);
    console.log(addedBlog);
  };

  return (
    <>
      {content && content && (
        <h2 className="mb-3 text-lg font-semibold">Preview:</h2>
      )}
      <div className="text-white">
        <div>
          <h1>{titleAndDescription?.title}</h1>
          <h1>{titleAndDescription?.shortDescription}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      {content && content && (
        <button
          onClick={handleSubmit}
          type="button"
          className="bg-green-500 p-2 rounded-md"
        >
          Submit
        </button>
      )}

      <div className=" mt-5">
        <AddBlogCategory />
        <Title setTitleAndDescription={setTitleAndDescription} />
        <TextEditor setContent={setContent} />
      </div>
    </>
  );
}
