// 1. Importing utilities from `astro:content`
import { z, defineCollection } from "astro:content"

// 2. Defining our collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    titulo: z.string(),
    descricao: z.string().optional(),
    categorias: z.array(z.string()),
    data_publicacao: z.date(),
    offline: z.boolean().optional(),
  }),
})

// 3. Exporting a single `collections` object to register our collection(s)
//    These keys should match our collections directories names in "src/content"
export const collections = {
  blog: blogCollection,
}
