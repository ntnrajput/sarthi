// assets/js/app.js

// Helper to load components dynamically
async function loadComponent(containerId, filePath) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const res = await fetch(filePath);
  container.innerHTML = await res.text();
}

// Load only navbar for dashboard (sidebar removed)
(async () => {
  await loadComponent('navbar-container', 'components/navbar.html');
})();
