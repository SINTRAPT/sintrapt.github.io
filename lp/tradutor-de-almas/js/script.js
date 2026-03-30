document.addEventListener("DOMContentLoaded", function () {
  const pageConfig = {
    currentLot: "1º LOTE ATIVO",
    currentPrice: "R$ 37,00",
    installments: "5x de R$ 8,19",
    nextLot: "2º LOTE",
    nextPrice: "R$ 47,00",
    urgencyText: "🔥 Lote promocional ativo por tempo limitado",
    eventDate: "11 e 12 de Abril",
    eventTime: "Das 9h às 17h",
    eventFormat: "100% Online"
  };

  updateText("lot-name", pageConfig.currentLot);
  updateText("current-price", pageConfig.currentPrice);
  updateText("installments", pageConfig.installments);
  updateText("next-lot", pageConfig.nextLot);
  updateText("next-price", pageConfig.nextPrice);
  updateText("urgency-text", pageConfig.urgencyText);
  updateText("event-date", pageConfig.eventDate);
  updateText("event-time", pageConfig.eventTime);
  updateText("event-format", pageConfig.eventFormat);

  function updateText(id, value) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  }
});

/*
document.addEventListener("DOMContentLoaded", function () {
  const floatingCta = document.getElementById("floatingCta");
  const floatingText = document.getElementById("floatingCtaText");

  const solucao = document.querySelector("#solucao");
  const prova = document.querySelector("#prova");
  const oferta = document.querySelector("#oferta");
  const autoridade = document.querySelector("#autoridade");
  const finalSection = document.querySelector(".final-section");

  const blockingCtas = document.querySelectorAll(".hide-floating-trigger");

  function isVisible(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function anyBlockingVisible() {
    return Array.from(blockingCtas).some(el => isVisible(el));
  }

  function updateFloatingCTA() {
    if (!floatingCta) return;

    let show = false;

    // CONTROLE DE EXIBIÇÃO
    if (autoridade) {
      const rect = autoridade.getBoundingClientRect();
      show = rect.top < window.innerHeight;
    }

    if (finalSection && isVisible(finalSection)) {
      show = false;
    }

    if (anyBlockingVisible()) {
      show = false;
    }

    // TROCA DE COPY DINÂMICA
    if (oferta && isVisible(oferta)) {
      floatingText.innerText = "Garantir minha vaga agora";
	  floatingText.href = "#oferta";
	  floatingText.dataset.location="cta_flutuante_oferta";
    } else if (prova && isVisible(prova)) {
      floatingText.innerText = "Quero ter esse resultado";
	  floatingText.href = "#oferta";
	  floatingText.dataset.location="cta_flutuante_prova";
	} else if (autoridade && isVisible(autoridade)) {
      floatingText.innerText = "Quero entender o método completo";
	  floatingText.href = "#oferta";
	  floatingText.dataset.location="cta_flutuante_autoridade";
    } else if (solucao && isVisible(solucao)) {
      floatingText.innerText = "Quero entender o que está me travando";
	  floatingText.href = "#oferta";
	  floatingText.dataset.location="cta_flutuante_solucao";
    } 

    // EXIBIÇÃO
    if (show) {
      floatingCta.classList.add("show");
    } else {
      floatingCta.classList.remove("show");
    }
  }

  window.addEventListener("scroll", updateFloatingCTA, { passive: true });
  window.addEventListener("resize", updateFloatingCTA);

  updateFloatingCTA();
});
*/

document.addEventListener("DOMContentLoaded", function () {
  const floatingCta = document.getElementById("floatingCta");
  const floatingText = document.getElementById("floatingCtaText");

  const solucao = document.querySelector("#solucao");
  const prova = document.querySelector(".proof-section");
  const oferta = document.querySelector("#oferta");
  const autoridade = document.querySelector("#autoridade");
  const finalSection = document.querySelector(".final-section");

  const blockingCtas = document.querySelectorAll(".hide-floating-trigger");

  function isVisible(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function anyBlockingVisible() {
    return Array.from(blockingCtas).some(el => isVisible(el));
  }

  function distanceToViewportCenter(el) {
    if (!el) return Infinity;
    const rect = el.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = window.innerHeight / 2;
    return Math.abs(elementCenter - viewportCenter);
  }

  function getActiveSection() {
    const visibleSections = [
      { key: "oferta", el: oferta },
      { key: "prova", el: prova },
      { key: "solucao", el: solucao },
      { key: "autoridade", el: autoridade }
    ].filter(section => isVisible(section.el));

    if (!visibleSections.length) return null;

    visibleSections.sort((a, b) => {
      return distanceToViewportCenter(a.el) - distanceToViewportCenter(b.el);
    });

    return visibleSections[0].key;
  }

  function updateFloatingCTA() {
    if (!floatingCta || !floatingText) return;

    let show = false;

    if (solucao) {
      const rect = solucao.getBoundingClientRect();
      show = rect.top < window.innerHeight;
    }

    if (finalSection && isVisible(finalSection)) {
      show = false;
    }

    if (anyBlockingVisible()) {
      show = false;
    }

    const activeSection = getActiveSection();

    if (activeSection === "oferta") {
      floatingText.innerText = "Garantir minha vaga agora";
      floatingText.href = "#oferta";
      floatingText.dataset.location = "cta_flutuante_oferta";
    } else if (activeSection === "prova") {
      floatingText.innerText = "Quero ter esse resultado";
      floatingText.href = "#oferta";
      floatingText.dataset.location = "cta_flutuante_prova";
    } else if (activeSection === "solucao") {
      floatingText.innerText = "Quero entender o que está me travando";
      floatingText.href = "#oferta";
      floatingText.dataset.location = "cta_flutuante_solucao";
    } else if (activeSection === "autoridade") {
      floatingText.innerText = "Quero entender o método completo";
      floatingText.href = "#oferta";
      floatingText.dataset.location = "cta_flutuante_autoridade";
    }

    if (show) {
      floatingCta.classList.add("show");
    } else {
      floatingCta.classList.remove("show");
    }
  }

  window.addEventListener("scroll", updateFloatingCTA, { passive: true });
  window.addEventListener("resize", updateFloatingCTA);
  updateFloatingCTA();
});

window.product_name = "Tradutor-Almas";
window.lp_version = "v1";

document.addEventListener("click", function(e){

var el = e.target.closest(".cta_tracking");
if(!el) return;

var eventName = el.dataset.event || "rca_click";
var location = el.dataset.location || "unknown";
var type = el.dataset.type || "unknown";
var url = el.href || "";


dataLayer.push({
event: eventName,
button_location: location,
button_type: type,
button_url: url,
});

if(type === "checkout" || type === "pagina_vendas"){
e.preventDefault();

setTimeout(function(){
window.open(url, "_blank");
},150);
}

});