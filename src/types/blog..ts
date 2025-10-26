export type TBlog = {
  _id: string;
  titleId: {
    _id: string;
    title: string;
    slug: string;
    parentId: string | null;
    categoryId: {
      _id: string;
      category: string;
    };
  };

  shortDescription?: string | undefined;
  author: string;
  coverImage: string;
  content: string;
  tags: string[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TBlogDetails = {
  _id: string;
  titleId: {
    _id: string;
    title: string;
    slug: string;
    parentId: string | null;
    categoryId: {
      _id: string;
      category: string;
    };
  };

  shortDescription?: string | undefined;
  author: string;
  coverImage: string;
  contentId: {
    _id: string;
    content: string;
  };
  tags: string[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
};
export type TAddBlog = {
  title: string | undefined;
  categoryId: string;
  shortDescription?: string | undefined;
  author: string;
  tags?: string;
  content: string;
};
