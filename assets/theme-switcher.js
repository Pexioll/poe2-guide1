(function () {
  var THEMES = ["theme-minimal", "theme-wiki", "theme-codex"];
  var DEFAULT_THEME = "theme-wiki";
  var STORAGE_KEY = "poe2-guide-theme";

  function applyTheme(theme) {
    var active = THEMES.indexOf(theme) >= 0 ? theme : DEFAULT_THEME;
    document.body.classList.remove.apply(document.body.classList, THEMES);
    document.body.classList.add(active);
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // Ignore storage errors
    }
  }

  function createSwitcher(activeTheme) {
    var container = document.createElement("div");
    container.className = "theme-switcher";

    var label = document.createElement("label");
    label.setAttribute("for", "theme-select");
    label.textContent = "Theme";

    var select = document.createElement("select");
    select.id = "theme-select";
    select.setAttribute("aria-label", "Choose page theme");

    var options = [
      { value: "theme-minimal", text: "Minimal" },
      { value: "theme-wiki", text: "Wiki" },
      { value: "theme-codex", text: "Codex" }
    ];

    options.forEach(function (opt) {
      var option = document.createElement("option");
      option.value = opt.value;
      option.textContent = opt.text;
      if (opt.value === activeTheme) {
        option.selected = true;
      }
      select.appendChild(option);
    });

    select.addEventListener("change", function () {
      applyTheme(select.value);
      setStoredTheme(select.value);
    });

    container.appendChild(label);
    container.appendChild(select);
    document.body.appendChild(container);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var saved = getStoredTheme();
    var theme = THEMES.indexOf(saved) >= 0 ? saved : DEFAULT_THEME;
    applyTheme(theme);
    createSwitcher(theme);
  });
})();
