# Dr. Norton Luiz Nóbrega

Site institucional e blog de um coloproctologista em Curitiba, com mais de 30 anos de consultório.

## Register

**Brand.** O design é o produto. Não há aplicação, login, dashboard nem fluxo transacional: o entregável é a impressão que a pessoa tem ao chegar. A conversão inteira acontece fora do site, num link de WhatsApp.

Superfícies: a landing (`index.html`), o índice do blog e 29 artigos clínicos.

## Quem usa

Alguém com um sintoma anorretal que já dura semanas ou meses, quase sempre chegando de uma busca no celular, muitas vezes à noite e sozinho. Não está comparando currículos. Está tentando descobrir se o que sente tem nome, se é grave e se vai precisar passar por algo humilhante.

Um segundo público, menor: familiares procurando por outra pessoa, e colegas médicos conferindo a titulação antes de encaminhar.

## O trabalho a ser feito

Tirar a pessoa do adiamento. O site é bem-sucedido quando ela manda a mensagem no WhatsApp, e o obstáculo entre ela e essa mensagem não é dúvida sobre competência técnica: é vergonha.

## A tese

**A barreira dessa especialidade não é desconfiança, é constrangimento.** O próprio Dr. Norton escreveu isso no texto do site antigo. Nomear o sintoma em voz normal, sem eufemismo e sem drama ("sangramento ao evacuar", "um caroço que apareceu"), é o acolhimento. Toda decisão de copy e de design sai daí.

Consequência prática: o site explica o que vai acontecer no consultório antes de pedir qualquer coisa. A seção "Como é uma consulta" existe para desarmar, não para informar.

## Personalidade

**Sóbrio, direto, adulto.** Fala como um médico experiente falaria numa sala tranquila: sem infantilizar, sem alarmar, sem vender.

Voz em **primeira pessoa** em todo o site: quem fala é o médico. O nome dele aparece como assinatura, nunca como sujeito da frase.

## Anti-referências

O que este site não pode parecer:

- **Site de clínica de estética.** Nada de promessa de resultado, antes-e-depois, depoimento de paciente. Além de fora de tom, a Resolução CFM 1.974/2011 proíbe.
- **Folheto de plano de saúde.** Azul corporativo, foto de banco de imagens com gente sorrindo de jaleco, "cuidando de você e da sua família".
- **Alarme.** O leitor já chegou assustado. O texto não aumenta a aposta.
- **Eufemismo.** "Desconforto na região" é pior do que "dor ao evacuar": quem tem o sintoma não se reconhece, e o eufemismo confirma que o assunto é vergonhoso.
- **Sofisticação vazia.** Serifada de alto contraste, dourado por todo lado, "excelência" e "referência". O site tem ouro na paleta, mas como estrutura, não como brilho.

## Acessibilidade e conformidade

- **WCAG 2.1 AA** é piso, não meta. O público inclui idosos, e boa parte lê no celular à noite.
- `#C88F4A` nunca recebe nem carrega texto (2,71:1). Onde o ouro precisa virar texto, é `#8F5C0B`. A tabela completa está no `DESIGN.md` §2.
- Contraste sobre foto ou gradiente **se mede no pixel renderizado**, não na cor declarada. O axe-core não pega esse caso.
- Funciona sem JavaScript. Nenhum conteúdo pode nascer escondido atrás de uma classe que só o JS remove.
- **CFM 1.974/2011 e 2.336/2023**: nome, CRM-PR 12.440 e RQE 5531 visíveis em toda página; aviso de conteúdo informativo; sem promessa de resultado; sem imagem de procedimento com fim promocional.

## Restrições

- **HTML, CSS e JavaScript puros.** Sem framework, sem build, sem dependência em produção. Decisão do cliente, já tomada e não reaberta. O gerador em `tools/` roda só na máquina dele.
- **Open Sans, só na largura normal.** A família é do cliente. As variantes Condensed e SemiCondensed foram descartadas por decisão dele em agosto de 2026.
- Publicado no GitHub Pages a partir da raiz de `main`.

## Onde está o resto

O sistema visual inteiro (cor, tipografia, o fio, componentes, movimento, checklist) está no `DESIGN.md`. As pendências para ir ao ar estão no `CONTATO.md`.
