import ProjectPage from "@/app/(commonLayout)/projects/page";
import Button from "@/components/customComponent/Button";
import Link from "next/link";
import { GoPlus } from "react-icons/go";

export default function DashBoardProjectsPage() {
  return (
    <div>
      <ProjectPage />
      <Link href={"/dashboard/add-blog"}>
        <Button
          text="Add Project"
          className="py-4 px-8 mt-5"
          icon={<GoPlus />}
        />
      </Link>
    </div>
  );
}
