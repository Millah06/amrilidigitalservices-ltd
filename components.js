/* Shared navigation and footer injected on every page */

document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname;
  const isActive = (href) => path.endsWith(href) ? 'active' : '';

  /* ── Navbar ── */
  const navHTML = `
<nav class="navbar">
  <div class="container nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="amrilidigitalserviceslogo.png" alt="Amrili Digital Services Logo">
      <div class="nav-logo-text">
        Amrili Digital Services
        <span>RC: 9339018 &nbsp;|&nbsp; TIN: 2620587976724</span>
      </div>
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html"    class="${isActive('index.html')}">Home</a></li>
      <li><a href="services.html" class="${isActive('services.html')}">Services</a></li>
      <li><a href="about.html"    class="${isActive('about.html')}">About</a></li>
      <li><a href="contact.html"  class="${isActive('contact.html')}">Contact</a></li>
      <li class="nav-cta"><a href="contact.html" class="btn btn-primary">Get Started</a></li>
    </ul>
    <div class="hamburger" id="hamburger" aria-label="Menu" role="button" tabindex="0">
      <span></span><span></span><span></span>
    </div>
  </div>
</nav>`;

  /* ── Footer ── */
  const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="amrilidigitalserviceslogo.png" alt="Amrili Digital Services">
        <p>A Nigerian technology company building digital platforms, software solutions, and marketplace infrastructure for businesses and individuals.</p>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Our Services</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Legal</h4>
        <ul>
          <li><a href="terms.html">Terms &amp; Conditions</a></li>
          <li><a href="privacy.html">Privacy Policy</a></li>
          <li><a href="refund.html">Refund Policy</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:info@amrilidigitalservices.com">info@amrilidigitalservices.com</a></li>
          <li><a href="tel:+2348087798514">+234 808 779 8514</a></li>
          <li>006, Inuwa Dahiru Road,<br>Azare, Bauchi State, Nigeria</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 Amrili Digital Services Ltd. All rights reserved. RC: 9339018</span>
      <div class="footer-legal">
        <a href="privacy.html">Privacy</a>
        <a href="terms.html">Terms</a>
        <a href="refund.html">Refund Policy</a>
      </div>
    </div>
  </div>
</footer>`;

  /* ── Inject Navbar at top of body ── */
  const navEl = document.createElement('div');
  navEl.innerHTML = navHTML;
  document.body.insertBefore(navEl.firstElementChild, document.body.firstChild);

  /* ── Inject Footer at bottom of body ── */
  const footEl = document.createElement('div');
  footEl.innerHTML = footerHTML;
  document.body.appendChild(footEl.firstElementChild);

  /* Mobile menu toggle */
  const burger = document.getElementById('hamburger');
  const links  = document.getElementById('navLinks');
  if (burger && links) {
    burger.addEventListener('click', () => links.classList.toggle('open'));
    burger.addEventListener('keydown', e => { if(e.key==='Enter') links.classList.toggle('open'); });
  }
});