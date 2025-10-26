/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppstoreOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { blog } from "@/services/blog";

type MenuItem = {
  key: string;
  icon?: React.ReactNode;
  label: string;
  children?: MenuItem[];
};

type TBlogCategory = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  subTitles?: { _id: string; title: string }[];
  createdAt: string;
  updatedAt: string;
};
type TBlogTitles = {
  category: string;
  categoryId: string;
  titles: {
    _id: string;
    title: string;
    slug: string;
    parentId: string;
  }[];
};
export default async function BlogLeftSidebar() {
  const categories = await blog.getAllBlogCategories();
  const titles = await blog.getAllBlogTitles();

  // console.log("categories", categories, "titles", titles);

  // 🧩 Static menu items
  //   const staticItems: MenuItem[] = [
  //     { key: "1", icon: <PieChartOutlined />, label: "Option 1" },
  //     { key: "2", icon: <DesktopOutlined />, label: "Option 2" },
  //     { key: "3", icon: <ContainerOutlined />, label: "Option 3" },
  //   ];

  // 🧠 Dynamic category-based menu items
  const dynamicItems: MenuItem[] =
    categories?.data?.map((cat: TBlogCategory) => ({
      key: cat._id,
      label: cat.category,
      icon: <AppstoreOutlined />,
      children:
        titles?.data
          ?.filter((t: TBlogTitles) => t.categoryId === cat._id)
          ?.flatMap((t: { titles: TBlogCategory[] }) =>
            t.titles.map((title) => ({
              key: title._id,
              label: title.title,
              children: title.subTitles?.map((sub) => ({
                key: sub._id,
                label: sub.title,
              })),
            }))
          ) || [],
    })) || [];
  // ✅ Combine static and dynamic items properly
  const items: MenuItem[] = [...dynamicItems];

  return (
    <div style={{ width: 256 }}>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={[categories?.data?.[0]?._id]}
        mode="inline"
        theme="dark"
        items={items}
      />
    </div>
  );
}
