function toggleTheme() {
  document.body.classList.toggle('dark');
}

const hamburger = document.querySelector('.hamburger');
const navContent = document.querySelector('.nav-content');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navContent.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navContent.contains(e.target)) {
        hamburger.classList.remove('active');
        navContent.classList.remove('active');
    }
});

// Close menu when clicking a link
const navLinks = document.querySelectorAll('nav ul li');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navContent.classList.remove('active');
    });
});