// assets/js/app.js
async function loadComponent(containerId, filePath) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const res = await fetch(filePath);
  container.innerHTML = await res.text();
}

(async () => {
  const isInPages = location.pathname.includes('/pages/');
  const base = isInPages ? '..' : '.';
  await loadComponent('navbar-container', `${base}/components/navbar.html`);
})();

