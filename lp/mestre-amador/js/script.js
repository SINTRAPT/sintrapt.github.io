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
