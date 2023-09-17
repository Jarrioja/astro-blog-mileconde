export type GetNodeByURI = {
  nodeByUri: NodeByURI;
};

export type NodeByURI = {
  __typename: string;
  isContentNode: boolean;
  isTermNode: boolean;
  id: string;
  title: string;
  date: Date;
  uri: string;
  excerpt: string;
  content: string;
  categories: Categories;
  featuredImage: FeaturedImage;
  seo: Seo;
};

export type Categories = {
  nodes: NodeElement[];
};

export type NodeElement = {
  name: string;
  uri: string;
};

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

export type Seo = {
  metaDesc: string;
  title: string;
  metaRobotsNoindex: string;
  canonical: string;
  metaRobotsNofollow: string;
  schema: Schema;
  fullHead: string;
};

export type Schema = {
  raw: string;
};
