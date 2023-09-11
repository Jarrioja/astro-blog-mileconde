export type AllPostsExcerpts = {
  posts: Posts;
};

export type Posts = {
  nodes: Node[];
};

export type Node = {
  title: string;
  slug: string;
  excerpt: string;
};
