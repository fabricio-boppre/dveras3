// 1. Importing utilities from `astro:content`
import { z, reference, defineCollection } from "astro:content"

// 2. Defining our collection(s)
const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      offline: z.boolean().optional(),
      descricao: z.string(),
      data_publicacao: z.date(),
      modo_exibicao_index: z.array(z.string()),
      imagem_ilustrativa: z.string().optional(),
      categorias: z.array(z.string()),
    }),
})

const categoriasCollection = defineCollection({
  schema: z.object({
    titulo: z.string(),
  }),
})
// 3. Exporting a single `collections` object to register our collection(s)
//    These keys should match our collections directories names in "src/content"
export const collections = {
  blog: blogCollection,
  categorias: categoriasCollection,
}
