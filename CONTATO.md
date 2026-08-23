# Dados que faltam para o site ir ao ar

Os dados de contato **já foram preenchidos** em 23/08/2026. O que sobrou de
pendente está listado abaixo, na ordem em que importa.

---

## Já preenchido (não precisa mexer)

| Dado | Valor no site |
|---|---|
| WhatsApp | `5541998068000`, exibido como **(41) 99806-8000**. Está nos 33 arquivos e no JSON-LD |
| Endereço | Coloprocto DOC - DOC Batel, Avenida Visconde de Guarapuava, 4628, salas 709 e 710, Batel, Curitiba/PR |
| Atendimento | Segunda a sexta, das 8h às 12h e das 14h às 18h |
| Mapa | Query já apontada para o endereço real, com zoom 17. Exibido a cores |
| CEP | 80240-010, no bloco visível e no JSON-LD |

**Telefone fixo e e-mail foram removidos** do site a pedido: não aparecem mais na
seção de contato nem no rodapé. Se um dia voltarem, é um bloco `<div>` dentro de
`.contato-dados` em `index.html` e um `<li>` na coluna "Contato" do rodapé, que
mora em `tools/gerar-posts.mjs` para as páginas do blog.

---

## 1. Ficha no Google Meu Negócio — vale conferir

Se o consultório já tem ficha, troque a query do mapa pelo **nome da ficha** em vez
do endereço: o pin fica mais preciso e o clique leva direto ao perfil. Em
`index.html`, procure por `maps.google.com`.

---

## 2. Domínio

Hoje está `https://www.nortonnobrega.com.br` em 35 arquivos (canonical, Open Graph,
sitemap). Se o domínio for outro:

```bash
grep -rl 'www.nortonnobrega.com.br' . --exclude-dir=.git \
  | xargs sed -i '' 's|www.nortonnobrega.com.br|o-dominio-real.com.br|g'
```

Também em `tools/gerar-posts.mjs`, na constante `SITE`, para os artigos futuros
nascerem com o domínio certo.

---

## 3. O vídeo do hero

Quando o arquivo chegar:

```bash
# a partir do original, sem áudio, ~1080px de altura
ffmpeg -i original.mov -an -vf "scale=-2:1080" -c:v libx264 -crf 26 -preset slow \
       -movflags +faststart assets/video/hero.mp4

ffmpeg -i original.mov -an -vf "scale=-2:1080" -c:v libvpx-vp9 -crf 34 -b:v 0 \
       assets/video/hero.webm
```

Alvo: **menos de 2,5 MB** cada. Se passar muito disso, aumente o `-crf`
(qualidade menor, arquivo menor) ou corte a duração — 8 a 15 segundos em loop
basta.

Depois, em `index.html`, procure por `SLOT DO VÍDEO` e siga as três linhas de
instrução que estão ali.

**Antes de gravar ou escolher o clipe:** a Resolução CFM 2.336/2023 restringe a
publicação de imagem de procedimento com finalidade promocional. O clipe precisa
ser **sem paciente identificável e sem anatomia de procedimento** — ambiente,
mãos, instrumental e o médico em campo funcionam bem e não criam exposição.

---

## 4. Convênios

Não há seção de convênios no site. Se o atendimento aceitar planos — ou se for
exclusivamente particular — vale dizer: é a segunda pergunta que chega no WhatsApp,
e responder antes economiza uma ida e volta. Me avise que eu acrescento.

---

## Conferência final

Depois de preencher tudo, este comando não pode retornar nada:

```bash
grep -rn '5541999999999\|0000-0000\|exemplo.com.br\|Rua a confirmar\|00h00\|00000-000' \
  . --exclude-dir=.git --exclude=CONTATO.md
```

Hoje ele já não retorna nada. O único dado que ainda falta é o **vídeo do hero**
(item 3), e ele não aparece neste `grep` porque o bloco está comentado.
