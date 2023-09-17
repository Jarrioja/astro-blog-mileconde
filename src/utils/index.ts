export default function stripHTML(string: string) {
  return string.replace(/<[^>]*>/g, "");
}
// const domain = import.meta.env.DOMAIN;
// export const jsonLDGenerator = function (node: NodeByURI) {
//   const { __typename: type, uri } = node;
//   {
//     if (type === "Post") {
//       return `<script type="application/ld+json">
//         {
//           "@context": "https://schema.org",
//           "@type": "BlogPosting",
//           "mainEntityOfPage": {
//             "@type": "WebPage",
//             "@id": "${domain}/${uri}"
//           },
//           "headline": "${node.title}",
//           "description": "${node.excerpt}",
//           "image": "${node.image.src}",
//           "author": {
//             "@type": "Person",
//             "name": "${post.author}",
//             "url": "/author/${slugify(post.author)}"
//           },
//           "datePublished": "${post.date}"
//         }
//       </script>`;
//     }
//     return `<script type="application/ld+json">
//         {
//         "@context": "https://schema.org/",
//         "@type": "WebSite",
//         "name": "${siteData.title}",
//         "url": "${import.meta.env.SITE}"
//         }
//       </script>`;
//   }
// };
