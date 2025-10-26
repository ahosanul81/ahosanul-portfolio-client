import BlogCard from "@/app/(commonLayout)/blogs/page";
import Spinner from "@/app/(commonLayout)/projects/loading";
import Button from "@/components/customComponent/Button";
import Link from "next/link";
import { Suspense } from "react";
import { GoPlus } from "react-icons/go";

export default async function DashBoardBlogsPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <div>
        <BlogCard />

        <Link href={"/dashboard/add-blog"}>
          <Button
            text="Add Blog"
            className="py-4 px-8 mt-5"
            icon={<GoPlus />}
          />
        </Link>
      </div>
    </Suspense>
  );
}
