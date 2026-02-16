<script>
  window.dataLayer = window.dataLayer || [];

  // Evento: LP view
  window.dataLayer.push({
    event: "lp_view",
    product_slug: "fera"
  });

  // Evento: clique no RCA
  document.addEventListener("click", function (e) {
    const btn = e.target.closest("[data-rca]");
    if (!btn) return;

    window.dataLayer.push({
      event: "rca_click",
      product_slug: "fera",
      cta_id: btn.getAttribute("data-cta-id") || "cta_main"
    });
  });
</script>
