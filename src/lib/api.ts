import { NAV_QUERY, NODE_BY_URI, HOMEPAGE_POSTS_QUERY } from "./queries";
interface WPGraphQLParams {
  query: string;
  variables?: object;
}

const fetchQuery = async (query: string, variable?: object) => {
  return await fetch(import.meta.env.WP_URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query,
      variables: variable,
    }),
  });
};

export async function navQuery() {
  const siteNavQueryRes = await fetchQuery(NAV_QUERY);
  const { data } = await siteNavQueryRes.json();
  return data;
}

export async function getNodeByURI(uri: object) {
  const response = await fetchQuery(NODE_BY_URI, uri);
  const { data } = await response.json();
  return data;
}

export async function homePagePostsQuery() {
  const response = await fetchQuery(HOMEPAGE_POSTS_QUERY);
  const { data } = await response.json();
  return data;
}

//
//   const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
//     method: "post",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       query: `{
//                 posts {
//                   nodes {
//                     date
//                     uri
//                     title
//                     commentCount
//                     excerpt
//                     categories {
//                       nodes {
//                         name
//                         uri
//                       }
//                     }
//                     featuredImage {
//                       node {
//                         srcSet
//                         sourceUrl
//                         altText
//                         mediaDetails {
//                           height
//                           width
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             `,
//     }),
//   });
//   const { data } = await response.json();
//   return data;
// }

// export async function getAllUris() {
//   const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
//     method: "post",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       query: `query GetAllUris {
//             terms {
//               nodes {
//                 uri
//               }
//             }
//             posts(first: 100) {
//               nodes {
//                 uri
//               }
//             }
//             pages(first: 100) {
//               nodes {
//                 uri
//               }
//             }
//           }
//           `,
//     }),
//   });
//   const { data } = await response.json();
//   const uris = Object.values(data)
//     .reduce(function (acc, currentValue) {
//       return acc.concat(currentValue.nodes);
//     }, [])
//     .filter((node) => node.uri !== null)
//     .map((node) => {
//       let trimmedURI = node.uri.substring(1);
//       trimmedURI = trimmedURI.substring(0, trimmedURI.length - 1);
//       return {
//         params: {
//           uri: trimmedURI,
//         },
//       };
//     });

//   return uris;
// }
