"use client";
import { useGetAdminQuery } from "@/redux/features/dashboard/dashboardApi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  const { data: adminInfo } = useGetAdminQuery(undefined);
  console.log(adminInfo);
  const pathName = usePathname();

  const navlinks = (
    <>
      <li className={pathName === "/" ? "border-b-2" : ""}>
        <Link href="/">Home</Link>
      </li>
      <li className={pathName === "/about" ? "border-b-2" : ""}>
        <Link href="/">About</Link>
      </li>
      <li className={pathName === "/services" ? "border-b-2" : ""}>
        <Link href="/">Services</Link>
      </li>
      <li className={pathName === "/projects" ? "border-b-2" : ""}>
        <Link href="/projects">Projects</Link>
      </li>
      <li className={pathName === "/blogs" ? "border-b-2" : ""}>
        <Link href="/blogs">Blogs</Link>
      </li>
      <li className={pathName === "/contact" ? "border-b-2" : ""}>
        <Link href="/contact">Contact</Link>
      </li>
      {adminInfo?.data?.map(
        (elem: {
          _id: string;
          user: string;
          email: string;
          password: string;
          role: string;
        }) => {
          if (elem.role === "admin") {
            return (
              <li
                key={elem._id}
                className={pathName === "/dashboard" ? "border-b-2" : ""}
              >
                <Link href="/dashboard">Dashboard</Link>
              </li>
            );
          }
        }
      )}
    </>
  );
  return (
    <nav className="flex justify-between nav-bg items-center text-white">
      <section className=" flex items-center gap-3 rounded-full">
        <Link href={"/"} className="flex items-center gap-4">
          <Image
            className=" bg-green-300 h-full"
            src={
              "https://res.cloudinary.com/dgs2ywdd6/image/upload/v1739121745/ahosanul_logo_hcr49e.png"
            }
            height={50}
            width={50}
            alt="logo"
          ></Image>

          <h1 className="text-4xl font-bold text-gray-300">Ahosanul</h1>
        </Link>
      </section>
      <section className="">
        <ul className="flex items-center gap-7">{navlinks}</ul>
      </section>
      <section className=" bg-green-300">
        <div className="py-4 px-4 flex justify-end items-center">
          <IoMenu className="bg-green-300 text-4xl text-black" />
        </div>
      </section>
    </nav>
  );
}
