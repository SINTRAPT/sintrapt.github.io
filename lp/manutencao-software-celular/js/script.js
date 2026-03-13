document.addEventListener('DOMContentLoaded', function () {
  const animatedBlocks = document.querySelectorAll('.card, .info-box, .faq details, .cta-box, .hero-card');

  animatedBlocks.forEach((block) => {
    block.classList.add('reveal');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  animatedBlocks.forEach((block) => observer.observe(block));
});
