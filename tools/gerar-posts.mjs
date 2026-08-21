/* =========================================================================
   Gerador das páginas do blog.

   Uso:  node tools/gerar-posts.mjs

   Lê tools/conteudo.mjs e escreve blog/<slug>.html (um arquivo estático real
   por artigo), blog/index.html, blog/posts.json e sitemap.xml.

   O site publicado continua sendo HTML/CSS/JS puro — este script roda só na
   sua máquina, quando você acrescenta ou edita um artigo. Se preferir editar
   os HTML na mão, é só apagar a pasta tools/.
   ========================================================================= */

import { writeFileSync, readdirSync, unlinkSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { posts, GRUPOS } from "./conteudo.mjs";

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "..");
const BLOG = join(RAIZ, "blog");

const SITE = "https://www.nortonnobrega.com.br";
const ZAP = "5541999999999";
const MEDICO = "Dr. Norton Luiz Nóbrega";
const REGISTRO = "CRM-PR 12.440 · RQE 5531";

/* ------------------------------------------------------------------ */

const esc = (s) => String(s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

/** Link de WhatsApp com a mensagem já preenchida pela origem do clique. */
const zap = (msg) => `https://wa.me/${ZAP}?text=${encodeURIComponent(msg)}`;

const ICONE_ZAP = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.8h-.02a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.8 9.8 0 0 1-1.5-5.23c0-5.4 4.4-9.8 9.82-9.8 2.62 0 5.08 1.03 6.93 2.88a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.8 9.8M20.5 3.49A11.7 11.7 0 0 0 12.05 0C5.6 0 .35 5.25.34 11.7c0 2.06.54 4.08 1.56 5.86L.24 24l6.59-1.73a11.7 11.7 0 0 0 5.21 1.24h.01c6.45 0 11.7-5.25 11.7-11.7 0-3.13-1.21-6.07-3.43-8.28"/></svg>`;

/* ---------------------------- cabeça ---------------------------- */

function cabeca({ titulo, descricao, url, extra = "" }) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<script>document.documentElement.classList.add("js")</script>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>${esc(titulo)}</title>
<meta name="description" content="${esc(descricao)}">
<link rel="canonical" href="${SITE}${url}">

<meta property="og:type" content="article">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="${esc(MEDICO)}">
<meta property="og:title" content="${esc(titulo)}">
<meta property="og:description" content="${esc(descricao)}">
<meta property="og:url" content="${SITE}${url}">
<meta property="og:image" content="${SITE}/assets/marca/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">

<link rel="icon" href="../assets/marca/favicon-32.png" sizes="32x32">
<link rel="icon" href="../assets/marca/favicon-16.png" sizes="16x16">
<link rel="apple-touch-icon" href="../assets/marca/apple-touch-icon.png">
<meta name="theme-color" content="#FBFBFB">

<link rel="preload" href="../assets/fonts/open-sans-cd-300.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="../assets/fonts/open-sans-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="../assets/css/site.css">
<link rel="stylesheet" href="../assets/css/blog.css">
${extra}</head>

<body>
<a class="pular" href="#conteudo">Pular para o conteúdo</a>

<header class="topo">
  <div class="contem">
    <div class="topo-linha">
      <a class="marca" href="../" aria-label="${esc(MEDICO)} — página inicial">
        <img src="../assets/marca/simbolo-96.png" alt="" width="40" height="40">
        <span>
          <span class="marca-nome">${esc(MEDICO)}</span>
          <span class="marca-papel">Coloproctologista · CRM-PR 12.440</span>
        </span>
      </a>

      <nav class="nav" aria-label="Principal">
        <a href="../#consulta">A consulta</a>
        <a href="../#sobre">O médico</a>
        <a href="../#exames">Exames</a>
        <a href="../#doencas">Doenças</a>
        <a href="./">Blog</a>
        <a href="../#contato">Contato</a>
      </nav>

      <a class="btn btn-principal topo-cta" href="${zap("Olá! Gostaria de agendar uma consulta.")}" target="_blank" rel="noopener">Agendar consulta</a>

      <button class="btn-menu" type="button" aria-expanded="false" aria-controls="menu" aria-label="Abrir menu">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke-linecap="round"/></svg>
      </button>
    </div>

    <nav class="menu" id="menu" aria-label="Menu">
      <a href="../#consulta">A consulta</a>
      <a href="../#sobre">O médico</a>
      <a href="../#exames">Exames</a>
      <a href="../#doencas">Doenças</a>
      <a href="./">Blog</a>
      <a href="../#contato">Contato</a>
      <a class="btn btn-principal" href="${zap("Olá! Gostaria de agendar uma consulta.")}" target="_blank" rel="noopener">Agendar consulta</a>
    </nav>
  </div>
</header>
`;
}

/* ---------------------------- rodapé ---------------------------- */

function rodape() {
  return `
<footer class="rodape">
  <div class="contem">
    <div class="rodape-grade">
      <div>
        <img src="../assets/marca/simbolo-branco-96.png" alt="" width="44" height="44">
        <p class="rodape-nome">Dr. Norton Luiz <strong>Nóbrega</strong></p>
        <p style="margin-top: var(--e-2); font-size: var(--t-peq)">
          Coloproctologia — cirurgia e doenças clínicas do intestino grosso, do reto e do ânus.
        </p>
      </div>
      <div>
        <h3>Navegar</h3>
        <ul>
          <li><a href="../#consulta">A consulta</a></li>
          <li><a href="../#sobre">O médico</a></li>
          <li><a href="../#exames">Exames</a></li>
          <li><a href="../#doencas">Doenças</a></li>
          <li><a href="./">Blog</a></li>
        </ul>
      </div>
      <div>
        <h3>Contato</h3>
        <ul>
          <li><a href="${zap("Olá! Gostaria de agendar uma consulta.")}" target="_blank" rel="noopener">WhatsApp</a></li>
          <li><a href="tel:+554100000000">(41) 0000-0000</a></li>
          <li><a href="mailto:contato@exemplo.com.br">contato@exemplo.com.br</a></li>
          <li><a href="../#contato">Endereço e mapa</a></li>
        </ul>
      </div>
    </div>
    <div class="rodape-base">
      <p class="aviso">
        ${esc(MEDICO)} · ${REGISTRO}. O conteúdo deste site tem caráter informativo
        e não substitui a consulta médica, o diagnóstico nem o tratamento por
        profissional habilitado.
      </p>
      <p>© 2026</p>
    </div>
  </div>
</footer>

<nav class="zap-nav" aria-label="Agendamento">
<a class="zap" href="${zap("Olá! Gostaria de agendar uma consulta.")}" target="_blank" rel="noopener" aria-label="Agendar consulta pelo WhatsApp">
  ${ICONE_ZAP}
  <span class="zap-texto">Agendar consulta</span>
</a>
</nav>

<script src="../assets/js/site.js" defer></script>
`;
}

/* ---------------------------- página de artigo ---------------------------- */

function paginaPost(post, todos) {
  const url = `/blog/${post.slug}.html`;
  const tituloPagina = `${post.titulo} — ${MEDICO}, coloproctologista em Curitiba`;

  const jsonld = `<script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": post.titulo,
  "description": post.resumo,
  "url": `${SITE}${url}`,
  "inLanguage": "pt-BR",
  "lastReviewed": "2026-08-21",
  "author": { "@type": "Physician", "name": MEDICO, "url": `${SITE}/` },
  "publisher": { "@type": "Physician", "name": MEDICO, "url": `${SITE}/` },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Início", "item": `${SITE}/` },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE}/blog/` },
      { "@type": "ListItem", "position": 3, "name": post.titulo, "item": `${SITE}${url}` },
    ],
  },
}, null, 2)}
</script>
`;

  const secoes = post.corpo.map((s) => `
      <h2>${esc(s.h)}</h2>
${s.p.map((t) => `      <p>${esc(t)}</p>`).join("\n")}`).join("\n");

  // relacionados: mesmo grupo, exceto o próprio
  const relacionados = todos
    .filter((o) => o.grupo === post.grupo && o.slug !== post.slug)
    .slice(0, 3);

  const blocoRelacionados = relacionados.length ? `
<section class="secao" aria-labelledby="relacionados">
  <div class="contem">
    <p class="eyebrow">Leia também</p>
    <h2 id="relacionados" class="so-leitor">Artigos relacionados</h2>
    <div class="grade-3">
${relacionados.map((r) => `      <a class="cartao surge" href="${r.slug}.html">
        <span class="cartao-marca">${esc(r.categoria)}</span>
        <h3 class="cartao-titulo">${esc(r.titulo)}</h3>
        <p class="cartao-texto">${esc(r.resumo)}</p>
      </a>`).join("\n")}
    </div>
  </div>
</section>` : "";

  const msg = `Olá! Li a página sobre ${post.titulo} e gostaria de agendar uma consulta.`;

  return cabeca({ titulo: tituloPagina, descricao: post.resumo, url, extra: jsonld }) + `
<main id="conteudo" class="envoltorio">

<article class="artigo">
  <div class="contem">
    <nav class="migalhas" aria-label="Você está em">
      <a href="../">Início</a>
      <span aria-hidden="true">/</span>
      <a href="./">Blog</a>
      <span aria-hidden="true">/</span>
      <span aria-current="page">${esc(post.titulo)}</span>
    </nav>

    <header class="artigo-topo">
      <p class="eyebrow">${esc(post.categoria)}</p>
      <h1>${esc(post.titulo)}</h1>
      <p class="artigo-resumo">${esc(post.resumo)}</p>
    </header>

    <div class="artigo-corpo">${secoes}
    </div>

    <aside class="artigo-cta">
      <h2>Está com esse quadro?</h2>
      <p>
        Cada caso é diferente e só o exame permite distinguir causas parecidas.
        O agendamento é direto pelo WhatsApp, com a secretária.
      </p>
      <a class="btn btn-principal" href="${zap(msg)}" target="_blank" rel="noopener">
        ${ICONE_ZAP}
        Agendar consulta no WhatsApp
      </a>
    </aside>

    <p class="artigo-aviso">
      Texto informativo, escrito e revisado por ${esc(MEDICO)}, ${REGISTRO}.
      Não substitui a consulta médica, o diagnóstico nem o tratamento por profissional habilitado.
    </p>
  </div>
</article>
${blocoRelacionados}
</main>
` + rodape() + `</body>
</html>
`;
}

/* ---------------------------- índice do blog ---------------------------- */

function paginaIndice(todos) {
  const grupos = ["doencas", "exames", "dicas"];

  const filtros = `      <button class="filtro filtro-ativo" type="button" data-grupo="todos">Todos <span class="filtro-n">${todos.length}</span></button>
${grupos.map((g) => `      <button class="filtro" type="button" data-grupo="${g}">${esc(GRUPOS[g])} <span class="filtro-n">${todos.filter((p) => p.grupo === g).length}</span></button>`).join("\n")}`;

  const cartoes = todos.map((p) => `      <a class="cartao surge" href="${p.slug}.html" data-grupo="${p.grupo}">
        <span class="cartao-marca">${esc(p.categoria)}</span>
        <h2 class="cartao-titulo">${esc(p.titulo)}</h2>
        <p class="cartao-texto">${esc(p.resumo)}</p>
      </a>`).join("\n");

  const jsonld = `<script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": `Blog — ${MEDICO}`,
  "url": `${SITE}/blog/`,
  "inLanguage": "pt-BR",
  "blogPost": todos.map((p) => ({
    "@type": "BlogPosting",
    "headline": p.titulo,
    "description": p.resumo,
    "url": `${SITE}/blog/${p.slug}.html`,
  })),
}, null, 2)}
</script>
`;

  return cabeca({
    titulo: `Blog — doenças, exames e prevenção | ${MEDICO}`,
    descricao: "Doenças do intestino grosso, do reto e do ânus, exames da coloproctologia e orientações de prevenção, explicados em linguagem direta.",
    url: "/blog/",
    extra: jsonld,
  }) + `
<main id="conteudo" class="envoltorio">

<section class="secao secao-primeira">
  <div class="contem">
    <div class="cabeca">
      <p class="eyebrow surge">Blog</p>
      <h1 class="surge">Sobre o que <strong>quase ninguém fala</strong>.</h1>
      <p class="cabeca-intro surge">
        Doenças, exames e prevenção em coloproctologia, explicados sem jargão.
        Se você reconhecer o seu caso em algum destes textos, já é motivo para consultar.
      </p>
    </div>

    <div class="filtros" role="group" aria-label="Filtrar artigos por assunto">
${filtros}
    </div>

    <p class="filtro-vazio" hidden>Nenhum artigo neste assunto ainda.</p>

    <div class="grade-3" id="lista">
${cartoes}
    </div>
  </div>
</section>

</main>
` + rodape() + `<script src="../assets/js/blog.js" defer></script>
</body>
</html>
`;
}

/* ---------------------------- execução ---------------------------- */

// Limpa os HTML gerados na rodada anterior, para que um artigo removido de
// conteudo.mjs não fique órfão no repositório. Arquivos com "_" na frente
// (como _modelo-post.html) são escritos à mão e ficam de fora.
for (const f of readdirSync(BLOG)) {
  if (f.endsWith(".html") && !f.startsWith("_")) unlinkSync(join(BLOG, f));
}

const slugs = new Set();
for (const p of posts) {
  if (slugs.has(p.slug)) throw new Error(`slug repetido: ${p.slug}`);
  slugs.add(p.slug);
  for (const campo of ["titulo", "grupo", "categoria", "resumo", "corpo"]) {
    if (!p[campo]) throw new Error(`${p.slug}: falta o campo "${campo}"`);
  }
  if (!GRUPOS[p.grupo]) throw new Error(`${p.slug}: grupo desconhecido "${p.grupo}"`);
  writeFileSync(join(BLOG, `${p.slug}.html`), paginaPost(p, posts));
}

writeFileSync(join(BLOG, "index.html"), paginaIndice(posts));

writeFileSync(join(BLOG, "posts.json"), JSON.stringify(
  posts.map(({ slug, titulo, grupo, categoria, resumo }) => ({
    slug, titulo, grupo, categoria, resumo, url: `${slug}.html`,
  })), null, 2) + "\n");

// sitemap
const urls = [
  { loc: `${SITE}/`, pri: "1.0" },
  { loc: `${SITE}/blog/`, pri: "0.8" },
  ...posts.map((p) => ({ loc: `${SITE}/blog/${p.slug}.html`, pri: "0.6" })),
];
writeFileSync(join(RAIZ, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc><changefreq>monthly</changefreq><priority>${u.pri}</priority></url>`).join("\n")}
</urlset>
`);

writeFileSync(join(RAIZ, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

const porGrupo = Object.keys(GRUPOS)
  .map((g) => `${GRUPOS[g]}: ${posts.filter((p) => p.grupo === g).length}`)
  .join(" · ");

console.log(`${posts.length} artigos gerados (${porGrupo})`);
console.log(`blog/index.html, blog/posts.json, sitemap.xml e robots.txt atualizados`);
