(function () {
  var overlay = document.getElementById('lineup-video-overlay');
  var player = document.getElementById('lineup-video-player');
  var names = document.querySelectorAll('.lineup-name');

  if (!overlay || !player) return;

  function showVideo(src) {
    player.src = src;
    player.currentTime = 0;
    player.play();
    overlay.classList.add('is-visible');
    overlay.setAttribute('aria-hidden', 'false');
  }

  function hideVideo() {
    player.pause();
    player.removeAttribute('src');
    overlay.classList.remove('is-visible');
    overlay.setAttribute('aria-hidden', 'true');
  }

  names.forEach(function (el) {
    var src = el.getAttribute('data-video');
    if (!src) return;

    el.addEventListener('mouseenter', function () {
      showVideo(src);
    });

    el.addEventListener('mouseleave', function () {
      hideVideo();
    });
  });

  // Preload first few videos in the background so hover playback starts faster
  var preloadCount = 5;
  for (var i = 0; i < names.length && i < preloadCount; i++) {
    var src = names[i].getAttribute('data-video');
    if (!src) continue;
    var preload = document.createElement('video');
    preload.preload = 'auto';
    preload.src = src;
    preload.load();
  }
})();
