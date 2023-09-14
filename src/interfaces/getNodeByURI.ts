export type GetNodeByURI = {
  data: Data;
};

export type Data = {
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
