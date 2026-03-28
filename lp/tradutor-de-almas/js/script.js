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

window.addEventListener("scroll", function () {
  const trigger = document.querySelector(".proof-section");
  const finalSection = document.querySelector(".final-cta");
  const button = document.querySelector(".floating-cta");

  if (!trigger || !button) return;

  const triggerTop = trigger.getBoundingClientRect().top;

  if (triggerTop < window.innerHeight - 100) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }

  // 👇 ESCONDE no final
  if (finalSection) {
    const finalTop = finalSection.getBoundingClientRect().top;

    if (finalTop < window.innerHeight - 100) {
      button.classList.remove("show");
    }
  }
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