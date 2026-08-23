# Site — Norton Luiz Nóbrega, coloproctologista

Site institucional e blog. HTML, CSS e JavaScript puros: **não há build, não há
dependência, não há `npm install` para publicar.** Os arquivos que estão no
repositório são exatamente os que vão para o ar.

- **Design e identidade visual:** [`design.md`](design.md)
- **Dados que faltam antes de publicar:** [`CONTATO.md`](CONTATO.md) ← comece por aqui

---

## Rodar localmente

```bash
python3 -m http.server 8000
```

Depois abra <http://localhost:8000>.

Abrir o `index.html` direto com dois cliques também funciona, mas os links entre
páginas ficam mais confiáveis pelo servidor.

---

## Estrutura

```
index.html              landing — 12 seções
design.md               identidade visual: cor, tipografia, movimento, voz
CONTATO.md              dados pendentes, com o comando de troca de cada um
sitemap.xml             gerado — não edite à mão
robots.txt              gerado — não edite à mão

blog/
  index.html            listagem com filtro por assunto
  posts.json            índice dos artigos
  _modelo-post.html     modelo para escrever um artigo à mão
  <29 artigos>.html     uma página estática por artigo

assets/
  css/site.css          folha principal (usa @layer)
  css/blog.css          só o que é específico do blog
  js/site.js            topo, menu, reveal, o fio, botão flutuante
  js/blog.js            filtro do índice
  fonts/                Open Sans em .woff2, 5 pesos (300–800), ~10 KB cada
  img/                  fotos em .webp, três larguras cada
  marca/                símbolo, favicons, imagem de compartilhamento
  video/                (vazio — o vídeo do hero entra aqui)

tools/                  OPCIONAL — gerador dos artigos, roda só na sua máquina
```

O material de origem (fotos em alta, fontes `.ttf`, o `.docx` do texto antigo)
continua na sua pasta local, mas está no `.gitignore` — são 59 MB que não
precisam ir para o GitHub. O repositório fica em torno de 2 MB.

---

## Publicar no GitHub Pages

```bash
git remote add origin https://github.com/lucaserbano/NortonNobrega.git
git push -u origin main
```

No GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.

Sendo estático puro, não é preciso GitHub Actions. Cada `git push` publica.

Para usar domínio próprio, adicione o domínio em Settings → Pages e crie um
arquivo `CNAME` na raiz com o domínio dentro. Lembre de atualizar as URLs
canônicas (item 7 do `CONTATO.md`).

---

## Publicar um artigo novo

### Opção A — pelo gerador (recomendado)

Acrescente um objeto ao final da lista em `tools/conteudo.mjs`:

```js
{
  slug: "nome-do-arquivo-sem-acento",
  titulo: "Título do artigo",
  grupo: "doencas",              // doencas | exames | dicas
  categoria: "No ânus e no reto", // o rótulo que aparece no cartão
  resumo: "Uma frase. Vira a descrição no Google e no cartão do blog.",
  corpo: [
    { h: "Primeiro subtítulo", p: ["Um parágrafo.", "Outro parágrafo."] },
    { h: "Segundo subtítulo",  p: ["Mais um."] },
  ],
},
```

Depois:

```bash
node tools/gerar-posts.mjs
```

O script reescreve os artigos, a listagem do blog, o `posts.json` e o
`sitemap.xml`. Ele avisa se faltar um campo ou se houver `slug` repetido.

### Opção B — à mão

Duplique `blog/_modelo-post.html`, renomeie e troque o que estiver entre
colchetes. Depois acrescente o artigo em `blog/posts.json` e uma `<url>` em
`sitemap.xml`.

> Se você nunca for usar o gerador, pode apagar a pasta `tools/` — o site não
> depende dela para nada.

---

## Antes de publicar qualquer mudança

- [ ] Nenhum dado falso sobrou (o comando final do `CONTATO.md` não retorna nada)
- [ ] Sem scroll horizontal em 375, 768, 1024, 1440 e 1920 px
- [ ] Navegação completa por teclado, com o foco sempre visível
- [ ] Com "Reduzir movimento" ligado, o fio aparece inteiro e nada anima
- [ ] Com JavaScript desligado, o conteúdo e os links de WhatsApp funcionam
- [ ] CRM-PR 12.440 e RQE 5531 visíveis em todas as páginas

---

## Sobre o conteúdo clínico

Os 29 artigos foram montados a partir do texto escrito pelo próprio Dr. Norton
para o site anterior. O texto foi reorganizado em seções e teve erros de digitação
corrigidos — **nenhuma afirmação clínica foi acrescentada**. Ainda assim, ele deve
revisar tudo antes da publicação: é o nome e o CRM dele que assinam cada página.
