/* =========================================================================
   Filtro do índice do blog.

   Melhoria progressiva: sem JavaScript, todos os artigos aparecem e os
   botões de filtro ficam escondidos — a lista continua completa e navegável.
   Aceita ?grupo=exames na URL, e reflete a escolha na barra de endereço.
   ========================================================================= */

(function () {
  "use strict";

  var filtros = document.querySelectorAll(".filtro");
  var cartoes = document.querySelectorAll("#lista [data-grupo]");
  var vazio = document.querySelector(".filtro-vazio");
  if (!filtros.length || !cartoes.length) return;

  // Aliases para os links vindos da home, que falam em "categoria".
  var ALIAS = {
    doenca: "doencas",
    doencas: "doencas",
    exame: "exames",
    exames: "exames",
    dica: "dicas",
    dicas: "dicas",
  };

  function aplicar(grupo, atualizarUrl) {
    var visiveis = 0;

    cartoes.forEach(function (c) {
      var mostra = grupo === "todos" || c.dataset.grupo === grupo;
      c.hidden = !mostra;
      if (mostra) visiveis++;
    });

    filtros.forEach(function (b) {
      var ativo = b.dataset.grupo === grupo;
      b.classList.toggle("filtro-ativo", ativo);
      b.setAttribute("aria-pressed", String(ativo));
    });

    if (vazio) vazio.hidden = visiveis > 0;

    // Depois de um clique, quem reaparece já entra visível: esperar o
    // observador de rolagem faria a lista piscar em branco a cada filtro.
    if (atualizarUrl) {
      cartoes.forEach(function (c) {
        if (!c.hidden) c.classList.add("surge-visivel");
      });
    }

    if (atualizarUrl) {
      var url = new URL(window.location.href);
      url.searchParams.delete("categoria"); // o alias da home não fica acumulando
      if (grupo === "todos") url.searchParams.delete("grupo");
      else url.searchParams.set("grupo", grupo);
      history.replaceState(null, "", url);
    }
  }

  filtros.forEach(function (b) {
    b.setAttribute("aria-pressed", String(b.classList.contains("filtro-ativo")));
    b.addEventListener("click", function () { aplicar(b.dataset.grupo, true); });
  });

  var busca = new URLSearchParams(window.location.search);
  var pedido = busca.get("grupo") || busca.get("categoria");
  var inicial = ALIAS[String(pedido).toLowerCase()] || "todos";
  aplicar(inicial, false);
})();
