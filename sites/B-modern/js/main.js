/**
 * 岭南所 B套 - 现代商务稳重精英风格
 * Main JavaScript
 */

(function() {
  'use strict';

  // ============================================
  // Navigation
  // ============================================
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll effect
  function handleScroll() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // Mobile menu toggle
  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    const mobileLinks = mobileNav.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ============================================
  // Smooth Scroll
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = nav ? nav.offsetHeight : 72;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================
  // Practice Areas Navigation
  // ============================================
  const practiceNavItems = document.querySelectorAll('.practice-nav-item');
  const practiceSections = document.querySelectorAll('.practice-section');

  practiceNavItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      
      // Update active state
      practiceNavItems.forEach(function(navItem) {
        navItem.classList.remove('active');
      });
      this.classList.add('active');
      
      // Scroll to section
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const navHeight = nav ? nav.offsetHeight : 72;
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Highlight practice nav on scroll
  function highlightPracticeNav() {
    const navHeight = nav ? nav.offsetHeight : 72;
    
    practiceSections.forEach(function(section) {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top - navHeight - 100;
      
      if (sectionTop <= 0 && sectionTop + rect.height > 0) {
        const id = section.getAttribute('id');
        practiceNavItems.forEach(function(item) {
          item.classList.remove('active');
          if (item.getAttribute('href') === '#' + id) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightPracticeNav);

  // ============================================
  // Contact Form
  // ============================================
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());
      
      // Basic validation
      if (!data.name || !data.phone || !data.message) {
        alert('请填写必填字段：姓名、电话和留言内容');
        return;
      }
      
      // Simulate form submission
      const submitBtn = this.querySelector('.form-submit');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = '提交中...';
      submitBtn.disabled = true;
      
      setTimeout(function() {
        alert('感谢您的留言，我们会尽快与您联系！');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1000);
    });
  }

  // ============================================
  // Animations on Scroll
  // ============================================
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add animation classes
  document.querySelectorAll('.card, .practice-card, .news-card, .team-card, .honor-card, .social-card').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Add visible class styles
  const style = document.createElement('style');
  style.textContent = `
    .visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);

  // ============================================
  // Stats Counter Animation
  // ============================================
  const statNumbers = document.querySelectorAll('.hero-stat-num');

  function animateCounter(el, target) {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(function() {
      current += increment;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current);
      }
    }, 16);
  }

  const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const text = entry.target.textContent;
        const num = parseInt(text, 10);
        if (!isNaN(num)) {
          animateCounter(entry.target, num);
        }
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(function(stat) {
    statsObserver.observe(stat);
  });

  // ============================================
  // Team Tab Navigation
  // ============================================
  const teamTabs = document.querySelectorAll('.team-tab');
  const teamGroups = document.querySelectorAll('.team-group');

  if (teamTabs.length > 0) {
    teamTabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        
        teamTabs.forEach(function(t) {
          t.classList.remove('active');
        });
        this.classList.add('active');
        
        teamGroups.forEach(function(group) {
          if (group.getAttribute('id') === target) {
            group.style.display = 'block';
          } else {
            group.style.display = 'none';
          }
        });
      });
    });
  }

  // ============================================
  // News Filter
  // ============================================
  const newsFilters = document.querySelectorAll('.news-filter');
  const newsItems = document.querySelectorAll('.news-card');

  if (newsFilters.length > 0) {
    newsFilters.forEach(function(filter) {
      filter.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        
        newsFilters.forEach(function(f) {
          f.classList.remove('active');
        });
        this.classList.add('active');
        
        newsItems.forEach(function(item) {
          if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // ============================================
  // Initialize
  // ============================================
  console.log('岭南所 B套 网站已加载');

})();
// ============================================
// Theme Toggle
// ============================================
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
