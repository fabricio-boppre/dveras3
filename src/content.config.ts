import { z, reference, defineCollection } from "astro:content"
import { glob, file } from "astro/loaders"

const blogCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/blog",
  }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      offline: z.boolean(),
      descricao: z.string(),
      data_publicacao: z.date(),
      lastUpdated: z.date(),
      modo_exibicao_index: z.string(),
      imagem_ilustrativa: z.string().optional(),
      relatedCategorias: z.array(reference("categoriasCollection")),
    }),
})
const categoriasCollection = defineCollection({
  loader: file("./src/content/categorias.json"),
  schema: z.object({
    titulo: z.string(),
  }),
})

export const collections = {
  blogCollection,
  categoriasCollection,
}
