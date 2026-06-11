(function () {
  const STORAGE_KEY = "mu-lang";
  const DEFAULT = "en";

  function setLang(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var saved = localStorage.getItem(STORAGE_KEY) || DEFAULT;
    setLang(saved);

    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.dataset.lang);
      });
    });
  });
})();
