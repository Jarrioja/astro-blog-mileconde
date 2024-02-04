import type { Node } from "src/interfaces/getAllUris";
import {
  GET_ALL_URIS,
  GET_HOMEPAGE_POSTS,
  GET_POST_BY_SLUG,
  NAV_QUERY,
  NODE_BY_URI,
} from "./queries";

const fetchQuery = async (query: string, variable?: object) => {
  return await fetch(import.meta.env.WP_URL, {
    method: "post",
    headers: { "Content-Type": "application/json charset=utf-8" },
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
  const response = await fetchQuery(GET_HOMEPAGE_POSTS);
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

  // Juntar y aplanara Uris de la web
  const rawUris: any = Object.values(data).reduce(function (
    previousValue: any,
    currentValue: any
  ) {
    return previousValue.concat(currentValue.nodes);
  },
  []);
  // Filtrar uris descartando las nula, el favicon y el homepath
  const filterUris = rawUris.filter(({ uri }: Node) => {
    return uri !== null && uri !== "/favicon.ico" && uri !== "/";
  });

  // mapear para darles el formato adecuado para que lo reconozca el getStaticPath()
  const uris: Uris[] = filterUris.map(({ uri }: Node) => {
    // let trimmedURI = uri!.substring(1);
    // trimmedURI = trimmedURI.substring(0, trimmedURI.length - 1);
    console.log(uri!.substring(1));
    return {
      params: {
        uri: uri!.substring(1),
      },
    };
  });

  return uris;
}

export async function getPostBySlug(slug: string) {
  const response = await fetchQuery(GET_POST_BY_SLUG, { slug });
  const { data } = await response.json();
  return data;
}
