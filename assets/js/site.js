/* =========================================================================
   Dr. Norton Luiz Nóbrega — comportamento
   Tudo aqui é melhoria progressiva. Sem JavaScript, o site continua
   legível e todos os links de WhatsApp continuam funcionando.
   ========================================================================= */

(function () {
  "use strict";

  var semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------
     Topo: hairline aparece só depois que a página rola.
     --------------------------------------------------------------- */
  var topo = document.querySelector(".topo");
  if (topo) {
    var marcarTopo = function () {
      topo.classList.toggle("topo-rolado", window.scrollY > 8);
    };
    marcarTopo();
    window.addEventListener("scroll", marcarTopo, { passive: true });
  }

  /* ---------------------------------------------------------------
     Menu mobile.
     --------------------------------------------------------------- */
  var botaoMenu = document.querySelector(".btn-menu");
  var menu = document.querySelector(".menu");
  if (botaoMenu && menu) {
    var tracoMenu = botaoMenu.querySelector("svg path");
    var TRACO_BARRAS = "M3 6h18M3 12h18M3 18h18";
    var TRACO_X = "M6 6l12 12M18 6L6 18";
    var desenharIcone = function (aberto) {
      if (tracoMenu) tracoMenu.setAttribute("d", aberto ? TRACO_X : TRACO_BARRAS);
    };

    var fecharMenu = function (devolverFoco) {
      if (!menu.classList.contains("menu-aberto")) return;
      menu.classList.remove("menu-aberto");
      botaoMenu.setAttribute("aria-expanded", "false");
      botaoMenu.setAttribute("aria-label", "Abrir menu");
      desenharIcone(false);
      if (devolverFoco) botaoMenu.focus();
    };

    botaoMenu.addEventListener("click", function () {
      var aberto = menu.classList.toggle("menu-aberto");
      botaoMenu.setAttribute("aria-expanded", String(aberto));
      botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
      desenharIcone(aberto);
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) fecharMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") fecharMenu(true);
    });
    /* O painel passou a pairar sobre a página, então tocar no conteúdo por
       baixo tem que fechá-lo. Cliques dentro do topo (o próprio botão, o
       painel) não contam: quem cuida deles são os dois ouvintes acima. */
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".topo")) fecharMenu(false);
    });
  }

  /* ---------------------------------------------------------------
     Reveal de entrada, com escalonamento entre irmãos.
     --------------------------------------------------------------- */
  var aSurgir = Array.prototype.slice.call(document.querySelectorAll(".surge"));

  if (aSurgir.length) {
    // atraso por posição entre irmãos que também surgem (máx. 4 passos)
    var contagem = new Map();
    aSurgir.forEach(function (el) {
      var pai = el.parentElement;
      var i = contagem.get(pai) || 0;
      contagem.set(pai, i + 1);
      if (i > 0) el.style.setProperty("--atraso", Math.min(i, 4) * 80 + "ms");
    });

    if (!("IntersectionObserver" in window) || semMovimento) {
      aSurgir.forEach(function (el) { el.classList.add("surge-visivel"); });
    } else {
      var olho = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
          if (!entrada.isIntersecting) return;
          entrada.target.classList.add("surge-visivel");
          olho.unobserve(entrada.target); // uma vez só
        });
      }, { rootMargin: "0px 0px -12% 0px", threshold: 0.1 });

      aSurgir.forEach(function (el) { olho.observe(el); });
    }
  }

  /* ---------------------------------------------------------------
     O fio: preenche conforme a leitura avança.

     O caminho preferido é CSS puro — `animation-timeline: scroll()` em
     site.css. Ele roda no compositor do navegador, então acompanha a
     rolagem quadro a quadro sem passar por aqui. O código abaixo só entra
     quando o navegador não suporta isso.

     Duas coisas que este trecho NÃO faz mais, de propósito:
     - não desliga com "reduzir movimento". O fio não se move sozinho, ele
       reporta onde a leitura está. Desligá-lo tirava o indicador de quem
       mais depende de referência estável.
     - não mede `scrollHeight` a cada quadro. Ler altura logo depois de
       escrever estilo força o navegador a recalcular layout no meio do
       scroll. A altura agora é medida uma vez e revista quando muda.
     --------------------------------------------------------------- */
  var traco = document.querySelector(".fio-traco");
  var temLinhaDoTempo = window.CSS && CSS.supports &&
                        CSS.supports("animation-timeline", "scroll()");

  if (traco && !temLinhaDoTempo) {
    // pathLength="1" no SVG: o traço inteiro mede 1, em qualquer navegador.
    traco.style.strokeDasharray = "1";
    traco.style.strokeDashoffset = "1";

    var alturaRolavel = 0;
    var medir = function () {
      alturaRolavel = document.documentElement.scrollHeight - window.innerHeight;
    };

    var pendente = false;
    var desenhar = function () {
      pendente = false;
      var p = alturaRolavel > 0
        ? Math.min(1, Math.max(0, window.scrollY / alturaRolavel))
        : 1;
      traco.style.strokeDashoffset = String(1 - p);
    };
    var agendar = function () {
      if (pendente) return;
      pendente = true;
      window.requestAnimationFrame(desenhar);
    };

    medir();
    desenhar();
    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", function () { medir(); agendar(); }, { passive: true });

    // A página cresce depois do load: fonte troca, imagem lazy entra.
    // Sem isto o fio termina antes ou depois do fim real da página.
    if ("ResizeObserver" in window) {
      new ResizeObserver(function () { medir(); agendar(); }).observe(document.documentElement);
    } else {
      window.addEventListener("load", function () { medir(); agendar(); });
    }
  }

  /* ---------------------------------------------------------------
     Botão flutuante do WhatsApp. Duas razões para ele sumir:

     1. No topo da página ele seria o terceiro botão com a mesma frase à
        vista ao mesmo tempo (o do cabeçalho, o do hero e ele). Só entra
        depois que a primeira tela sai de cena, quando os outros dois já
        não estão mais lá.
     2. Sobre a seção de contato ele cobriria o mapa e os dados.
     --------------------------------------------------------------- */
  var zap = document.querySelector(".zap");
  if (zap) {
    var contato = document.getElementById("contato");
    var sobreContato = false;
    var noTopo = true;

    var atualizarZap = function () {
      zap.classList.toggle("zap-oculto", noTopo || sobreContato);
    };
    var medirTopo = function () {
      noTopo = window.scrollY < window.innerHeight * 0.85;
      atualizarZap();
    };

    medirTopo();
    window.addEventListener("scroll", medirTopo, { passive: true });
    window.addEventListener("resize", medirTopo, { passive: true });

    if (contato && "IntersectionObserver" in window) {
      new IntersectionObserver(function (entradas) {
        sobreContato = entradas[0].isIntersecting;
        atualizarZap();
      }, { threshold: 0.25 }).observe(contato);
    }
  }

  /* ---------------------------------------------------------------
     Vídeo do hero: se o arquivo não existir ainda, cai para a foto.
     Evita o quadro preto enquanto o vídeo não é entregue.
     --------------------------------------------------------------- */
  var video = document.querySelector(".hero-video");
  if (video) {
    video.addEventListener("error", function () { trocarPorFoto(video); }, true);
    // nenhuma fonte carregável
    if (video.networkState === 3) trocarPorFoto(video);
  }
  function trocarPorFoto(v) {
    var foto = document.querySelector(".hero-foto");
    if (foto) foto.hidden = false;
    v.remove();
  }
})();
