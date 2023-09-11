export const LOAD_ALL_POSTS_EXCERPTS = `
    query LoadAllPostsExcerpts{
        posts {
            nodes {
               title
               slug
               excerpt
               featuredImage {
                node{
                    mediaItemUrl
                    srcSet
                    sizes
                    altText
                }
            }
            }
        }
    }
    `;
export const LOAD_ALL_POSTS = `
query LoadAllPosts {
    posts {
        nodes {
            title
            slug
            featuredImage {
                node{
                    mediaItemUrl
                    srcSet
                    sizes
                    altText
                }
            }
            content(format:RENDERED)
            author {
                node {
                    name
                }
            }
        }
    }
}
`;
