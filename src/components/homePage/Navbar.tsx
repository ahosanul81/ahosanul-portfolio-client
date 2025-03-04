"use client";
import { useGetAdminQuery } from "@/redux/features/dashboard/dashboardApi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { data: adminInfo } = useGetAdminQuery(undefined);

  const pathName = usePathname();

  const navlinks = (
    <>
      <li
        className={
          pathName === "/"
            ? "border-l-2 pl-2 lg:p-0 lg:border-b-2 lg:border-l-0"
            : ""
        }
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className={
          pathName === "/about"
            ? "border-l-2 pl-2 lg:p-0 lg:border-b-2 lg:border-l-0"
            : ""
        }
      >
        <Link href="/">About</Link>
      </li>
      <li
        className={
          pathName === "/services"
            ? "border-l-2 pl-2 lg:p-0 lg:border-b-2 lg:border-l-0"
            : ""
        }
      >
        <Link href="/">Services</Link>
      </li>
      <li
        className={
          pathName === "/projects"
            ? "border-l-2 pl-2 lg:p-0 lg:border-b-2 lg:border-l-0"
            : ""
        }
      >
        <Link href="/projects">Projects</Link>
      </li>
      <li
        className={
          pathName === "/blogs"
            ? "border-l-2 pl-2 lg:p-0 lg:border-b-2 lg:border-l-0"
            : ""
        }
      >
        <Link href="/blogs">Blogs</Link>
      </li>
      <li
        className={
          pathName === "/contact"
            ? "border-l-2 pl-2 lg:p-0 lg:border-b-2 lg:border-l-0"
            : ""
        }
      >
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
    <>
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

            <h1 className="text-2xl lg:text-4xl font-bold text-gray-300">
              Ahosanul
            </h1>
          </Link>
        </section>
        <section className="hidden lg:block ">
          <ul className="flex items-center gap-7">{navlinks}</ul>
        </section>
        <section className=" bg-green-300 z-20">
          <div
            onClick={() => setOpenSidebar(!openSidebar)}
            className="py-2 px-2 lg:py-4 lg:px-4 flex justify-end items-center bg-green-300 text-2xl lg:text-4xl text-black z-20"
          >
            {openSidebar ? <RxCross1 /> : <IoMenu />}
          </div>
        </section>
      </nav>
      {openSidebar && (
        <div className="block lg:hidden relative justify-end">
          <div className="fixed  top-0 right-0 h-screen w-3/5 bg-gray-500 z-10 ">
            <ul className="p-7 space-y-4">{navlinks}</ul>
          </div>
        </div>
      )}
    </>
  );
}
