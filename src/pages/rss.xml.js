import rss from "@astrojs/rss"
import { getCollection } from "astro:content"

export async function GET(context) {
  const posts = await getCollection("blogCollection", ({ data }) => {
    return data.offline !== true
  })
  return rss({
    title: "dveras em rede",
    description: "Blog de Dauro Veras.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.titulo,
      pubDate: post.data.data_publicacao,
      description: post.data.descricao,
      link: `/blog/${post.id}/`,
      customData: `<language>pt-br</language>`,
    })),
  })
}
