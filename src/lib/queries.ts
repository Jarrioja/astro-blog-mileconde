export const NAV_QUERY = `
    query navQuery {
        menus(where: {location: MENU_1}) {
        nodes {
            name
            menuItems {
                nodes {
                    uri
                    url
                    order
                    label
                }
            }
        }
        }
        generalSettings {
            title
            url
            description
        }
    }
`;

export const NODE_BY_URI = `
    query GetNodeByURI($uri: String!) {
        nodeByUri(uri: $uri) {
            __typename
            isContentNode
            isTermNode
            ... on Post {
                id
                title
                date
                uri
                excerpt
                content
                seo{
                    metaDesc
                    title
                    metaRobotsNoindex
                    canonical
                    metaRobotsNofollow
                    schema {
                        raw
                    }
                    fullHead
                }
                categories {
                    nodes {
                        name
                        uri
                    }
                }
                featuredImage {
                    node {
                        srcSet
                        sourceUrl
                        altText
                        mediaDetails {
                            height
                            width
                        }
                    }
                }
            }
            ... on Page {
                id
                title
                uri
                date
                content
                seo{
                    metaDesc
                    title
                    metaRobotsNoindex
                    canonical
                    metaRobotsNofollow
                    schema {
                        
                        raw
                    }
                    fullHead
                }
            }
            ... on Category {
                id
                name
                posts {
                    nodes {
                        date
                        title
                        excerpt
                        uri
                        categories {
                            nodes {
                                name
                                uri
                            }
                        }
                        featuredImage {
                            node {
                                srcSet
                                sourceUrl
                                altText
                                mediaDetails {
                                    height
                                    width
                                }
                            }
                        }
                        seo{
                            metaDesc
                            title
                            fullHead
                        }
                    }
                }
            }
        }
    }
`;

export const GET_ALL_URIS = `
    query GetAllUris {
        terms {
        nodes {
            uri
        }
        }
        categories {
        nodes {
            uri
        }
        }            
        posts(first: 100) {
        nodes {
            uri
        }
        }
        pages(first: 100) {
        nodes {
            uri
        }
        }
    }
`;

export const GET_HOMEPAGE_POSTS = `
  query GetHomepagePost {
    generalSettings {
        title
        description
    }
    posts {
      nodes {
        date
        uri
        title
        commentCount
        excerpt
        categories {
          nodes {
            name
            uri
          }
        }
        featuredImage {
          node {
            srcSet
            sourceUrl
            altText
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
`;

export const GET_POST_BY_SLUG = `
    query PostBySlug($slug: String!) {
        generalSettings {
            title
        }
        postBy(slug: $slug) {
            id
            content
            title
            slug
            seo {
                metaDesc
                title
                fullHead
            }
        }
    }
`;
