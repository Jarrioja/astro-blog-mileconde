import { log } from "console";
import type { GetAllUris } from "../interfaces";
import {
  GET_ALL_URIS,
  HOMEPAGE_POSTS_QUERY,
  NAV_QUERY,
  NODE_BY_URI,
} from "./queries";
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

export async function getNodeByURI(uri: string) {
  const response = await fetchQuery(NODE_BY_URI, { uri });
  const { data } = await response.json();
  return data;
}

export async function homePagePostsQuery() {
  const response = await fetchQuery(HOMEPAGE_POSTS_QUERY);
  const { data } = await response.json();
  return data;
}

interface Uris {
  params: {
    uri: string;
  };
}

export async function getAllUris() {
  const response = await fetchQuery(GET_ALL_URIS);
  const { data } = await response.json();
  delete data.pages; // Eliminar paginas para poder hacer build
  const uris: Uris = Object.values(data)
    .reduce(function (acc: any, currentValue: any) {
      return acc.concat(currentValue.nodes);
    }, [])
    .filter(
      (node: any) =>
        node.uri !== null && node.uri !== "/favicon.ico" && node.uri !== "/"
    )
    .map((node: any) => {
      let trimmedURI = node.uri.substring(1);
      trimmedURI = trimmedURI.substring(0, trimmedURI.length - 1);
      return {
        params: {
          uri: trimmedURI,
        },
      };
    });

  return uris;
}
