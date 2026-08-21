# Dados que faltam para o site ir ao ar

O site está pronto e funcionando, mas com **dados de contato falsos**. Eles são
propositalmente óbvios (`(41) 0000-0000`, `Rua a confirmar, 000`) para que ninguém
publique sem perceber.

Cada item abaixo tem o comando exato de substituição. Rode-os na raiz do projeto.

> Os comandos usam `sed -i ''`, que é a sintaxe do macOS. No Linux, use `sed -i`
> (sem as aspas).

---

## 1. Número do WhatsApp — o mais importante

É o que converte o site inteiro. Aparece em **33 arquivos** (a home e os 29 artigos).

Formato: DDI + DDD + número, sem espaços, sem símbolos. Exemplo para Curitiba:
`5541988887777`.

```bash
grep -rl '5541999999999' . --exclude-dir=.git \
  | xargs sed -i '' 's/5541999999999/SEU_NUMERO_AQUI/g'
```

O mesmo número também aparece formatado, para leitura, na seção de contato:

```bash
sed -i '' 's/(41) 99999-9999/(41) 98888-7777/g' index.html
```

Depois de trocar, confira uma página: `grep -c '5541999999999' index.html` deve
retornar `0`.

---

## 2. Telefone fixo

```bash
grep -rl '(41) 0000-0000' . --exclude-dir=.git \
  | xargs sed -i '' 's/(41) 0000-0000/(41) 3333-4444/g'

grep -rl '+554100000000' . --exclude-dir=.git \
  | xargs sed -i '' 's/+554100000000/+554133334444/g'
```

O segundo é o `href="tel:"` — precisa ficar sem espaços nem símbolos.

---

## 3. E-mail

```bash
grep -rl 'contato@exemplo.com.br' . --exclude-dir=.git \
  | xargs sed -i '' 's/contato@exemplo.com.br/o-email-real@dominio.com.br/g'
```

---

## 4. Endereço do consultório

Só em `index.html`, em dois lugares. Edite à mão:

**a) O bloco visível** — procure por `Rua a confirmar`:

```html
<span class="dado-rotulo">Endereço</span>
<p class="dado-valor">
  Rua a confirmar, 000 — Sala 00<br>
  Bairro · Curitiba/PR<br>
  CEP 00000-000
</p>
```

**b) O JSON-LD no `<head>`** — o mesmo endereço, para o Google entender que é um
consultório em Curitiba. Procure por `"streetAddress"`:

```json
"address": {
  "@type": "PostalAddress",
  "streetAddress": "Rua a confirmar, 000 — Sala 00",
  "addressLocality": "Curitiba",
  "addressRegion": "PR",
  "postalCode": "00000-000",
  "addressCountry": "BR"
}
```

Os dois precisam bater. É esse bloco que faz o consultório aparecer na busca local.

---

## 5. Mapa

Em `index.html`, procure por `maps.google.com`. Troque a query pelo endereço real,
com `+` no lugar dos espaços:

```html
<iframe class="mapa"
        src="https://maps.google.com/maps?q=Rua+Exemplo+123+Curitiba+PR&z=16&output=embed"
```

Não precisa de chave de API. Se o consultório já tem ficha no Google Meu Negócio,
use o nome dela na query — o pin fica mais preciso.

---

## 6. Horário de atendimento

Em `index.html`, dois lugares:

**a) Visível** — procure por `00h00`:

```html
<p class="dado-valor">Segunda a sexta, das 00h00 às 00h00</p>
```

**b) JSON-LD** — procure por `openingHoursSpecification`. Formato 24h:

```json
"opens": "08:00",
"closes": "18:00"
```

---

## 7. Domínio

Hoje está `https://www.nortonnobrega.com.br` em 35 arquivos (canonical, Open Graph,
sitemap). Se o domínio for outro:

```bash
grep -rl 'www.nortonnobrega.com.br' . --exclude-dir=.git \
  | xargs sed -i '' 's|www.nortonnobrega.com.br|o-dominio-real.com.br|g'
```

Também em `tools/gerar-posts.mjs`, na constante `SITE`, para os artigos futuros
nascerem com o domínio certo.

---

## 8. O vídeo do hero

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

## 9. Convênios

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
