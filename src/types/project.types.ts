export type TProject = {
  _id: string;
  title: string;
  slug: string;
  coverImage: string;
  shortDescription: string;
  technologies: string[];
  categoryId: TCategory;
  liveLink: string;
  createdAt: string;
  updatedAt: string;
};

//  single project

export type TCategory = {
  _id: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TContent = {
  _id: string;
  content: string;
};

export type TProjectDetails = {
  _id: string;
  title: string;
  slug: string;
  coverImage: string | string[];
  shortDescription: string;
  technologies: string[];
  categoryId: TCategory;
  liveLink: string;
  contentId: TContent;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

// add Project

export type TAddProject = {
  title: string;
  coverImage: File[];
  shortDescription: string;
  technologies: string;
  categoryId: string;
  liveLink: string;
  content?: string;
};
