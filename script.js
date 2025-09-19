// script.js - small enhancements
document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
menuToggle?.addEventListener('click', ()=>{
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  if(mainNav) mainNav.style.display = expanded ? 'none' : 'flex';
});

// Simple contact form behavior: open mail client with form content (demo)
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || 'Friend';
    const email = data.get('email') || '';
    const message = data.get('message') || '';
    const subject = encodeURIComponent('Contact from Hope4Lives website');
    const body = encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+message);
    // mailto link
    window.location.href = `mailto:hello@hope4lives.org?subject=${subject}&body=${body}`;
  });
}
