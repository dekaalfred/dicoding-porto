document.getElementById('year').textContent = new Date().getFullYear();

// Highlight nav link sesuai section yang sedang terlihat di layar
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    if (entry.isIntersecting) {
    const id = entry.target.getAttribute('id');
    navLinks.forEach((link) => {
        link.classList.toggle('active', link.dataset.section === id);
    });
    }
});
}, {
  rootMargin: '-40% 0px -50% 0px' // section dianggap "aktif" saat berada di sekitar tengah layar
});

sections.forEach((section) => observer.observe(section));