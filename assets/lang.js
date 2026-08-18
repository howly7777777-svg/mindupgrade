(function () {
  var STORAGE_KEY = "mu-lang";
  var SUPPORTED = ["en", "zh-Hant", "zh-Hans", "ja", "ko", "es", "pt-BR"];

  function detect() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.indexOf(saved) !== -1) return saved;

    var list = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || "en"];

    for (var i = 0; i < list.length; i++) {
      var id = String(list[i] || "");
      var lower = id.toLowerCase();
      if (lower.indexOf("es") === 0) return "es";
      if (lower.indexOf("pt") === 0) return "pt-BR";
      if (lower.indexOf("ja") === 0) return "ja";
      if (lower.indexOf("ko") === 0) return "ko";
      if (lower.indexOf("en") === 0) return "en";
      if (
        lower.indexOf("hant") !== -1 ||
        lower.indexOf("zh-tw") !== -1 ||
        lower.indexOf("zh-hk") !== -1 ||
        lower.indexOf("zh-mo") !== -1
      ) {
        return "zh-Hant";
      }
      if (lower.indexOf("zh") === 0) return "zh-Hans";
    }
    return "en";
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = "en";
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    var sel = document.querySelector(".lang-selector");
    if (sel) sel.value = lang;
  }

  window.changeLanguage = setLang;

  document.addEventListener("DOMContentLoaded", function () {
    setLang(detect());
  });
})();
