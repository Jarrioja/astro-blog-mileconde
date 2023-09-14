export type HomepagePostsQuery = {
  posts: Posts;
};

export type Posts = {
  nodes: PostsNode[];
};

export type PostsNode = {
  date: Date;
  uri: string;
  title: string;
  commentCount: number | null;
  excerpt: string;
  categories: Categories;
  featuredImage: FeaturedImage;
};

export type Categories = {
  nodes: CategoriesNode[];
};

export type CategoriesNode = {
  name: Name;
  uri: URI;
};

export enum Name {
  EmigrandoDeMindset = "Emigrando de mindset",
  MenosEsMás = "Menos es más",
}

export enum URI {
  CategoriaEmigrandoDeMindset = "/categoria/emigrando-de-mindset/",
  CategoriaMenosEsMas = "/categoria/menos-es-mas/",
}

export type FeaturedImage = {
  node: FeaturedImageNode;
};

export type FeaturedImageNode = {
  srcSet: string;
  sourceUrl: string;
  altText: string;
  mediaDetails: MediaDetails;
};

export type MediaDetails = {
  height: number;
  width: number;
};
