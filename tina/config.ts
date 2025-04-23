import { defineConfig, ImageField } from "tinacms"
import categoriasJson from "../src/content/categorias.json"

// Let's get the categories from the Astro content colllection:
const categorias = categoriasJson.map((categoria) => ({
  label: categoria.titulo,
  value: categoria.id,
}))

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main"

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: "d7e8a9e0-5ebd-43c4-81ac-d8730b107be2",
  // Get this from tina.io
  token: "eae1adefb3c5bf89772949629bf3f7ac448beb6d",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images/content",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      // Blog:
      {
        ui: {
          // Adding a lastUpdated on beforeSubmit:
          beforeSubmit: async ({
            form,
            cms,
            values,
          }: {
            form: Form
            cms: TinaCMS
            values: Record<string, any>
          }) => {
            return {
              ...values,
              lastUpdated: new Date().toISOString(),
            }
          },
        },
        name: "blog",
        label: "Blog posts",
        path: "src/content/blog",
        fields: [
          {
            // Título
            type: "string",
            name: "titulo",
            label: "Título",
            isTitle: true,
            required: true,
          },
          {
            // Offline
            type: "boolean",
            name: "offline",
            label: "Offline",
          },
          {
            // Descrição
            type: "string",
            name: "descricao",
            label: "Descrição",
            description:
              "Mesmo que este texto não seja exibido no blog, a descrição de um post é obrigatória pois ela é utilizada na indexação do site em serviços de pesquisa, feeds RSS, redes sociais, etc.",
            required: true,
          },
          {
            // Data de publicação
            type: "datetime",
            name: "data_publicacao",
            label: "Data de publicação",
            required: true,
          },
          {
            // Data da última alteração (campo escondido pois o Tina preenche automaticamente)
            type: "datetime",
            name: "lastUpdated",
            label: "Data da última alteração",
            ui: {
              component: "hidden",
            },
          },
          {
            // Modo de exibição nos índices
            type: "string",
            name: "modo_exibicao_index",
            label: "Modo de exibição nos índices",
            description:
              "Escolha como você pretende que este post seja exibido no índice da tela inicial do blog e em outros índices.",
            required: true,
            ui: {
              component: "radio-group",
              direction: "vertical",
            },
            options: [
              {
                value: "descricao",
                label: "Exibir apenas a descrição",
              },
              {
                value: "post_completo",
                label: "Exibir o post completo",
              },
              {
                value: "imagem_ilustrativa",
                label: "Exibir imagem ilustrativa",
              },
            ],
          },
          {
            // Imagem ilustrativa para os índices
            type: "image",
            label: "Imagem ilustrativa para os índices",
            name: "imagem_ilustrativa",
            ui: {
              // Só exibe se modo_exibicao_index for imagem_ilustrativa
              component: (props) => {
                const { form } = props
                return form.getFieldState("modo_exibicao_index")?.value ==
                  "imagem_ilustrativa"
                  ? ImageField(props)
                  : null
              },
              // Se modo_exibicao_index for imagem_ilustrativa, então é obrigado cadastrar uma imagem
              validate: (value, data) => {
                const modoExibicao = data?.modo_exibicao_index
                const imageLength = value?.length || 0
                if (typeof modoExibicao != "undefined") {
                  if (
                    modoExibicao === "imagem_ilustrativa" &&
                    imageLength === 0
                  ) {
                    return "Esta imagem deve ser cadastrada."
                  }
                }
              },
            },
          },
          {
            // Categorias relacionadas
            type: "string",
            name: "relatedCategorias",
            label: "Categorias relacionadas",
            list: true,
            required: true,
            ui: {
              validate: (value, data) => {
                const length = value?.length || 0
                if (length == 0) {
                  return "Ao menos uma categoria deve ser escolhida."
                }
              },
            },
            options: categorias,
          },
          {
            // Post
            type: "rich-text",
            name: "body",
            label: "Post",
            isBody: true,
            required: true,
          },
        ],
      },
      // Sobre:
      {
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        name: "sobre",
        label: "Sobre",
        path: "src/content/sobre",
        fields: [
          {
            // Post
            type: "rich-text",
            name: "body",
            label: "Texto",
            isBody: true,
            required: true,
          },
        ],
      },
    ],
  },
})
