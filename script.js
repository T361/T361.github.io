const navItems = document.querySelectorAll('.nav-item');
const panels = document.querySelectorAll('.panel');
const pageTitle = document.getElementById('pageTitle');
const sidebar = document.getElementById('sidebar');
const backdrop = document.getElementById('backdrop');
const menuBtn = document.getElementById('menuBtn');
const toggle = document.getElementById('toggle');

function closeSidebar() {
  sidebar.classList.remove('open');
  backdrop.classList.remove('show');
}

function openSidebar() {
  sidebar.classList.add('open');
  backdrop.classList.add('show');
}

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    const target = item.dataset.target;

    navItems.forEach((n) => n.classList.remove('active'));
    item.classList.add('active');

    panels.forEach((p) => p.classList.remove('active'));
    document.getElementById(target).classList.add('active');

    pageTitle.textContent = item.textContent.trim();

    if (window.innerWidth <= 860) closeSidebar();
  });
});

menuBtn.addEventListener('click', openSidebar);
toggle.addEventListener('click', closeSidebar);
backdrop.addEventListener('click', closeSidebar);
