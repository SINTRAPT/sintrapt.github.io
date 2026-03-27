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
  const footer = document.querySelector(".footer");
  const triggerSection = document.querySelector(".proof-section");

  function toggleFloatingCta() {
    if (!floatingCta) return;

    let passedTrigger = false;
    let nearFooter = false;

    if (triggerSection) {
      const triggerRect = triggerSection.getBoundingClientRect();
      passedTrigger = triggerRect.bottom < window.innerHeight * 0.35;
    }

    if (footer) {
      const footerRect = footer.getBoundingClientRect();
      nearFooter = footerRect.top < window.innerHeight - 120;
    }

    const shouldShow = passedTrigger && !nearFooter;

    if (shouldShow) {
      floatingCta.classList.add("show");
    } else {
      floatingCta.classList.remove("show");
    }
  }

  window.addEventListener("scroll", toggleFloatingCta, { passive: true });
  window.addEventListener("resize", toggleFloatingCta);
  toggleFloatingCta();
});

window.product_name = "mestre-amador";
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