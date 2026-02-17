(function () {
  // ====== CONFIG ======
  const PRODUCT_SLUG = "fera";
  const COUNTDOWN_MODE = "end_of_day"; // "end_of_day" ou "fixed"
  const FIXED_END_ISO = ""; // ex: "2026-02-20T23:59:59-03:00" (se quiser fixo)

  // ====== HELPERS ======
  function dlPush(eventName, params = {}) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      product_slug: PRODUCT_SLUG,
      ...params
    });
  }

  // ====== VIEW EVENT ======
  document.addEventListener("DOMContentLoaded", () => {
    dlPush("lp_view", { page_path: location.pathname });
  });

  // ====== CTA CLICK ======
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-cta-id]");
    if (!a) return;

    dlPush("rca_click", {
      cta_id: a.getAttribute("data-cta-id"),
      link_url: a.href
    });
  });

  // ====== COUNTDOWN ======
  function getEndTime() {
    if (COUNTDOWN_MODE === "fixed" && FIXED_END_ISO) {
      return new Date(FIXED_END_ISO);
    }
    // end_of_day: hoje às 23:59:59 (local)
    const now = new Date();
    const end = new Date(now);
    end.setHours(23, 59, 59, 999);
    return end;
  }

  function pad(n) { return String(n).padStart(2, "0"); }

  function tickCountdown() {
    const el = document.getElementById("countdown");
    if (!el) return;

    const end = getEndTime();
    const now = new Date();
    const diff = end - now;

    if (diff <= 0) {
      el.textContent = "00:00:00";
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    el.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
  }

  setInterval(tickCountdown, 1000);
  tickCountdown();
})();
