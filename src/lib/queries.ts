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

export const HOMEPAGE_POSTS_QUERY = `
    query HOMEPAGE_POSTS_QUERY {
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
