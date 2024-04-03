import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

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
      {
        name: "blog",
        label: "Blog posts",
        path: "src/content/blog",
        fields: [
          {
            type: "string",
            name: "titulo",
            label: "Título",
            isTitle: true,
            required: true,
          },
          {
            type: "boolean",
            name: "offline",
            label: "Offline",
          },
          {
            type: "string",
            name: "descricao",
            label: "Descrição",
          },
          {
            type: "datetime",
            name: "data_publicacao",
            label: "Data de publicação",
            required: true,
          },
          {
            type: "string",
            name: "categorias",
            label: "Categorias",
            list: true,
            required: true,
            options: [
              {
                value: "literatura",
                label: "Literatura",
              },
              {
                value: "miguelices_e_brunitezas",
                label: "Miguelices & Brunitezas",
              },
              {
                value: "cinema",
                label: "Cinema",
              },
              {
                value: "musica",
                label: "Música",
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Post",
            isBody: true,
          },
        ],
      },
    ],
  },
});
