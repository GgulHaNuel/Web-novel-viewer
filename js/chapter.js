(function () {
  var header = document.querySelector('.ch-header');
  var nav = document.querySelector('.ch-nav');
  if (!header || !nav) return;

  var uiVisible = false;

  function show() {
    header.classList.add('ui-visible');
    nav.classList.add('ui-visible');
    uiVisible = true;
  }

  function hide() {
    header.classList.remove('ui-visible');
    nav.classList.remove('ui-visible');
    uiVisible = false;
  }

  document.addEventListener('click', function (e) {
    if (e.target.closest('a') || e.target.closest('button')) return;
    uiVisible ? hide() : show();
  });

  window.addEventListener('scroll', function () {
    if (uiVisible) hide();
  }, { passive: true });
})();
