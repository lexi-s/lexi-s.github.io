// Minimal JS: set copyright year
(function () {
  const YEAR = document.getElementById('year');
  if (YEAR) YEAR.textContent = new Date().getFullYear();
})();