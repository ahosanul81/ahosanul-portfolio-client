import BlogCard from "@/app/(commonLayout)/blogs/page";
import Button from "@/components/customComponent/Button";
import Link from "next/link";
import { GoPlus } from "react-icons/go";

export default function DashBoardBlogsPage() {
  return (
    <div>
      <BlogCard />

      <Link href={"/dashboard/add-blog"}>
        <Button text="Add Blog" className="py-4 px-8 mt-5" icon={<GoPlus />} />
      </Link>
    </div>
  );
}
