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
    botaoMenu.addEventListener("click", function () {
      var aberto = menu.classList.toggle("menu-aberto");
      botaoMenu.setAttribute("aria-expanded", String(aberto));
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        menu.classList.remove("menu-aberto");
        botaoMenu.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("menu-aberto")) {
        menu.classList.remove("menu-aberto");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.focus();
      }
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
     --------------------------------------------------------------- */
  var traco = document.querySelector(".fio-traco");
  if (traco && typeof traco.getTotalLength === "function") {
    var total = traco.getTotalLength();
    traco.style.strokeDasharray = total;

    if (semMovimento) {
      traco.style.strokeDashoffset = 0;
    } else {
      traco.style.strokeDashoffset = total;

      var pendente = false;
      var desenhar = function () {
        pendente = false;
        var altura = document.documentElement.scrollHeight - window.innerHeight;
        var p = altura > 0 ? Math.min(1, Math.max(0, window.scrollY / altura)) : 1;
        traco.style.strokeDashoffset = total * (1 - p);
      };
      var agendar = function () {
        if (pendente) return;
        pendente = true;
        window.requestAnimationFrame(desenhar);
      };
      desenhar();
      window.addEventListener("scroll", agendar, { passive: true });
      window.addEventListener("resize", agendar, { passive: true });
    }
  }

  /* ---------------------------------------------------------------
     Botão flutuante do WhatsApp: sai de cena sobre a seção de contato,
     para não cobrir o mapa e os dados.
     --------------------------------------------------------------- */
  var zap = document.querySelector(".zap");
  var contato = document.getElementById("contato");
  if (zap && contato && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entradas) {
      zap.classList.toggle("zap-oculto", entradas[0].isIntersecting);
    }, { threshold: 0.25 }).observe(contato);
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
