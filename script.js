// Nav: highlight current page
document.querySelectorAll('.nav-link').forEach(function (link) {
  var page = window.location.pathname.split('/').pop() || 'index.html';
  if (link.getAttribute('href') === page) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// Intro page: force play and show fallback if video fails (e.g. .MOV in Chrome)
(function () {
  var video = document.getElementById('intro-video');
  var fallback = document.getElementById('intro-fallback');
  if (!video || !fallback) return;

  function showFallback() {
    fallback.classList.add('is-visible');
  }

  function hideFallback() {
    fallback.classList.remove('is-visible');
  }

  video.addEventListener('canplay', function () {
    video.play().catch(function () { showFallback(); });
    hideFallback();
  });

  video.addEventListener('playing', hideFallback);

  video.addEventListener('error', function () {
    showFallback();
  });

  // If video never plays (e.g. codec not supported), show fallback after a short delay
  setTimeout(function () {
    if (video.readyState < 2) {
      showFallback();
    }
  }, 1500);
})();
