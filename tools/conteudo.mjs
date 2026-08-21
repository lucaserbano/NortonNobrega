/* =========================================================================
   Conteúdo dos artigos.

   O texto clínico vem do material escrito pelo próprio Dr. Norton para o site
   anterior. Aqui ele foi apenas reorganizado em seções e corrigido em erros
   de digitação — nenhuma afirmação clínica foi acrescentada.

   Para publicar um artigo novo: acrescente um objeto a esta lista e rode
   `node tools/gerar-posts.mjs`.
   ========================================================================= */

export const GRUPOS = {
  doencas: "Doenças",
  exames: "Exames",
  dicas: "Dicas",
};

export const posts = [

  /* ===================== DOENÇAS — ÂNUS E RETO ===================== */

  {
    slug: "hemorroidas",
    titulo: "Hemorroidas",
    grupo: "doencas",
    categoria: "No ânus e no reto",
    resumo: "Dilatações dos vasos da região anal. Causam dor, inchaço, nódulos, sangramento e exposição à evacuação — e nem sempre exigem cirurgia.",
    corpo: [
      { h: "O que são", p: [
        "Hemorroidas são dilatações de vasos da região anal. Manifestam-se por dor, aumento de volume (inchaço), nódulos (trombos), sangramento e exposição à evacuação.",
      ]},
      { h: "Tratamento clínico", p: [
        "Podem ser tratadas por medidas clínicas e medicações orais e tópicas. Boa parte dos casos melhora sem qualquer procedimento.",
      ]},
      { h: "Ligadura elástica", p: [
        "O procedimento de ligadura elástica está indicado no caso de hemorroidas internas. É realizado no próprio consultório, com anestesia local, e provoca pouco desconforto.",
      ]},
      { h: "Quando a cirurgia entra", p: [
        "Em casos selecionados a cirurgia está indicada — a hemorroidectomia. Existem várias técnicas: a tradicional, com incisão e sutura; o grampeamento (PPH); a desarterialização (THD); e, mais recentemente, técnicas a laser.",
        "A técnica mais indicada é escolhida pelo médico junto com o paciente, considerando o caso e a rotina de cada um.",
      ]},
    ],
  },

  {
    slug: "fissura-anal",
    titulo: "Fissura anal",
    grupo: "doencas",
    categoria: "No ânus e no reto",
    resumo: "Ferimento na região anal que causa dor durante e após evacuar, além de sangramento. Raramente precisa de cirurgia.",
    corpo: [
      { h: "O que é", p: [
        "A fissura anal é um ferimento na região anal que ocorre após trauma local — por exemplo, uma evacuação com fezes muito endurecidas, ou após um episódio de diarreia.",
      ]},
      { h: "Como se manifesta", p: [
        "Caracteriza-se principalmente por dor durante e após evacuar, e por sangramento. A dor costuma ser em queimação e pode persistir por minutos ou horas depois da evacuação.",
      ]},
      { h: "Tratamento", p: [
        "Normalmente é tratada com medidas clínicas e medicamentos tópicos. Raramente é necessária cirurgia.",
      ]},
    ],
  },

  {
    slug: "abscesso-e-fistula-anal",
    titulo: "Abscesso e fístula anal",
    grupo: "doencas",
    categoria: "No ânus e no reto",
    resumo: "O abscesso é uma coleção de pus na região anal, com dor importante. A fístula é o que resta depois da drenagem. Ambos exigem cirurgia.",
    corpo: [
      { h: "Abscesso anal", p: [
        "O abscesso anal é a coleção de pus na região. Caracteriza-se pela dor importante e pelo aumento de volume local.",
      ]},
      { h: "Fístula anal", p: [
        "A fístula anal é o resultado da drenagem do abscesso anal. Há drenagem de secreção purulenta na pele, de forma contínua.",
      ]},
      { h: "Tratamento", p: [
        "O abscesso e a fístula devem ser tratados por cirurgia.",
      ]},
    ],
  },

  {
    slug: "plicomas-anais",
    titulo: "Plicomas anais",
    grupo: "doencas",
    categoria: "No ânus e no reto",
    resumo: "Pele em excesso na região anal, que pode comprometer a higiene e provocar desconforto.",
    corpo: [
      { h: "O que são", p: [
        "Plicomas anais são peles em excesso na região anal, que podem comprometer a higiene e provocar desconforto.",
      ]},
      { h: "Tratamento", p: [
        "De acordo com seu tamanho, podem ser removidos durante a hemorroidectomia ou em procedimentos locais, sem necessidade de internamento.",
      ]},
    ],
  },

  {
    slug: "hpv-anal",
    titulo: "Infecção por HPV",
    grupo: "doencas",
    categoria: "No ânus e no reto",
    resumo: "Infecção viral sexualmente transmissível que provoca verrugas na pele anal. Exige avaliação minuciosa com corantes e lentes de aumento.",
    corpo: [
      { h: "O que é", p: [
        "É uma infecção viral sexualmente transmissível. O paciente queixa-se de verrugas na pele anal.",
      ]},
      { h: "Como se investiga", p: [
        "É necessária uma avaliação minuciosa da pele e do canal anal (parte interna do ânus) para identificação de lesões assintomáticas, utilizando-se corantes e lentes de aumento.",
      ]},
      { h: "Tratamento", p: [
        "Dependendo do local, as lesões podem ser cauterizadas por aplicação de ácido ou por eletrocauterização. Conforme o caso, os procedimentos são realizados no consultório ou em ambiente hospitalar.",
      ]},
    ],
  },

  {
    slug: "prurido-anal",
    titulo: "Prurido anal",
    grupo: "doencas",
    categoria: "No ânus e no reto",
    resumo: "Coceira na pele da região anal. Queixa bastante comum, que exige exame local cuidadoso na busca da causa.",
    corpo: [
      { h: "O que é", p: [
        "O prurido anal é uma queixa bastante comum de coceira na pele da região anal.",
      ]},
      { h: "Por que exige consulta", p: [
        "Exige consulta e exame local cuidadoso na busca da causa. É um sintoma que muita gente trata por conta própria durante anos, sem resultado, justamente porque a causa não foi identificada.",
      ]},
      { h: "Tratamento", p: [
        "Normalmente é tratado com medidas higieno-dietéticas e medicações locais.",
      ]},
    ],
  },

  {
    slug: "cisto-pilonidal",
    titulo: "Cisto pilonidal",
    grupo: "doencas",
    categoria: "No ânus e no reto",
    resumo: "Cisto na região sacra, acima do ânus. Ocorre normalmente em homens jovens e, quando infecta, exige tratamento cirúrgico.",
    corpo: [
      { h: "O que é", p: [
        "É um cisto na região sacra, acima do ânus, que normalmente ocorre em homens jovens.",
      ]},
      { h: "Quando tratar", p: [
        "Uma vez que provoque sintomas de infecção local, como dor e aumento de volume, exige tratamento cirúrgico. A técnica varia de acordo com o tamanho do cisto.",
      ]},
    ],
  },

  {
    slug: "cancer-do-anus",
    titulo: "Câncer do ânus",
    grupo: "doencas",
    categoria: "No ânus e no reto",
    resumo: "Quadro raro, caracterizado por nódulo maligno na borda anal. O diagnóstico precisa ser feito o mais rapidamente possível.",
    corpo: [
      { h: "O que é", p: [
        "É um quadro raro, que se caracteriza pela presença de nódulo maligno na borda anal. Pode ser inicialmente doloroso ou não, e com o tempo irá crescer.",
      ]},
      { h: "Por que o tempo importa", p: [
        "O diagnóstico deve ser realizado o mais rapidamente possível. É a principal razão para não adiar a avaliação de qualquer nódulo anal que apareça e persista.",
      ]},
      { h: "Tratamento", p: [
        "Inicialmente pode ser tratado com cirurgia e, em casos mais avançados, por quimioterapia e radioterapia.",
      ]},
    ],
  },

  /* ===================== DOENÇAS — INTESTINO GROSSO ===================== */

  {
    slug: "cancer-colorretal",
    titulo: "Câncer colorretal",
    grupo: "doencas",
    categoria: "No intestino grosso",
    resumo: "O segundo câncer mais frequente em homens e mulheres após os 50 anos — e um dos poucos que pode ser evitado por meio de um exame.",
    corpo: [
      { h: "O que é", p: [
        "É o segundo câncer mais frequente em homens e mulheres após os 50 anos. Em sua grande maioria, provém da transformação maligna de pólipos.",
      ]},
      { h: "Pode ser evitado", p: [
        "Contudo, pode ser evitado ou diagnosticado precocemente por meio da colonoscopia. É o que separa este de quase todos os outros tumores: existe um exame capaz de remover a lesão antes que ela se torne câncer.",
      ]},
      { h: "Tratamento", p: [
        "Existe uma gama imensa de formas de tratamento. Vão desde a ressecção por colonoscopia, nos casos iniciais, e procedimentos cirúrgicos localizados, nos casos iniciais do câncer do reto baixo, até ressecções de partes do intestino grosso e ressecções mais extensas de todo o cólon e do ânus.",
      ]},
    ],
  },

  {
    slug: "polipos-intestinais",
    titulo: "Pólipos intestinais",
    grupo: "doencas",
    categoria: "No intestino grosso",
    resumo: "Agrupamentos de células na parede interna do intestino. Inofensivos no início — e é por isso que a colonoscopia importa.",
    corpo: [
      { h: "O que são", p: [
        "Pólipos são agrupamentos de células na mucosa, a parede interna do intestino. Inicialmente são inofensivos e não provocam sintomas.",
      ]},
      { h: "Por que remover", p: [
        "Caso não sejam detectados nem ressecados na colonoscopia, podem crescer e se transformar em câncer do intestino. Remover um pólipo durante o exame é, na prática, evitar um câncer.",
      ]},
    ],
  },

  {
    slug: "doenca-diverticular",
    titulo: "Doença diverticular dos cólons",
    grupo: "doencas",
    categoria: "No intestino grosso",
    resumo: "Saculações nas paredes dos cólons, assintomáticas na maior parte dos pacientes. A presença dos divertículos, por si só, não exige tratamento.",
    corpo: [
      { h: "O que é", p: [
        "É a presença de saculações nas paredes dos cólons. É assintomática na maior parte dos pacientes.",
      ]},
      { h: "Quando dá sintomas", p: [
        "Na minoria que apresenta sintomas, estes são de dor e inflamação — a diverticulite. A simples presença dos divertículos não exige tratamento, mas a partir do início dos sintomas, sim.",
      ]},
      { h: "Cirurgia", p: [
        "Raros são os casos que necessitam colectomia, a remoção da parte do cólon comprometida. A cirurgia pode ser realizada de forma tradicional (aberta) ou videolaparoscópica.",
      ]},
    ],
  },

  {
    slug: "doencas-inflamatorias-intestinais",
    titulo: "Retocolite ulcerativa e doença de Crohn",
    grupo: "doencas",
    categoria: "No intestino grosso",
    resumo: "As doenças inflamatórias do intestino. Acometem principalmente jovens, têm causa ainda desconhecida e exigem acompanhamento constante.",
    corpo: [
      { h: "O que são", p: [
        "As doenças inflamatórias do intestino compreendem a retocolite ulcerativa e a doença de Crohn. Acometem na sua maioria jovens, mas podem aparecer também na fase adulta.",
        "São inflamações do intestino, de causa ainda desconhecida, que necessitam tratamento e acompanhamento constantes.",
      ]},
      { h: "Como se manifestam", p: [
        "Caracterizam-se pela perda de peso, diarreia e dor abdominal.",
      ]},
      { h: "Investigação e tratamento", p: [
        "Exigem avaliação clínica, laboratorial, endoscópica e radiológica para a adequada decisão terapêutica. O tratamento vai desde medicações orais até o uso de medicações injetáveis de anticorpos para o controle do processo inflamatório.",
      ]},
    ],
  },

  {
    slug: "sindrome-do-intestino-irritavel",
    titulo: "Síndrome do intestino irritável",
    grupo: "doencas",
    categoria: "No intestino grosso",
    resumo: "Alteração funcional do intestino, bastante comum: dor abdominal, distensão e mudança no hábito intestinal.",
    corpo: [
      { h: "O que é", p: [
        "É um quadro bastante comum de alteração funcional do intestino, com dor abdominal, distensão e alteração no hábito intestinal — com obstipação ou diarreia.",
      ]},
      { h: "Investigação", p: [
        "Necessita de investigação para afastamento de outros quadros de doença orgânica. O diagnóstico não se faz por exclusão apressada.",
      ]},
      { h: "Tratamento", p: [
        "O tratamento exige mudanças de hábitos alimentares, controle do estresse e uso de medicações.",
      ]},
    ],
  },

  {
    slug: "obstipacao-intestinal",
    titulo: "Obstipação intestinal",
    grupo: "doencas",
    categoria: "No intestino grosso",
    resumo: "Dificuldade de evacuar regularmente ou evacuação de fezes endurecidas. Acomete principalmente as mulheres.",
    corpo: [
      { h: "O que é", p: [
        "É a dificuldade de evacuar regularmente, ou a evacuação de fezes endurecidas. Acomete principalmente as mulheres.",
      ]},
      { h: "Por que vale investigar", p: [
        "Quando corretamente diagnosticada e adequadamente tratada, pode melhorar de forma importante a qualidade de vida do paciente.",
      ]},
    ],
  },

  {
    slug: "incontinencia-fecal",
    titulo: "Incontinência fecal",
    grupo: "doencas",
    categoria: "No intestino grosso",
    resumo: "Perda involuntária de gases ou fezes. Compromete a autoestima e a independência — e tem tratamento, que nem sempre é cirúrgico.",
    corpo: [
      { h: "O que é", p: [
        "É a perda involuntária de gases ou fezes. Quase sempre acontece em mulheres idosas que tiveram várias gestações, partos via vaginal, trabalhos de parto prolongados e fetos que nasceram com mais de 3,5 kg.",
      ]},
      { h: "O impacto", p: [
        "É um quadro que compromete de forma importante a autoestima e a independência da pessoa, podendo levar à depressão e ao isolamento social. É também um dos mais silenciados.",
      ]},
      { h: "Tratamento", p: [
        "Deve ser corretamente avaliada e pode ser tratada com várias medidas conjuntas: alimentação, medicamentos, exercícios e fisioterapia pélvica, além de tratamentos com eletroestimulação e neuromodulação.",
      ]},
    ],
  },

  {
    slug: "prolapso-retal",
    titulo: "Prolapso retal",
    grupo: "doencas",
    categoria: "No intestino grosso",
    resumo: "Exposição da mucosa ou de todo o reto através do ânus, com massa que se exterioriza aos esforços.",
    corpo: [
      { h: "O que é", p: [
        "É a exposição da camada interna do intestino (mucosa) ou de todo o reto através do ânus.",
      ]},
      { h: "Como se manifesta", p: [
        "Provoca sintomas de massa que se exterioriza aos esforços, e pode causar dor, sangramento e umidade local.",
      ]},
      { h: "Tratamento", p: [
        "Quando são só mucosos, podem ser tratados por ligadura elástica ou ressecção cirúrgica. Quando envolvem todas as camadas do reto, exigem cirurgia — que pode ser realizada pelo abdome ou exclusivamente pelo períneo.",
      ]},
    ],
  },

  {
    slug: "proctopatia-actinica",
    titulo: "Proctopatia actínica",
    grupo: "doencas",
    categoria: "No intestino grosso",
    resumo: "Resultado da exposição do reto à radioterapia para tumores do útero e da próstata. Pode aparecer anos depois do tratamento.",
    corpo: [
      { h: "O que é", p: [
        "É o quadro resultante da exposição do reto à radioterapia para tumores do útero e da próstata. Pode aparecer logo após o tratamento ou até anos depois.",
      ]},
      { h: "Sintomas", p: [
        "Vontade constante de evacuar, eliminação de muco e sangue nas fezes.",
      ]},
      { h: "Tratamento", p: [
        "Exige avaliação para decisão de tratamento com medicamentos ou cauterização endoscópica com plasma de argônio.",
      ]},
    ],
  },

  /* ===================== EXAMES ===================== */

  {
    slug: "retossigmoidoscopia-rigida",
    titulo: "Retossigmoidoscopia rígida",
    grupo: "exames",
    categoria: "No consultório",
    resumo: "Avalia o canal anal e o reto com um tubo plástico descartável. É indolor e quase sempre pode ser feita já na primeira consulta.",
    corpo: [
      { h: "O que avalia", p: [
        "É um exame na região do ânus e do reto, feito com um tubo de plástico descartável. Através dele pode-se avaliar o canal anal e o reto.",
      ]},
      { h: "Como é feito", p: [
        "É indolor e realizado no próprio consultório médico. Este exame pode ser realizado quase sempre na primeira consulta, sem preparo complicado e sem sedação.",
      ]},
      { h: "Quando é indicado", p: [
        "Indicado para avaliar pacientes com queixas mais distais — isto é, mais próximas do ânus.",
      ]},
    ],
  },

  {
    slug: "manometria-anorretal",
    titulo: "Manometria anorretal",
    grupo: "exames",
    categoria: "No consultório",
    resumo: "Estuda a função dos esfíncteres e a sensibilidade do reto. Útil na incontinência fecal, em alguns tipos de constipação e nas dores pélvicas.",
    corpo: [
      { h: "O que avalia", p: [
        "É o exame para estudo da função dos esfíncteres — os músculos responsáveis pela capacidade de conter as fezes e os gases — e da sensibilidade do reto.",
      ]},
      { h: "Quando é indicada", p: [
        "É útil no estudo dos quadros de incontinência fecal, de alguns tipos de constipação intestinal (como a evacuação obstruída) e de dores pélvicas.",
      ]},
    ],
  },

  {
    slug: "colonoscopia",
    titulo: "Colonoscopia",
    grupo: "exames",
    categoria: "Em clínica ou hospital",
    resumo: "Avalia todo o intestino grosso e a parte final do delgado, sob sedação. É o exame que previne o câncer colorretal, não apenas o que o diagnostica.",
    corpo: [
      { h: "O que avalia", p: [
        "É um exame endoscópico realizado em clínicas e hospitais, normalmente sob sedação e acompanhado por um médico anestesiologista. Permite avaliar todo o intestino grosso (cólon) e a parte final do intestino delgado.",
      ]},
      { h: "Quando é indicada", p: [
        "É utilizada na investigação da dor abdominal, de sangramentos, de diarreia e de obstipação; na análise após exame de sangue oculto nas fezes positivo; na suspeita de câncer colorretal; e na prevenção do câncer colorretal.",
      ]},
      { h: "O papel na prevenção", p: [
        "Além de diagnosticar, a colonoscopia permite remover pólipos durante o próprio exame — interrompendo o caminho que levaria ao câncer.",
      ]},
    ],
  },

  {
    slug: "retossigmoidoscopia-flexivel",
    titulo: "Retossigmoidoscopia flexível",
    grupo: "exames",
    categoria: "Em clínica ou hospital",
    resumo: "Aparelho endoscópico que alcança o canal anal, o reto, o sigmoide e muitas vezes o cólon descendente.",
    corpo: [
      { h: "O que avalia", p: [
        "É realizada em clínicas de endoscopia, com ou sem sedação. Utiliza-se aparelho endoscópico que permite a avaliação do canal anal, do reto, do cólon sigmoide e muitas vezes de porções do cólon descendente.",
      ]},
      { h: "Quando é indicada", p: [
        "Indicada para avaliar queixas como sangramentos e dores no abdome.",
      ]},
    ],
  },

  {
    slug: "tempo-de-transito-colonico",
    titulo: "Tempo de trânsito colônico",
    grupo: "exames",
    categoria: "Em clínica ou hospital",
    resumo: "Marcadores radiopacos acompanhados por raio-X. Para a constipação que não responde às terapias mais comuns.",
    corpo: [
      { h: "Como é feito", p: [
        "O exame é realizado por meio da ingestão de marcadores radiopacos — que conseguem ser vistos em um exame de raio-X do abdome — e do seu acompanhamento até serem eliminados.",
      ]},
      { h: "Quando é indicado", p: [
        "É útil na avaliação de quadros de obstipação intestinal que não respondem a terapias mais comumente utilizadas.",
      ]},
    ],
  },

  /* ===================== DICAS ===================== */

  {
    slug: "tabu-da-consulta",
    titulo: "O tabu da consulta",
    grupo: "dicas",
    categoria: "Dicas",
    resumo: "Medo, resistência e vergonha fazem muita gente adiar por anos. Vale saber o que de fato acontece na consulta.",
    corpo: [
      { h: "O que faz adiar", p: [
        "É conhecido o medo, a resistência e a vergonha da exposição na consulta ao coloproctologista. Muitas vezes os pacientes sofrem por longos períodos e gastam com medicamentos inadequados e mal indicados.",
      ]},
      { h: "Como a consulta é conduzida", p: [
        "A consulta é realizada de forma profissional e respeitosa, levando em conta os fatores emocionais que levam a postergar e adiar este tipo de avaliação.",
        "O exame proctológico, que frequentemente desperta muita insegurança, é realizado de forma a deixar o paciente bastante relaxado e confortável, em um ambiente calmo e de inteira privacidade.",
      ]},
      { h: "O custo de esperar", p: [
        "A maior parte das queixas atendidas em coloproctologia é benigna e tem tratamento simples quando avaliada a tempo. O adiamento é que costuma transformar um problema pequeno em um problema grande.",
      ]},
    ],
  },

  {
    slug: "quando-fazer-colonoscopia",
    titulo: "Quando fazer colonoscopia",
    grupo: "dicas",
    categoria: "Dicas",
    resumo: "A recomendação para começar entre 45 e 50 anos, e o intervalo indicado para quem tem baixo risco.",
    corpo: [
      { h: "A partir de que idade", p: [
        "As sociedades relacionadas à especialidade e a Organização Mundial da Saúde recomendam a realização de colonoscopia a partir dos 45 a 50 anos, para identificar pessoas de alto risco para o desenvolvimento de câncer colorretal.",
      ]},
      { h: "De quanto em quanto tempo", p: [
        "Nos indivíduos de baixo risco, o exame pode ser realizado com 5 a 10 anos de intervalo. O intervalo indicado para cada pessoa depende do que foi encontrado no exame anterior e do histórico familiar.",
      ]},
    ],
  },

  {
    slug: "sangramento-e-nodulo-anal",
    titulo: "Sangramento e nódulo anal: quando procurar o especialista",
    grupo: "dicas",
    categoria: "Dicas",
    resumo: "As duas queixas podem estar relacionadas a doenças benignas ou malignas. O diagnóstico correto costuma resolver o quadro por completo.",
    corpo: [
      { h: "Por que não esperar", p: [
        "A queixa de nódulo e sangramento anal pode estar relacionada a uma série de doenças, tanto benignas quanto malignas. O seu diagnóstico correto pode levar à solução completa do quadro.",
      ]},
      { h: "Sobre pesquisar por conta própria", p: [
        "Lembre-se: o “Dr. Google” não avalia quadros individuais. Sintomas idênticos podem corresponder a causas muito diferentes, e só o exame permite distinguir.",
      ]},
    ],
  },

  {
    slug: "higiene-anal",
    titulo: "Higiene da região anal",
    grupo: "dicas",
    categoria: "Dicas",
    resumo: "Água e sabonete são a melhor forma. A intolerância ao papel higiênico é relato frequente no consultório.",
    corpo: [
      { h: "A melhor forma", p: [
        "A melhor forma de higienizar a região anal é através do uso de água e sabonete.",
      ]},
      { h: "Sobre o papel higiênico", p: [
        "É muito frequente o relato de intolerância ao uso do papel higiênico. Existem no mercado produtos desenvolvidos para a adequada higiene da região anal.",
      ]},
    ],
  },

  {
    slug: "microbiota-intestinal",
    titulo: "Microbiota intestinal",
    grupo: "dicas",
    categoria: "Dicas",
    resumo: "As bactérias que habitam o intestino têm relação estreita com digestão, peso, alergias e até humor.",
    corpo: [
      { h: "O que se sabe hoje", p: [
        "Nunca se conheceu tanto sobre as bactérias que habitam nosso intestino e sua estreita relação com a nossa saúde de uma forma geral. Não apenas sobre a saúde intestinal, mas quanto à digestão, à obesidade, às alergias e até à depressão.",
      ]},
      { h: "Modulação", p: [
        "Muitas vezes há necessidade de modulação da microbiota utilizando suplementos e alimentos fermentados.",
      ]},
    ],
  },

  {
    slug: "habitos-de-vida-saudaveis",
    titulo: "Hábitos de vida e saúde do intestino",
    grupo: "dicas",
    categoria: "Dicas",
    resumo: "Dieta com pouca gordura animal, pouco açúcar e rica em fibras — mais exercício, peso, álcool, tabaco e sono.",
    corpo: [
      { h: "Alimentação", p: [
        "Dieta adequada, com pouca gordura animal, pouco açúcar e rica em fibras, pode auxiliar na boa saúde do intestino.",
      ]},
      { h: "O resto da rotina", p: [
        "Contam também a prática regular de exercícios físicos, o controle do peso, a baixa ingestão de álcool, evitar o tabagismo e a qualidade do sono.",
      ]},
    ],
  },

  {
    slug: "colostomia-e-ileostomia",
    titulo: "Colostomia e ileostomia",
    grupo: "dicas",
    categoria: "Dicas",
    resumo: "Podem ser definitivas ou temporárias. São um desafio a ser vencido, mas muitas vezes salvam a vida do paciente.",
    corpo: [
      { h: "O que são", p: [
        "São procedimentos cirúrgicos em que o cólon ou o intestino delgado são levados e expostos na pele para eliminação das fezes. São muito comuns nos procedimentos de emergência, mas também realizados em procedimentos eletivos. Podem ser definitivas ou temporárias.",
      ]},
      { h: "Viver com uma estomia", p: [
        "Apesar de serem um desafio a ser vencido, muitas vezes salvam a vida do paciente e melhoram sua qualidade de vida.",
        "Seu manejo exige comprometimento e aprendizado, que será fornecido pela equipe médica e de enfermagem.",
      ]},
    ],
  },
];
