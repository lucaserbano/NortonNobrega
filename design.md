# Identidade visual — Norton Luiz Nóbrega

Documento de referência do site. Define cor, tipografia, espaço, movimento, fotografia e voz. Se uma decisão não estiver aqui, ela ainda não foi tomada.

---

## 1. A tese

O paciente que chega neste site quase sempre não tem dúvida sobre a competência do médico. Ele tem **vergonha**. O próprio Dr. Norton escreveu isso no texto do site antigo:

> É conhecido o medo, resistência e a vergonha da exposição na consulta ao Coloproctologista. Muitas vezes os pacientes sofrem por longos períodos, gastam com medicamentos inadequados e mal indicados.

Então o site não precisa impressionar. Precisa **desarmar**. A decisão que organiza todas as outras:

**Nomear o sintoma sem eufemismo é o acolhimento.** Escrever "sangramento ao evacuar" e "um caroço que apareceu" — em vez de "desconfortos da região" — sinaliza que ali é um lugar onde se fala disso em voz normal. O design segue: claro, respirado, sem drama, sem estoque de imagem sorridente genérica.

O trabalho da página é uma coisa só: **fazer o paciente se sentir seguro o bastante para mandar a mensagem no WhatsApp.**

---

## 2. Cor

Fundo claro, tinta escura, ouro como estrutura. Nada mais.

| Token | Hex | Papel |
|---|---|---|
| `--areia` | `#FBFBFB` | Fundo padrão de todas as páginas |
| `--nevoa` | `#F3F2F1` | Superfície secundária — usar com parcimônia (destaque do tabu, faixa de CTA) |
| `--tinta` | `#2D2D2D` | Títulos; fundo das faixas escuras e do rodapé |
| `--grafite` | `#424345` | Texto corrido |
| `--ouro` | `#C88F4A` | **Estrutura, nunca texto.** O fio, hairlines, ícones, filetes |
| `--ouro-fundo` | `#8F5C0B` | Onde o ouro precisa carregar texto: links, preenchimento de botão |
| `--linha` | `rgba(200,143,74,.22)` | Divisórias de 1px |

### A regra do ouro

`#C88F4A` sobre `#FBFBFB` dá **2,71:1**. Reprova em qualquer critério WCAG, para qualquer tamanho de texto. Também reprova o inverso — texto branco sobre preenchimento `#C88F4A` dá os mesmos 2,71:1.

**`#C88F4A` nunca recebe nem carrega texto.** Ele é linha, ícone e filete. Quando o ouro precisa virar link ou botão, usa-se `#8F5C0B`, que dá **5,48:1**.

Este é o erro fácil de cometer daqui a seis meses. Está escrito aqui para não ser cometido.

### Contrastes verificados

Todos calculados, não estimados:

| Combinação | Razão | |
|---|---|---|
| `--tinta` sobre `--areia` | 13,31:1 | AAA |
| `--grafite` sobre `--areia` | 9,57:1 | AAA |
| `--ouro-fundo` sobre `--areia` | 5,48:1 | AA |
| `--areia` sobre `--ouro-fundo` | 5,48:1 | AA |
| `--areia` sobre `--tinta` | 13,31:1 | AAA |
| `--ouro` sobre `--tinta` | 4,91:1 | AA — o fio funciona sobre fundo escuro |
| `--grafite` sobre `--nevoa` | 8,86:1 | AAA |
| ~~`--ouro` sobre `--areia`~~ | 2,71:1 | **reprova — proibido para texto** |
| ~~`--ouro` sobre tinta com película branca a 6%~~ | 4,12:1 | **reprova — ver as pílulas de filtro em §9** |

### O gradiente dourado da faixa "O que costuma travar"

É o único gradiente do site, e existe porque foi pedido: "um gradiente leve entre os dourados da paleta". A restrição é a mesma regra do ouro — `--ouro` (`#C88F4A`) contra `#FBFBFB` dá **2,02:1** sobre o `--ouro-fundo`, então ele não pode ficar atrás de texto em hipótese alguma.

| | Direção | Extremos | Onde o claro cai |
|---|---|---|---|
| ≥900px | `to right` | `#8F5C0B` → `--ouro` | depois de 72%, atrás da foto opaca |
| <900px | `to bottom` | `#8F5C0B` → `#96600D` | em lugar nenhum: tudo passa (mín. 5,11:1) |

**A direção é horizontal de propósito, não diagonal.** Numa diagonal a cor de cada ponto depende também da altura da faixa; no mobile, faixa estreita e alta, o extremo claro descia para trás do texto e o contraste caía a **2,8:1**. Na horizontal a cor depende só do `x`, que é previsível.

Isso não se confere no olho nem na tabela: mede-se o pixel renderizado atrás de cada trecho de texto. Ver §12.

### O que não usar

Gradiente, sombra colorida, segundo acento, verde de WhatsApp como cor de interface. O botão flutuante do WhatsApp usa `--ouro-fundo` com o glifo em branco — o ícone já o torna reconhecível, e a paleta permanece inteira.

---

## 3. Tipografia

Uma família só, num rosto só: **Open Sans**, na largura normal. A hierarquia vem de **peso e tamanho**, não de uma segunda fonte nem de uma segunda largura.

As variantes Condensed e SemiCondensed foram descartadas (agosto de 2026, a pedido do Lucas). Elas davam uma voz de display própria, mas apertavam o texto: o título ocupava menos largura e acabava empilhado num bloco estreito à esquerda, com aparência espremida. A Open Sans normal em Light 300 sustenta o display sozinha, e o texto se distribui com naturalidade.

### Papéis

| Papel | Fonte | Uso |
|---|---|---|
| **Display** | Open Sans **Light 300** | Títulos grandes. Palavras de ênfase na mesma linha em **ExtraBold 800** |
| **Corpo** | Open Sans **Regular 400** / SemiBold 600 | Texto corrido |
| **Utilitário** | Open Sans **Bold 700** | Eyebrows, rótulos, metadados, em caixa alta com `letter-spacing: .14em` |

O contraste Light↔ExtraBold **dentro da mesma linha** continua sendo a assinatura tipográfica. Uma ênfase por título, no máximo. Se tudo é ênfase, nada é.

### Escala

Fluida com `clamp()`, sem breakpoints de tipo. Os valores caíram junto com a troca de largura: a Open Sans normal ocupa mais espaço por caractere que a Condensed, e a escala antiga estourava a coluna.

```css
--t-display: clamp(2.35rem, 4.9vw, 4rem);    /* h1, Light 300, lh 1.08, ls -.018em */
--t-h2:      clamp(1.7rem,  3.2vw, 2.6rem);  /* h2, Light 300, lh 1.15             */
--t-h3:      clamp(1.15rem, 1.4vw, 1.3rem);  /* h3, Bold 700                       */
--t-lead:    clamp(1.1rem,  1.5vw, 1.3rem);  /* subtítulo do hero, Regular 400     */
--t-corpo:   1.0625rem;                      /* Regular 400, lh 1.75               */
--t-peq:     .9375rem;
--t-eyebrow: .75rem;                         /* Bold 700, caixa alta, ls .14em     */
```

`h1` e `h2` levam `text-wrap: balance`, e a intro de seção leva `text-wrap: pretty`. É o que impede a última linha órfã e a silhueta em escada que aparecia quando o título tinha medida curta demais.

Medidas máximas: **68ch** no texto corrido, **30ch** nos títulos de seção, **62ch** na intro. A medida vai sempre no próprio elemento, nunca no contêiner: `ch` resolve contra a fonte do elemento em que está escrito.

### Arquivos

Auto-hospedados em `assets/fonts/`, subsetados em latin, `.woff2`, ~10KB cada. Sem requisição ao Google, o que é mais rápido e melhor para LGPD.

| Arquivo | Família CSS | Peso |
|---|---|---|
| `open-sans-300.woff2` | `Open Sans` | 300 |
| `open-sans-400.woff2` | `Open Sans` | 400 |
| `open-sans-600.woff2` | `Open Sans` | 600 |
| `open-sans-700.woff2` | `Open Sans` | 700 |
| `open-sans-800.woff2` | `Open Sans` | 800 |

`font-display: swap`. `preload` apenas em `300` e `400`, as duas que o hero precisa no primeiro quadro.

O subset inclui a faixa `U+2190-2193`: a seta `→` dos links e dos cartões é texto, e sem ela caía numa fonte de sistema.

---

## 4. Marca

O símbolo é um traço contínuo, desenhado à mão, do cólon. É o único ativo gráfico da marca e o melhor que ela tem: orgânico, específico, nada corporativo.

**Não existe versão com tipografia.** O lockup é montado: símbolo + nome em Open Sans.

```
┌─────┐  Norton Luiz Nóbrega        ← Open Sans SemiBold 600
│ ~~~ │  COLOPROCTOLOGISTA · CRM-PR 12.440   ← Bold 700, caixa alta, ouro
└─────┘
  40px    respiro à esquerda: 16px
```

- Área de respiro mínima em volta do símbolo: **50% da sua altura**.
- Tamanho mínimo do símbolo: **32px**. Abaixo disso o traço fecha e vira mancha.
- Sobre fundo claro: `simbolo-*.png`. Sobre fundo escuro: `simbolo-branco-*.png`.
- **Nunca:** recolorir para fora da paleta, aplicar sombra ou contorno, distorcer, girar, ou pôr sobre foto de área movimentada.

Arquivos em `assets/marca/` — símbolo em 32/96/180/240/512px, versão branca em 96/240/512px, favicons e `og.jpg` (1200×630).

---

## 5. O fio — elemento de assinatura

A logo é uma linha só que não se interrompe. O site pega essa linguagem de traço e a estende: **um fio dourado contínuo percorre a página de cima a baixo.**

- Desce pela calha esquerda, em **72px reservados** no desktop, **começando abaixo do topo fixo**. Nascendo em `top: 0` os primeiros 77px ficavam atrás do cabeçalho: os primeiros 8% de rolagem não moviam nada visível.
- **Preenche conforme o scroll**, com `stroke-dashoffset` atrelado à posição na página e não a um timer. A trilha mostra o caminho inteiro; o traço mostra o quanto já foi lido.
- **O preenchimento é CSS, não JavaScript.** O `<path>` leva `pathLength="1"`, então o traço inteiro mede 1 e o preenchimento é o próprio `stroke-dashoffset` indo de 1 a 0. Um `@supports (animation-timeline: scroll())` prende isso à rolagem da raiz, e o navegador resolve no compositor: não passa pelo main thread e não tem como ficar um quadro atrás do conteúdo. O JS em `site.js` é só o caminho de fallback, para quem ainda não suporta.
- Isso o torna também um **indicador de progresso de leitura**: ele informa, não só decora. Por isso ele é lido antes de ser bonito, e em agosto de 2026 ganhou peso para valer o nome: trilha `stroke-width: 2.5` em `--ouro` a 18%, traço `stroke-width: 5` em `--ouro-fundo`, opaco.
- O traço leva dois halos: um claro de 2px e um dourado de 8px. O claro só aparece sobre as faixas ouro e escura, onde o `--ouro-fundo` teria pouco contraste; sobre a areia ele é invisível. Sem isso o fio sumia justamente nas duas faixas de maior peso da página.
- Em "Como é uma consulta", a linha do tempo repete o gesto num trilho pontilhado próprio (ver §9). É CSS, não SVG: o trilho troca de eixo quando os passos empilham, coisa que um `viewBox` fixo não faz.
- Especificação: `--ouro` / `--ouro-fundo`, `stroke-linecap: round`, sem preenchimento, `vector-effect: non-scaling-stroke`.
- **Continua atrelado ao scroll com "reduzir movimento" ligado** — ver §8. É a única exceção do site àquela regra, e é deliberada.
- **Não aparece abaixo de 900px.** No mobile o espaço é do conteúdo.

O eco do fio no nível do bloco não é mais o traço do eyebrow (que saiu da maioria das seções, ver §9): é **a régua do cartão sendo varrida** na entrada, um fio dourado que atravessa a linha de cima da esquerda para a direita e assenta na hairline neutra ao chegar.

É a anatomia da especialidade usada como espinha de navegação da página. Não dá para transplantar para o site de outro médico — e é por isso que está aqui.

**É a única ousadia do projeto.** Tudo em volta fica quieto: hairlines em vez de cards com sombra, muito branco, sem gradiente. Se algum outro elemento começar a disputar atenção com o fio, ele é que sai.

---

## 6. Espaço e grade

O espaço negativo é material de projeto, não sobra.

```css
--largura-max:  1180px;   /* conteúdo                    */
--calha-fio:      72px;   /* reservada ao fio, ≥900px     */
--medida:         68ch;   /* medida do texto corrido      */

--e-1: .5rem;   --e-2: 1rem;    --e-3: 1.5rem;
--e-4: 2.5rem;  --e-5: 4rem;    --e-6: 6rem;
--e-secao: clamp(5rem, 11vw, 11.25rem);   /* 80 → 180px entre seções */
```

- Respiro entre seções: **120–180px** no desktop, 80px no mobile. Generoso de propósito.
- Composição assimétrica: o conteúdo não fica centralizado por padrão. Texto ancora à esquerda, imagem contrabalança à direita.
- **Divisórias são hairlines de 1px em `--linha`**, nunca caixas. Nada de card com sombra e canto arredondado.
- Raio de borda: **0 em tudo**, exceto botões e o flutuante do WhatsApp (`border-radius: 999px`).

---

## 7. Fotografia

O acervo tem 10 fotos originais. Direção: luz natural, fundo claro, olhar na câmera, zero pose clínica encenada.

| Arquivo | Uso | Observação |
|---|---|---|
| `norton-formal` (`Norton 21`) | **Retrato principal** — "Quem é" e OG | Fundo claro, jaleco com o nome dele bordado. Sem marca de terceiro |
| `consultorio-mesa` (`IMG_5441`) | "Como é uma consulta" | Ele à mesa, jaleco |
| `consultorio-exames` (`IMG_5482`) | Sala de exames | Ambiente, não procedimento |
| `hero-fallback` (`IMG_5426`) | Poster do vídeo e fallback do hero | Terno claro, consultório |
| `norton-retrato` (`Norton 28`) | Reserva | **Tem o logo "Sasawa" no jaleco** — evitar em peça de marca |

**Não usar:** `IMG_5479` — mostra o cartão com a marca antiga "COLOPROCTO DOC". As quatro fotos de fundo preto destoam do site claro; ficam de reserva.

**Tratamento:** sem filtro, sem duotone, sem sobreposição dourada. As fotos são quentes o suficiente. `.webp` em 800/1200/1600px com `srcset`, `width`/`height` sempre declarados.

**Duas faixas usam a foto como plano de fundo, não como figura:** "O que costuma travar" (foto à direita, dissolvendo no dourado) e "O médico" (foto à esquerda, dissolvendo na areia). Ver `.secao-retrato` em §9. As demais fotos continuam sendo figuras normais, com corte livre.

---

## 8. Movimento

Suave e discreto. O movimento confirma que algo chegou; não anuncia a si mesmo.

```css
--dur-rapida: 200ms;   /* hover, foco            */
--dur-media:  300ms;   /* cor, fundo             */
--dur-lenta:  700ms;   /* reveal de entrada      */
--ease:       cubic-bezier(.22, .61, .36, 1);
```

- **Reveal:** `opacity 0→1` + `translateY(12px→0)`, 700ms, stagger de **80ms** entre irmãos. Uma vez só — não reanima ao voltar.
- **Hero:** sequência orquestrada no load — eyebrow → linhas do título → subtítulo → CTA → mídia (`scale(.98)→1`). Total ≤ 1,2s.
- **O fio:** desenha-se com o scroll, atrelado à posição, não a um timer.
- **Três entradas, não uma.** Uma única entrada idêntica repetida em cada bloco ("tudo sobe 12px") é o reflexo uniforme: o movimento para de dizer qualquer coisa sobre o que está chegando e vira textura. Cada entrada é a do conteúdo que ela revela:

| Classe | Onde | O que faz |
|---|---|---|
| `.surge` | texto, títulos, itens de lista | sobe 12px e aparece |
| `.surge-cartao` | cartões | não sobe: o fio dourado varre a régua de cima e assenta na hairline |
| `.surge-passo` | passos da consulta | o painel aparece e o selo numerado cresce do centro, 160ms depois |

- **Curvas:** `--ease` é uma quart (`cubic-bezier(.25, 1, .5, 1)`) para mudança de estado; `--ease-entrada` é uma expo (`cubic-bezier(.16, 1, .3, 1)`) para entrada. Sem bounce, sem elástico.
- **Estado `:active` em tudo que é clicável.** No celular, sem o retorno do aperto a pessoa toca duas vezes achando que não pegou.
- **Hover:** botão muda de fundo em 300ms; link cresce sublinhado da esquerda para a direita.
- **Proibido:** parallax, contador animado, carrossel automático, entrada em `scale` grande, qualquer coisa que atrase a leitura.

### Movimento reduzido

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}
```

O vídeo do hero não roda em autoplay: mostra o poster com botão de play.

**Exceção deliberada: o fio continua acompanhando o scroll.** Até agosto de 2026 ele aparecia inteiro desenhado e imóvel, e isso tirava o indicador de progresso justamente de quem liga "reduzir movimento" — quem mais depende de referência estável de onde está numa página longa. O fio não se move sozinho: ele reflete um gesto do próprio leitor, que é o critério que a própria especificação usa para separar animação de resposta. Na prática é uma regra a mais no bloco, porque o `animation-duration: .01ms !important` universal completava a linha no primeiro pixel de rolagem:

```css
@supports (animation-timeline: scroll()) {
  .fio-traco { animation-duration: auto !important; }
}
```

---

## 9. Componentes

**Botão principal** — preenchimento `--ouro-fundo`, texto `--areia`, `border-radius: 999px`, padding `1rem 2rem`, SemiBold 600. Hover: fundo `--tinta`. Alvo mínimo de toque: **44×44px**.

**Botão secundário** — sem preenchimento, texto `--tinta`, borda 1px `--linha`. Hover: borda `--ouro`.

**Link de texto** — `--ouro-fundo`, sublinhado por `background-image` que cresce da esquerda no hover.

**Eyebrow** — Bold 700, caixa alta, `.14em`, cor `--ouro-fundo`, precedido de um traço de 24px em `--ouro`.

**Cadência dos eyebrows: no máximo três na página, nunca um por seção.** Rótulo minúsculo em caixa alta acima de *todo* título é andaime, não voz: ele aparece porque "landing page tem isso", e a página inteira passa a abrir do mesmo jeito. Ficaram quatro, cada um com razão própria:

| Onde | Por que fica |
|---|---|
| hero | "Coloproctologia · Curitiba" é informação, não rótulo: diz a especialidade e a cidade no primeiro segundo |
| Quando procurar | é instrução, e é a seção de maior conversão |
| Exames, Doenças | destinos do menu cujo `<h2>` não repete o nome da seção; sem o rótulo, quem chega pelo link não confirma que chegou |

Saíram de "Como é uma consulta", "O que costuma travar", "O médico", "Agendamento", "Do blog" e "Contato" — em todas elas o próprio título ou a primeira linha da intro já nomeia a seção. O ganho não é só evitar o clichê: as seções passam a abrir de formas diferentes, e isso é ritmo.

**Índice de sintomas** (`.sintomas`) — linha larga com o sintoma em corpo grande à esquerda, explicação ao lado, régua entre as linhas, seta sempre visível na ponta. Substituiu uma grade de seis cartões. A razão é o trabalho que o leitor faz ali: ele não está comparando seis opções, está varrendo atrás de uma que seja a dele, e varrer uma coluna é mais rápido do que pular entre cartões. De quebra, a página deixa de repetir o mesmo cartão em três seções seguidas.

**Cartão de sintoma / doença** — sem caixa. Hairline no topo, título em Bold 700, uma linha de corpo e, no pé, a chamada `.cartao-mais` ("Entender este sintoma →"). A chamada não é enfeite: sem ela o cartão parecia texto solto e ninguém percebia que era clicável. Hover: hairline vira `--ouro`, o bloco sobe 2px e a seta avança 4px.

**Dica de clique** (`.dica-clique`) — no cabeçalho de toda seção cujos itens são clicáveis: ícone de ponteiro em traço + uma linha em `--ouro-fundo` dizendo o que acontece ao clicar. Existe porque o cartão sem caixa e a lista com hairline são discretos demais para se anunciarem sozinhos.

**Linha do tempo da consulta** (`.passos`) — selo numerado de 3,5rem montado sobre um trilho pontilhado, com o painel do passo pendurado abaixo. O selo tem anel de 6px na cor da faixa: é o anel que "corta" o trilho, dando a leitura de conta enfiada num fio. Horizontal em ≥900px, vertical abaixo disso. O trecho do trilho é desenhado pelo passo que **chega** nele no desktop (`::before`) e pelo passo que **sai** dele no mobile (`::after`) — sempre por cima de um painel já pintado, nunca por baixo do próximo, que é o que evita o trilho sumir sob o fundo do painel vizinho.

**Cartão de credencial** (`.cred`) — ícone em traço, ano em `--ouro-fundo`, título em Bold 700, instituição em corpo pequeno. Substituiu a lista de bullets do currículo, que era longa e não se lia.

**Retrato de fundo** (`.secao-retrato` + `.retrato-dir` / `.retrato-esq`) — a foto ocupa um dos lados da faixa e se dissolve para dentro dela. O que faz a dissolução é uma **máscara na imagem**, não uma sobreposição de cor por cima: assim não existe emenda a acertar entre a foto e o fundo, seja ele o gradiente dourado ou a areia da página, e mudar o fundo não exige mexer na foto. A rampa da máscara termina antes da coluna de texto — nenhuma letra cai sobre pixel de foto. Empilhado, a foto sai do fundo e vira um bloco no topo da faixa, sangrando de borda a borda e dissolvendo para baixo, com o texto inteiro embaixo.

**Marca d'água** (`.marca-dagua`) — o símbolo em corpo grande, `height: 110%` da seção, opacidade 7%, encostado na borda direita. O recuo é `transform: translate(35%, -50%)`, proporcional à **própria marca** e não à seção: assim o enquadramento é o mesmo numa faixa curta e numa faixa longa. Decorativa de verdade — `aria-hidden`, `alt` vazio, `pointer-events: none`. Versão ouro sobre fundo claro, versão branca sobre `--tinta`.

**Faixa de capa do blog** (`.capa`, sobre `.secao-escura`) — o blog abre em tinta, do cabeçalho até o começo da lista, e volta para a areia dali em diante. É a única área do site que não vende consulta: quem chega ali está lendo, e a troca de fundo diz isso antes de qualquer texto. No índice a faixa carrega o título, a intro e a barra de filtros; na página de artigo, as migalhas, o assunto, o `<h1>` e o resumo. Marca d'água branca nas duas.

**Pílulas de filtro** (`.filtro`) — só contorno em repouso, preenchimento em `--areia` quando ativa. **Sem película de fundo**: `rgba(251,251,251,.06)` levava o pixel renderizado a `#393939`, e o ouro do contador caía de 4,91:1 para **4,12:1**. O hover acende a borda, não o fundo, pela mesma razão. A borda em repouso é `rgba(251,251,251,.38)`, que é o mínimo para render os 3:1 de contorno sobre a tinta. Esse foi mais um caso em que a cor declarada passa e o pixel reprova: medir renderizado, sempre.

**Assunto do artigo** (`.artigo-tag`) — pílula de contorno em `--ouro`, e não outro eyebrow. Logo acima dela já corre a trilha de migalhas, que é Bold 700 em caixa alta: dois versaletes empilhados viravam ruído e nenhum dos dois se lia como o principal. A pílula muda de forma, não só de cor.

**Corpo do artigo em calha** (`.artigo-corpo > section`) — os textos do blog têm de 40 a 130 palavras. Num bloco único de 68ch, metade da página ficava vazia à direita e o artigo parecia inacabado. Cada trecho virou uma faixa horizontal: `<h2>` numa calha de 16rem à esquerda, parágrafos ao lado, régua entre as faixas. A **composição** ocupa a largura inteira; a **linha de leitura** continua presa em 66ch. Abaixo de 900px empilha, com o título acima do texto. O CTA do fim do artigo entra na mesma grade, para o convite cair na coluna do texto e não parecer um bloco avulso colado no pé.

**Foco visível** — `outline: 2px solid var(--ouro-fundo); outline-offset: 3px`. Nunca removido.

**Faixa de credenciais** (`.credenciais`) — fundo `--grafite` (`#424345`), títulos em `--areia` (**9,57:1**) e detalhe em `rgba(251,251,251,.86)` (**7,58:1**). O ouro **não serve aqui**: `#C88F4A` sobre grafite dá 3,53:1, que reprova para texto de corpo pequeno. É a faixa escura logo abaixo do hero, e ela separa o hero do índice de sintomas sem precisar de filete.

**Selo da SBCP** (`.credencial-selada`) — o selo da Sociedade Brasileira de Coloproctologia acompanha **só** a credencial de Membro, na faixa acima. Espalhá-lo pela faixa daria a entender que a sociedade chancela a formação inteira. **Cor original preservada: é marca de terceiro, não se recolore.** Como o verde `#007C39` sobre o grafite cairia para 1,86:1, o que muda é o que está atrás dele — um disco em `--areia` por baixo. Sobre esse disco o verde dá 5,15:1.

**Rodapé, linha final** (`.rodape-base`) — grade de duas colunas, não flex. Como item flex o aviso legal não crescia (`flex-grow` é 0 por padrão) e se espremia em três linhas curtas à esquerda com um vazio enorme ao lado, por mais que a `max-width` aumentasse. Na grade ele ocupa a coluna inteira, em duas linhas de ~96 caracteres. É medida longa para leitura corrida, e deliberada: é texto legal de rodapé, não copy. A entrelinha sobe para 1,75 para o olho achar a linha seguinte.

**Mapa** (`.mapa`) — a cores. Nasceu em `grayscale(1)` revelando cor no hover; o cliente pediu colorido, e a dessaturação de fato escondia a única informação que o mapa carrega (onde é) atrás de uma interação que ninguém descobre.

---

## 10. Voz

**Quem fala é o próprio médico.** O site inteiro está em primeira pessoa: "eu cuido disso", "explico o que você tem", "a técnica eu escolho junto com você". Nunca "o Dr. Norton faz", nunca "o médico avalia". O nome dele aparece como assinatura (rodapé, `cite` da citação, aviso do artigo), não como sujeito da frase.

**Sem travessão.** Nenhum `—` no texto publicado. Onde havia travessão entrou vírgula, dois-pontos ou uma frase nova. Vale para títulos, `<title>`, `og:title` e `aria-label` também. O separador da marca é `·`.

Segunda pessoa para o leitor, frases curtas, verbo no presente.

- **Nomeie o sintoma.** "Sangramento ao evacuar", não "desconforto na região".
- **Nada de promessa.** "Quase sempre tem solução" — nunca "cura garantida". Além de ser verdade, é exigência do CFM.
- **Sem jargão sem tradução.** Se "retossigmoidoscopia" aparece, a frase seguinte explica.
- **Sem alarme.** O paciente já está assustado; o texto não aumenta a aposta.
- **CTA diz o que acontece.** "Agendar consulta no WhatsApp" — não "Saiba mais", não "Clique aqui".

**Exemplo — hero:**

> COLOPROCTOLOGIA · CURITIBA · CRM-PR 12.440 · RQE 5531
>
> # Ninguém deveria conviver com isso **em silêncio**.
>
> Sangramento, dor ao evacuar, um nódulo que apareceu. São queixas comuns, têm nome e quase sempre têm solução. Há mais de 30 anos eu cuido disso, com privacidade absoluta e sem constrangimento.

---

## 11. Acessibilidade e conformidade

**Piso obrigatório**

- Todo par de cor ≥ 4,5:1, verificado (seção 2).
- Site inteiro navegável por teclado, com foco sempre visível.
- Um só `<h1>` por página; hierarquia de títulos sem pular nível.
- `alt` descritivo em toda imagem de conteúdo; `alt=""` no que é decoração.
- `prefers-reduced-motion` respeitado.
- **Funciona sem JavaScript** — conteúdo e links de WhatsApp continuam válidos.
- Alvo de toque ≥ 44×44px.

**CFM** (Res. 1.974/2011 e 2.336/2023)

- Nome, **CRM-PR 12.440** e **RQE 5531** visíveis em todas as páginas.
- Aviso de que o conteúdo é informativo e não substitui consulta.
- Sem promessa de resultado, sem antes-e-depois, sem depoimento de paciente.
- Sem imagem de procedimento cirúrgico com fim promocional — **inclusive no vídeo do hero**: nada de paciente identificável nem de anatomia de procedimento.

---

## 12. Checklist antes de publicar

- [ ] Nenhum texto em `#C88F4A`
- [ ] Nenhum elemento com borda de 1px **e** `box-shadow` de desfoque ≥16px (o padrão "ghost-card": escolhe-se um dos dois)
- [ ] No máximo três eyebrows na página
- [ ] Nenhum travessão (`—`) no texto publicado
- [ ] Nenhuma citação do médico em terceira pessoa
- [ ] Nenhuma fonte Condensed ou SemiCondensed carregada
- [ ] O fio acompanha o scroll nos dois caminhos (nativo e fallback JS) **e com "reduzir movimento" ligado**
- [ ] O fio some abaixo de 900px
- [ ] Sem scroll horizontal em 375 / 768 / 1024 / 1440 / 1920
- [ ] Percurso completo por teclado, foco visível em cada parada
- [ ] "Reduzir movimento" ligado: nada anima, mas o fio continua marcando a posição
- [ ] JavaScript desligado: conteúdo e WhatsApp funcionando
- [ ] CRM e RQE em todas as páginas
- [ ] Toda imagem com `width`/`height` e `alt`
- [ ] Nenhuma marca de terceiro visível nas fotos publicadas
- [ ] Contraste **medido no pixel renderizado** atrás do texto das duas faixas com retrato de fundo, não estimado pela cor do CSS
