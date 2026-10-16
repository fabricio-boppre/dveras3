import { z, reference, defineCollection } from "astro:content"
import { glob, file } from "astro/loaders"

const exibicaoIndex = z.discriminatedUnion("modo", [
  z.object({ modo: z.literal("descricao") }),
  z.object({ modo: z.literal("post_completo") }),
  z.object({ modo: z.literal("imagem_ilustrativa"), imagem: z.string() }),
])

const blogCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/blog",
  }),
  schema: z.object({
    titulo: z.string(),
    offline: z.boolean().optional(),
    descricao: z.string(),
    data_publicacao: z.coerce.date(),
    // The CMS stores a one-item list; unwrap it so you get a single object.
    exibicao_index: z
      .array(exibicaoIndex)
      .length(1)
      .transform(([item]) => item),
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
