document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".cta-btn");

  buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {

      const ctaId = this.dataset.cta;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "rca_click",
        product_slug: "fera",
        cta_id: ctaId
      });

    });
  });

});
