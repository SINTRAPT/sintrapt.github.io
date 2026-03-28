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

document.addEventListener("DOMContentLoaded", function () {
const floatingCta = document.getElementById("floatingCta");
const triggerSection = document.querySelector(".proof-section");
const finalSection = document.querySelector(".final-section");
const primaryCtas = document.querySelectorAll(".primary-cta");

function isElementVisible(el) {
  if (!el) return false;

  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const verticallyVisible = rect.top < windowHeight && rect.bottom > 0;
  const horizontallyVisible = rect.left < windowWidth && rect.right > 0;

  return verticallyVisible && horizontallyVisible;
}

function anyPrimaryCtaVisible() {
  for (const cta of primaryCtas) {
	if (isElementVisible(cta)) {
	  return true;
	}
  }
  return false;
}

function toggleFloatingCta() {
  if (!floatingCta) return;

  let show = false;

  if (triggerSection) {
	const triggerRect = triggerSection.getBoundingClientRect();
	show = triggerRect.top < window.innerHeight - 120;
  }

  if (finalSection) {
	const finalRect = finalSection.getBoundingClientRect();
	if (finalRect.top < window.innerHeight - 120) {
	  show = false;
	}
  }

  // Esconde se já existir outro CTA principal visível na tela
  if (anyPrimaryCtaVisible()) {
	show = false;
  }

  if (show) {
	floatingCta.classList.add("show");
  } else {
	floatingCta.classList.remove("show");
  }
}

window.addEventListener("scroll", toggleFloatingCta, { passive: true });
window.addEventListener("resize", toggleFloatingCta);
toggleFloatingCta();
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