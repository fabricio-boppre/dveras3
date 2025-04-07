// 1. Importing utilities from `astro:content` and loader(s)
import { z, reference, defineCollection } from "astro:content"
import { glob, file } from "astro/loaders"

// 2. Defining our collections
const blogCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/blog",
  }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      offline: z.boolean().optional(),
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
    id: z.string(),
    titulo: z.string(),
  }),
})

// 3. Exporting a single `collections` object to register our collections
//    These keys should match our collections directories names in "src/content"
export const collections = {
  blogCollection,
  categoriasCollection,
}
