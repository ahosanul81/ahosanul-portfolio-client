"use client";
import { useGetAllBlogsQuery } from "@/redux/features/blog/blogApi";
import { TBlog } from "@/types/blog.types";
import Image from "next/image";
import Link from "next/link";
import Spinner from "../projects/loading";

const BlogCard = () => {
  const { data: blogs, isLoading } = useGetAllBlogsQuery(undefined);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="grid grid-cols-3 gap-7 mt-4">
      {blogs?.data?.map((blog: TBlog) => (
        <div
          key={blog._id}
          className=" bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          {blog.image && (
            <Image
              className="w-full object-cover"
              src={blog.image}
              height={300}
              width={500}
              alt={blog.title}
            />
          )}
          <div className="p-5">
            <span className="text-sm text-gray-500">{blog.category}</span>
            <h2 className="text-xl font-semibold text-gray-800 mt-2">
              {blog.title}
            </h2>

            <Link
              href={`${process.env.NEXT_PUBLIC_BASE_URL_CLIENT}/blogs/${blog._id}`}
            >
              <button className="mt-3 text-blue-500 font-medium hover:underline">
                Read More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
