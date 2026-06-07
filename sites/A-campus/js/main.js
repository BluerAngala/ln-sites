/**
 * 广东岭南律师事务所 - 学院派网站
 * 交互脚本
 */

(function() {
  'use strict';

  // DOM Ready
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initMobileMenu();
    initSmoothScroll();
    initActiveNav();
    initScrollAnimation();
    initNewsFilter();
    initTheme();
  }

  /**
   * 主题切换
   */
  function initTheme() {
    const STORAGE_KEY = 'ln-theme';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved = localStorage.getItem(STORAGE_KEY);
    const theme = saved || (prefersDark ? 'dark' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
  }

  window.setTheme = function(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('ln-theme', t);
    updateThemeIcon(t);
  };

  window.toggleTheme = function() {
    const cur = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(cur === 'dark' ? 'light' : 'dark');
  };

  function updateThemeIcon(t) {
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.textContent = t === 'light' ? '\u25CF' : '\u25CB';
      btn.setAttribute('aria-label', t === 'light' ? '切换深色模式' : '切换浅色模式');
    }
  }

  /**
   * 移动端菜单
   */
  function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (!menuToggle || !nav) return;
    
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      const isExpanded = nav.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
      menuToggle.textContent = isExpanded ? '\u00D7' : '\u2630';
    });
    
    // 点击导航链接后关闭菜单
    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', false);
        menuToggle.textContent = '\u2630';
      });
    });
    
    // 点击页面其他地方关闭菜单
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', false);
        menuToggle.textContent = '\u2630';
      }
    });
  }

  /**
   * 平滑滚动
   */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  /**
   * 当前页面导航高亮
   */
  function initActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav a').forEach(function(link) {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  /**
   * 滚动动画
   */
  function initScrollAnimation() {
    const animateElements = document.querySelectorAll('.card, .lawyer-card, .honor-item, .practice-card');
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(function(el) {
      el.style.opacity = '0';
      observer.observe(el);
    });
  }

  /**
   * 新闻分类筛选
   */
  function initNewsFilter() {
    const filterBtns = document.querySelectorAll('.news-filter button');
    const newsItems = document.querySelectorAll('.news-item');
    
    if (filterBtns.length === 0) return;
    
    filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const category = this.dataset.category;
        
        // 更新按钮状态
        filterBtns.forEach(function(b) { b.classList.remove('active'); });
        this.classList.add('active');
        
        // 筛选新闻
        newsItems.forEach(function(item) {
          if (category === 'all' || item.dataset.category === category) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  /**
   * 表单验证
   */
  function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(function(input) {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
      
      if (input.type === 'email' && !isValidEmail(input.value)) {
        isValid = false;
        input.classList.add('error');
      }
    });
    
    return isValid;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /**
   * 返回顶部
   */
  function createBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.innerHTML = '\u2191';
    btn.setAttribute('aria-label', '返回顶部');
    btn.style.cssText = [
      'position: fixed',
      'bottom: 30px',
      'right: 30px',
      'width: 50px',
      'height: 50px',
      'border-radius: 50%',
      'border: 1px solid var(--border)',
      'background: var(--bg-card)',
      'color: var(--accent)',
      'font-size: 1.5rem',
      'cursor: pointer',
      'opacity: 0',
      'visibility: hidden',
      'transition: all 0.3s ease',
      'z-index: 1000',
      'box-shadow: var(--card-shadow)'
    ].join(';');
    
    document.body.appendChild(btn);
    
    // 监听滚动
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        btn.style.opacity = '1';
        btn.style.visibility = 'visible';
      } else {
        btn.style.opacity = '0';
        btn.style.visibility = 'hidden';
      }
    });
    
    // 点击返回顶部
    btn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // 悬停效果
    btn.addEventListener('mouseenter', function() {
      this.style.background = 'var(--accent)';
      this.style.color = 'var(--text-inverse)';
      this.style.borderColor = 'var(--accent)';
    });
    
    btn.addEventListener('mouseleave', function() {
      this.style.background = 'var(--bg-card)';
      this.style.color = 'var(--accent)';
      this.style.borderColor = 'var(--border)';
    });
  }

  // 添加返回顶部按钮
  createBackToTop();

})();
