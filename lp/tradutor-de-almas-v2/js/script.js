window.product_name = "Tradutor-Almas";
window.lp_version = "v2";

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

document.addEventListener("DOMContentLoaded", function () {
  const floatingCta = document.getElementById("floatingCta");
  const floatingText = document.getElementById("floatingCtaText");

  if (!floatingCta || !floatingText) return;

  const problema = document.querySelector("#problema");
  const quebra = document.querySelector("#quebra");
  const solucao = document.querySelector("#solucao");
  const autoridade = document.querySelector("#autoridade");
  const programacao = document.querySelector("#programacao");
  const profissao = document.querySelector("#profissao");
  const oferta = document.querySelector("#oferta");
  const prova = document.querySelector("#prova");
  const faq = document.querySelector("#faq");
  const finalSection = document.querySelector("#final");

  const blockingCtas = document.querySelectorAll(".hide-floating-trigger");

  function isMobile() {
    return window.innerWidth < 768;
  }

  function isVisible(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function isMostlyVisible(el, threshold = 0.35) {
    if (!el) return false;

    const rect = el.getBoundingClientRect();
    const visibleTop = Math.max(rect.top, 0);
    const visibleBottom = Math.min(rect.bottom, window.innerHeight);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);
    const ratio = visibleHeight / rect.height;

    return ratio >= threshold;
  }

  function anyBlockingVisible() {
    return Array.from(blockingCtas).some((el) => isMostlyVisible(el, 0.35));
  }

  function distanceToViewportCenter(el) {
    if (!el) return Infinity;
    const rect = el.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = window.innerHeight / 2;
    return Math.abs(elementCenter - viewportCenter);
  }

  function getActiveSection() {
    const sections = [
      { key: "oferta", el: oferta },
      { key: "prova", el: prova },
      { key: "profissao", el: profissao },
      { key: "programacao", el: programacao },
      { key: "solucao", el: solucao },
      { key: "autoridade", el: autoridade },
      { key: "quebra", el: quebra },
      { key: "problema", el: problema }
    ].filter((section) => isVisible(section.el));

    if (!sections.length) return null;

    sections.sort((a, b) => {
      return distanceToViewportCenter(a.el) - distanceToViewportCenter(b.el);
    });

    return sections[0].key;
  }

  function updateFloatingCTA() {
    if (!isMobile()) {
      floatingCta.style.display = "none";
      return;
    }

    floatingCta.style.display = "";

    let show = false;

    // só começa a exibir depois que entrar em "problema"
    if (problema) {
      const rect = problema.getBoundingClientRect();
      show = rect.top < window.innerHeight;
    }

    // esconde quando CTA principal estiver visível
    if (anyBlockingVisible()) {
      show = false;
    }

    // esconde no bloco final
    if (finalSection && isVisible(finalSection)) {
      show = false;
    }

    const activeSection = getActiveSection();

    if (activeSection === "oferta") {
      floatingText.innerText = "Garantir minha vaga agora";
      floatingText.dataset.location = "cta_flutuante_oferta";
    } else if (activeSection === "prova") {
      floatingText.innerText = "Quero ter esse resultado";
      floatingText.dataset.location = "cta_flutuante_prova";
    } else if (activeSection === "profissao") {
      floatingText.innerText = "Quero garantir minha vaga";
      floatingText.dataset.location = "cta_flutuante_profissao";
    } else if (activeSection === "programacao") {
      floatingText.innerText = "Quero participar da imersão";
      floatingText.dataset.location = "cta_flutuante_programacao";
    } else if (activeSection === "solucao") {
      floatingText.innerText = "Quero participar da imersão";
      floatingText.dataset.location = "cta_flutuante_solucao";
    } else if (activeSection === "autoridade") {
      floatingText.innerText = "Quero ver como funciona";
      floatingText.dataset.location = "cta_flutuante_autoridade";
    } else if (activeSection === "quebra") {
      floatingText.innerText = "Quero entender isso na prática";
      floatingText.dataset.location = "cta_flutuante_quebra";
    } else if (activeSection === "problema") {
      floatingText.innerText = "Quero sair desse ciclo agora";
      floatingText.dataset.location = "cta_flutuante_problema";
    } else {
      floatingText.innerText = "Garantir minha vaga agora";
      floatingText.dataset.location = "cta_flutuante_default";
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