// Optional: highlight current page in nav (already done with .active class in HTML)
// Use this if you want to do it via JS or add other interactions
document.querySelectorAll('.nav-link').forEach(function (link) {
  if (link.getAttribute('href') === window.location.pathname.split('/').pop() || 
      (window.location.pathname === '/' && link.getAttribute('href') === 'index.html')) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
