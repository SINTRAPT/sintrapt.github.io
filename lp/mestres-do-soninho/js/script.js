<script>
document.addEventListener("click", function(e){

var el = e.target.closest(".cta_tracking");
if(!el) return;

var eventName = el.dataset.event || "rca_click";
var location = el.dataset.location || "unknown";
var product = el.dataset.product || "unknown";
var type = el.dataset.type || "unknown";
var url = el.href || "";

dataLayer.push({
event: eventName,
button_location: location,
product_name: product,
button_type: type,
button_url: url
});

});
</script>
