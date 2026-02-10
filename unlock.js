(function () {
  var block = document.getElementById('unlock-block');
  if (!block) return;

  block.addEventListener('mouseenter', function () {
    block.classList.add('is-hover');
  });

  block.addEventListener('mouseleave', function () {
    block.classList.remove('is-hover');
  });
})();
