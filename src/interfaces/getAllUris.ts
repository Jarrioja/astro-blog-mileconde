export type GetAllUris = {
  data: Data;
};

export type Data = {
  terms: Pages;
  posts: Pages;
  pages: Pages;
};

export type Pages = {
  nodes: Node[];
};

export type Node = {
  uri: null | string;
};
