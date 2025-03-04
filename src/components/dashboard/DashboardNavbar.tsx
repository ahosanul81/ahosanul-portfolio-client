"use client";

import Link from "next/link";
// import Image from "next/image";

const DashboardNavbar = () => {
  const navLinks = (
    <>
      <li>
        <Link href="/dashboard/blogs">Added Blogs</Link>
      </li>
      <li>
        <Link href="/dashboard/projects">Added Project</Link>
      </li>
    </>
  );

  return (
    <nav className="bg-white shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              Home
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center gap-4">{navLinks}</ul>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
