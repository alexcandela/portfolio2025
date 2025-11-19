// ============================================
// ESTADO DE LA APLICACIÓN
// ============================================
let currentLang = 'es';

// ============================================
// MENÚ HAMBURGUESA
// ============================================
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

// Toggle del menú mobile
hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
  navLinks.classList.toggle('active');
  
  // Prevenir scroll cuando el menú está abierto
  if (navLinks.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

// Cerrar menú al hacer click en un link
document.querySelectorAll('.links-btn a').forEach(link => {
  link.addEventListener('click', () => {
    hamburgerBtn.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Cerrar menú al hacer click fuera
navLinks.addEventListener('click', (e) => {
  if (e.target === navLinks) {
    hamburgerBtn.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ============================================
// TRADUCCIÓN
// ============================================
const langToggle = document.getElementById('langToggle');

langToggle.addEventListener('change', () => {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  translatePage();
});

function translatePage() {
  document.querySelectorAll('[data-es]').forEach(element => {
    const text = element.getAttribute(`data-${currentLang}`);
    if (text) {
      element.textContent = text;
    }
  });
}

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      const blockSetting = targetId === 'proyectos' ? 'start' : 'center';
      
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: blockSetting,
        inline: 'center'
      });
    }
  });
});

// ============================================
// ANIMACIONES AL SCROLL
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// ============================================
// CERRAR MENÚ AL CAMBIAR TAMAÑO DE VENTANA
// ============================================
window.addEventListener('resize', () => {
  if (window.innerWidth > 968) {
    hamburgerBtn.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
  }
});