const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const serviceTrigger = document.querySelector('.nav-trigger');
const serviceDropdown = document.querySelector('.nav-dropdown');

menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  mobileNav?.classList.toggle('is-open', open);
});

serviceTrigger?.addEventListener('click', () => {
  const open = serviceTrigger.getAttribute('aria-expanded') !== 'true';
  serviceTrigger.setAttribute('aria-expanded', String(open));
  serviceDropdown?.classList.toggle('is-open', open);
});

document.addEventListener('click', (event) => {
  if (serviceDropdown && !serviceDropdown.contains(event.target)) {
    serviceDropdown.classList.remove('is-open');
    serviceTrigger?.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    serviceDropdown?.classList.remove('is-open');
    serviceTrigger?.setAttribute('aria-expanded', 'false');
    mobileNav?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }
});
