# Identidade visual — Dr. Norton Luiz Nóbrega

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

### O que não usar

Gradiente, sombra colorida, segundo acento, verde de WhatsApp como cor de interface. O botão flutuante do WhatsApp usa `--ouro-fundo` com o glifo em branco — o ícone já o torna reconhecível, e a paleta permanece inteira.

---

## 3. Tipografia

Uma família só: **Open Sans**. A hierarquia vem de **contraste de largura e peso**, não de uma segunda fonte.

O cliente já tem a superfamília inteira — Regular, SemiCondensed e Condensed, de Light a ExtraBold. Usá-la em três larguras dá uma voz de display própria sem importar nada, e evita a serifada de alto contraste que aparece em todo site de consultório.

### Papéis

| Papel | Fonte | Uso |
|---|---|---|
| **Display** | Open Sans Condensed **Light 300** | Títulos grandes. Palavras de ênfase na mesma linha em **Condensed ExtraBold 800** |
| **Corpo** | Open Sans **Regular 400** / SemiBold 600 | Texto corrido |
| **Utilitário** | Open Sans SemiCondensed **Bold 700** | Eyebrows, rótulos, metadados — caixa alta, `letter-spacing: .14em` |

O contraste Light↔ExtraBold **dentro da mesma linha** é a assinatura tipográfica. Uma ênfase por título, no máximo. Se tudo é ênfase, nada é.

### Escala

Fluida com `clamp()`, sem breakpoints de tipo.

```css
--t-display: clamp(2.75rem, 7vw,   5.5rem);   /* h1  — Condensed 300, lh .98, ls -.02em */
--t-h2:      clamp(1.9rem,  4vw,   3rem);     /* h2  — Condensed 300, lh 1.05           */
--t-h3:      clamp(1.15rem, 1.4vw, 1.3rem);   /* h3  — SemiCondensed 700                */
--t-lead:    clamp(1.1rem,  1.5vw, 1.3rem);   /* subtítulo do hero — Regular 400, lh 1.6 */
--t-corpo:   1.0625rem;                       /* Regular 400, lh 1.75                   */
--t-peq:     .9375rem;
--t-eyebrow: .75rem;                          /* SemiCondensed 700, caixa alta, ls .14em */
```

Medida máxima do texto corrido: **68ch**. Acima disso o olho perde a linha.

### Arquivos

Auto-hospedados em `assets/fonts/`, subsetados em latin, `.woff2`, ~10KB cada. Sem requisição ao Google — mais rápido e melhor para LGPD.

| Arquivo | Família CSS | Peso |
|---|---|---|
| `open-sans-400.woff2` | `Open Sans` | 400 |
| `open-sans-600.woff2` | `Open Sans` | 600 |
| `open-sans-sc-600.woff2` | `Open Sans SC` | 600 |
| `open-sans-sc-700.woff2` | `Open Sans SC` | 700 |
| `open-sans-cd-300.woff2` | `Open Sans CD` | 300 |
| `open-sans-cd-800.woff2` | `Open Sans CD` | 800 |

`font-display: swap`. `preload` apenas em `cd-300` e `400` — as duas que o hero precisa no primeiro quadro.

---

## 4. Marca

O símbolo é um traço contínuo, desenhado à mão, do cólon. É o único ativo gráfico da marca e o melhor que ela tem: orgânico, específico, nada corporativo.

**Não existe versão com tipografia.** O lockup é montado: símbolo + nome em Open Sans.

```
┌─────┐  Dr. Norton Luiz Nóbrega        ← Open Sans SemiBold 600
│ ~~~ │  COLOPROCTOLOGISTA · CRM-PR 12.440   ← SemiCondensed 700, caixa alta, ouro
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

- Desce pela calha esquerda, em **72px reservados** no desktop.
- **Preenche conforme o scroll** — `stroke-dashoffset` atrelado à posição na página, não a um timer. Uma trilha a 10% mostra o caminho inteiro; o traço a 35% mostra o quanto já foi lido.
- Isso o torna também um **indicador de progresso de leitura**: ele informa, não só decora.
- Em "Como é uma consulta", um segundo segmento conecta os quatro passos — ali a sequência é real e a linha carrega essa informação.
- Especificação: `stroke-width: 1.5`, `--ouro`, `stroke-linecap: round`, sem preenchimento, `vector-effect: non-scaling-stroke`.
- **Não aparece abaixo de 900px.** No mobile o espaço é do conteúdo.

Cada seção também recebe um traço curto de 24px em `--ouro` antes do eyebrow (ver §9) — o eco do fio no nível do bloco, sem acoplar o SVG à estrutura do HTML.

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

**Tratamento:** sem filtro, sem duotone, sem sobreposição dourada. As fotos são quentes o suficiente. Corte generoso, sujeito descentralizado, muito ar em volta. `.webp` em 800/1200/1600px com `srcset`, `width`/`height` sempre declarados.

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

O fio aparece **inteiro desenhado**. O vídeo do hero não roda em autoplay — mostra o poster com botão de play.

---

## 9. Componentes

**Botão principal** — preenchimento `--ouro-fundo`, texto `--areia`, `border-radius: 999px`, padding `1rem 2rem`, SemiBold 600. Hover: fundo `--tinta`. Alvo mínimo de toque: **44×44px**.

**Botão secundário** — sem preenchimento, texto `--tinta`, borda 1px `--linha`. Hover: borda `--ouro`.

**Link de texto** — `--ouro-fundo`, sublinhado por `background-image` que cresce da esquerda no hover.

**Eyebrow** — SemiCondensed 700, caixa alta, `.14em`, cor `--ouro-fundo`, precedido de um traço de 24px em `--ouro`.

**Cartão de sintoma / doença** — sem caixa. Hairline no topo, título em SemiCondensed 700, uma linha de corpo, seta discreta. Hover: hairline vira `--ouro` e o bloco sobe 2px.

**Foco visível** — `outline: 2px solid var(--ouro-fundo); outline-offset: 3px`. Nunca removido.

---

## 10. Voz

Segunda pessoa, frases curtas, verbo no presente.

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
> Sangramento, dor ao evacuar, um nódulo que apareceu. São queixas comuns, têm nome e quase sempre têm solução. Há mais de 30 anos o Dr. Norton Nóbrega cuida disso — com privacidade absoluta e sem constrangimento.

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
- [ ] O fio se desenha no scroll e some abaixo de 900px
- [ ] Sem scroll horizontal em 375 / 768 / 1024 / 1440 / 1920
- [ ] Percurso completo por teclado, foco visível em cada parada
- [ ] "Reduzir movimento" ligado: fio inteiro, nada anima
- [ ] JavaScript desligado: conteúdo e WhatsApp funcionando
- [ ] CRM e RQE em todas as páginas
- [ ] Toda imagem com `width`/`height` e `alt`
- [ ] Nenhuma marca de terceiro visível nas fotos publicadas
