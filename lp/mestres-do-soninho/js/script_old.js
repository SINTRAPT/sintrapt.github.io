document.addEventListener("DOMContentLoaded", () => {
  const affiliateLinks = document.querySelectorAll('a[href="https://kiwify.app/AOuALoz?afid=jXAadeer"]');

  affiliateLinks.forEach((link) => {
    link.addEventListener("click", () => {
      console.log("CTA clicado");
    });
  });
});
