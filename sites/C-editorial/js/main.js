/**
 * 广东岭南律师事务所 - 编辑质感风格
 * main.js - 动画与交互脚本
 */

(function() {
  'use strict';

  // ========================================
  // Navigation
  // ========================================
  
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navOverlay = document.querySelector('.nav-overlay');
  
  // Scroll effect for navigation
  function handleNavScroll() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();
  
  // Mobile navigation toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('open');
      if (navOverlay) navOverlay.classList.toggle('open');
      
      // Toggle hamburger animation
      const spans = navToggle.querySelectorAll('span');
      if (navMenu.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
    
    // Close menu on overlay click
    if (navOverlay) {
      navOverlay.addEventListener('click', function() {
        navMenu.classList.remove('open');
        navOverlay.classList.remove('open');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
    }
    
    // Close menu on link click
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navMenu.classList.remove('open');
        if (navOverlay) navOverlay.classList.remove('open');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
    });
  }

  // ========================================
  // Intersection Observer - Scroll Animations
  // ========================================
  
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };
  
  const fadeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally unobserve after animation
        // fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all fade-in elements
  document.querySelectorAll('.fade-in, .stagger-children').forEach(function(el) {
    fadeObserver.observe(el);
  });

  // ========================================
  // Hero Animation on Load
  // ========================================
  
  function animateHero() {
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-line, .hero-desc, .hero-cta');
    heroElements.forEach(function(el, index) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      
      setTimeout(function() {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 300 + (index * 150));
    });
  }
  
  // Run hero animation when DOM is ready
  if (document.querySelector('.hero')) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', animateHero);
    } else {
      animateHero();
    }
  }

  // ========================================
  // Form Validation
  // ========================================
  
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formSuccess = document.querySelector('.form-success');
    
    // Validation functions
    function validateName() {
      const value = nameInput.value.trim();
      if (value.length < 2) {
        nameInput.style.borderColor = '#ff4444';
        return false;
      }
      nameInput.style.borderColor = '';
      return true;
    }
    
    function validatePhone() {
      const value = phoneInput.value.trim();
      // Chinese phone number pattern
      const phonePattern = /^1[3-9]\d{9}$/;
      if (!phonePattern.test(value)) {
        phoneInput.style.borderColor = '#ff4444';
        return false;
      }
      phoneInput.style.borderColor = '';
      return true;
    }
    
    function validateEmail() {
      const value = emailInput.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        emailInput.style.borderColor = '#ff4444';
        return false;
      }
      emailInput.style.borderColor = '';
      return true;
    }
    
    function validateMessage() {
      const value = messageInput.value.trim();
      if (value.length < 10) {
        messageInput.style.borderColor = '#ff4444';
        return false;
      }
      messageInput.style.borderColor = '';
      return true;
    }
    
    // Real-time validation
    if (nameInput) nameInput.addEventListener('blur', validateName);
    if (phoneInput) phoneInput.addEventListener('blur', validatePhone);
    if (emailInput) emailInput.addEventListener('blur', validateEmail);
    if (messageInput) messageInput.addEventListener('blur', validateMessage);
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const isNameValid = validateName();
      const isPhoneValid = validatePhone();
      const isEmailValid = validateEmail();
      const isMessageValid = validateMessage();
      
      if (isNameValid && isPhoneValid && isEmailValid && isMessageValid) {
        // Simulate form submission
        const submitBtn = contactForm.querySelector('.form-submit');
        submitBtn.textContent = '提交中...';
        submitBtn.disabled = true;
        
        setTimeout(function() {
          contactForm.style.display = 'none';
          if (formSuccess) {
            formSuccess.classList.add('show');
          }
        }, 1500);
      }
    });
  }

  // ========================================
  // Smooth Scroll for Anchor Links
  // ========================================
  
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = nav ? nav.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========================================
  // Active Navigation Link
  // ========================================
  
  function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(function(link) {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }
  
  setActiveNavLink();

  // ========================================
  // Parallax Effect for Hero (subtle)
  // ========================================
  
  const heroYear = document.querySelector('.hero-year');
  
  if (heroYear) {
    window.addEventListener('scroll', function() {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroYear.style.transform = 'translate(-50%, calc(-50% + ' + (scrolled * 0.3) + 'px))';
      }
    }, { passive: true });
  }

  // ========================================
  // News Item Hover Effect
  // ========================================
  
  document.querySelectorAll('.news-item, .news-full-item').forEach(function(item) {
    item.addEventListener('click', function() {
      // Could navigate to detail page
      // For now, just visual feedback
    });
  });

  // ========================================
  // Practice Card Hover Enhancement
  // ========================================
  
  document.querySelectorAll('.practice-card, .team-card, .honor-card').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s ease';
    });
  });

})();


(function() {
  var STORAGE_KEY = 'ln-theme';
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var saved = localStorage.getItem(STORAGE_KEY);
  var theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcon(theme);

  window.setTheme = function(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem(STORAGE_KEY, t);
    updateThemeIcon(t);
  };

  window.toggleTheme = function() {
    var cur = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(cur === 'light' ? 'dark' : 'light');
  };

  function updateThemeIcon(t) {
    var btn = document.getElementById('themeToggle');
    if (btn) {
      btn.textContent = t === 'light' ? '\u25CF' : '\u25CB';
      btn.setAttribute('aria-label', t === 'light' ? '切换深色模式' : '切换浅色模式');
    }
  }
})();
