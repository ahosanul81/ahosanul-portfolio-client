/* eslint-disable @typescript-eslint/no-explicit-any */
// POST
const addCategory = async (category: { categoryName: string }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/projects/add-category`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      }
    );

    const result = await res.json();

    return result;
  } catch (error: any) {
    console.log(error);
    return Error(error);
  }
};
const addTechnol0gy = async (technology: { technology: string }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/projects/add-technology`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(technology),
      }
    );

    const result = await res.json();

    return result;
  } catch (error: any) {
    console.log(error);
    return Error(error);
  }
};
const addProject = async (project: any) => {
  const formData = new FormData();
  if (project && project?.coverImage) {
    formData.append("file", project?.coverImage[0]);
  }
  formData.append("data", JSON.stringify(project));
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/projects/add-project`,
      {
        method: "POST",
        body: formData,
      }
    );
    const result = await res.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return Error(error);
  }
};

// GET

const getAllCategory = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/projects/project/categories`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await res.json();

    return result;
  } catch (error: any) {
    console.log(error);
    return Error(error);
  }
};
const getAllTechnologies = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/projects/project/technologies`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await res.json();

    return result;
  } catch (error: any) {
    console.log(error);
    return Error(error);
  }
};
const getProjectDetails = async (slug: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${slug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await res.json();

    return result;
  } catch (error: any) {
    console.log(error);
    return Error(error);
  }
};
const getAllProjects = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    return result;
  } catch (error: any) {
    console.log(error);
    return Error(error);
  }
};

export const project = {
  // POST
  addCategory,
  addTechnol0gy,
  addProject,
  // GET
  getAllCategory,
  getAllTechnologies,
  getProjectDetails,
  getAllProjects,
};
