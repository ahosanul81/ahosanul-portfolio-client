// import Image from "next/image";

import Image from "next/image";

// export default async function BlogDetailsPage({
//   params,
// }: {
//   params: { blogId: string };
// }) {
//   const id = params.blogId;
//   const res = await fetch(`http://localhost:5000/api/v1//blogs/${id}`);

//   const blog = await res.json();
//   console.log(blog);

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-5xl text-gray-300  font-bold">{blog.title}</h1>

//       <Image
//         className="w-full h-64 object-cover rounded-lg mt-4"
//         src={blog.image || ""}
//         height={400}
//         width={800}
//         alt={blog.title}
//       />
//       <p className="text-gray-400 mt-4">{blog.description}</p>
//     </div>
//   );
// }

// export const generateStaticParams = async () => {
//   const res = await fetch("http://localhost:5000/blogs");
//   const blogs = await res.json();
//   return blogs.slice(0, 3)?.map((blog: Blog) => ({
//     blogId: blog.id,
//   }));
// };

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ blogId: string }>;
// }) {
//   const { blogId } = await params;
//   const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
//   const blog = await res.json();

//   return {
//     title: blog.title,
//   };
// }

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const res = await fetch(`http://localhost:5000/api/v1/blogs/${blogId}`);
  const blog = await res.json();
  // console.log(blog);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-5xl text-gray-300  font-bold">{blog.data.title}</h1>
      {blog.data.image && (
        <Image
          className="w-full h-64 object-cover rounded-lg mt-4"
          src={blog.data.image}
          height={400}
          width={800}
          alt={blog.data.title}
        />
      )}
      <p className="text-gray-400 mt-4 text-justify">{blog.data.description}</p>
    </div>
  );
}
