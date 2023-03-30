# Introdução

Este código-fonte gera um blog composto unicamente de telas estáticas e hospedado em um servidor de arquivos gratuito.

Resumidamente, funciona da seguinte forma: após a atualização de seu conteúdo via [Dillinger](https://dillinger.io/), uma ação automática dispara a reconstrução do blog e o atualiza em seu serviço de hospedagem, a plataforma adjunta [GitHub Pages](https://pages.github.com/).

O framework utilizado para a programação das telas do blog é o [Astro](https://astro.build/).

# Instruções para publicação de um novo post

Abra o [Dillinger](https://dillinger.io/), clique em *IMPORT FROM* e escolha a opção *GitHub*. Escolha o projeto, o branch *main* e, finalmente, o arquivo *src/content/blog/novo_post.md*.

Aberto o documento, altere o *DOCUMENT NAME*. Ele deve ter o formato *YYYY_MM_DD_titulo_do_post.md* sendo que *YYYY_MM_DD* é a data de publicação e *titulo_do_post* é o título do post sem espaços e nem caracteres especiais. *YYYY_MM_DD_titulo_do_post* fará parte da URL do post (por exemplo: *meusite.com.br/blog/2020_10_20_titulo_do_post*).

Em seguida, na metade esquerda da tela, sob o título *MARKDOWN*, altere as informações *titulo* (título do post), *descricao* (trecho ou resumo que poderá aparecer sob o título do post no índice do blog), *data_publicacao* (no formato declarado do modelo) e *categorias*. As categorias podem ser uma ou mais, sendo que cada uma deve ocupar uma linha, que inicia-se sempre com um traço.

Exclua o texto provisório *Aqui vai o conteúdo do post* e em seu lugar digite ou cole seu texto, utilizando [Markdown](https://daringfireball.net/projects/markdown/basics) para sua formatação.

Atenção: existem alguns poucos caracteres reservados que não devem ser utilizados em um texto Markdown. Veja aqui quais são e que códigos utilizar em seus lugares: <https://developer.mozilla.org/en-US/docs/Glossary/Entity>.

Vá acompanhando no lado direito da tela (sob o título *PREVIEW*) a aparência do texto. Você pode ignorar o cabeçalho superior com o título do post, data de publicação, etc. — ele não irá aparecer no blog. Quando o post estiver pronto para ser publicado, exclua a linha *offline* ou altere seu valor para *false*.

Por último, clique em *SAVE TO*, escolha *GitHub* e em *GitHub commit message* escreva uma curta descrição sobre o que você acabou de fazer (por exemplo: *Publicação do post 'Meus livros favoritos'*).

Seu site começará a ser reconstruído e em poucos instantes estará atualizado. Para acompanhar o processo de reconstrução, vá ao respositório do site no GitHub e clique em *Actions*. Se ocorrer algum problema, entre em contato com o seu time de desenvolvimento.

# Instruções para modificação de um post

[em construção]

# Links úteis

- [Markdown: Basics](https://daringfireball.net/projects/markdown/basics)
- [Caracteres reservados](https://developer.mozilla.org/en-US/docs/Glossary/Entity)
