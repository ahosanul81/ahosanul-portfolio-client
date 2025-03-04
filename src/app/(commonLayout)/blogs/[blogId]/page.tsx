import Image from "next/image";

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${blogId}`
  );
  const blog = await res.json();

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
