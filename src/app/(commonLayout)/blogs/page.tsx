import { TBlog } from "@/types/blog.";
import Spinner from "../projects/loading";
import { Suspense } from "react";
import { blog } from "@/services/blog";
import Image from "next/image";
import Link from "next/link";

const BlogCard = async () => {
  const blogs = await blog.getAllBlogs();

  return (
    <Suspense fallback={<Spinner />}>
      <div className="grid grid-cols-2 gap-4">
        {blogs &&
          blogs.data?.map((blog: TBlog) => (
            <div key={blog._id}>
              <Link
                href={`/blogs/${blog.titleId.categoryId.category}/${blog.titleId.slug}/${blog._id}`}
              >
                <div className="max-w-sm bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 transition transform duration-200">
                  {/* Image */}
                  {blog && blog.coverImage ? (
                    <div className="h-48 w-full overflow-hidden bg-gray-800">
                      <Image
                        height={100}
                        width={150}
                        alt="blog cover image"
                        src={blog.coverImage}
                        className="w-full h-48"
                      />
                    </div>
                  ) : (
                    <Image
                      height={100}
                      width={150}
                      alt="blog cover image"
                      src="/default-blog-image.jpg"
                      className="w-full h-48"
                    />
                  )}

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-white text-lg font-semibold line-clamp-2">
                      Composable Next.js
                    </h3>
                    <p className="mt-2 text-sm text-gray-400 line-clamp-3">
                      It’s a JavaScript “directive”—a string literal you add in
                      your code—that tells Next.js how to optimize rendering for
                      your components.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </Suspense>
  );
};

export default BlogCard;
