/**
 * 吹雪云 (chuixueyun.top) Yuki Minimal Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking nav items
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            other.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
          }
        });
        // Toggle current
        if (isActive) {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // 3. Smooth Anchor Scrolling with header offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 4. Node Latency Micro-Ticker Simulation
  const pingBadges = document.querySelectorAll('.live-ping');
  if (pingBadges.length > 0) {
    setInterval(() => {
      pingBadges.forEach(badge => {
        const base = parseInt(badge.dataset.base || '18', 10);
        const jitter = Math.floor(Math.random() * 5) - 2;
        const current = Math.max(12, base + jitter);
        badge.textContent = `${current}ms`;
      });
    }, 3500);
  }
});
