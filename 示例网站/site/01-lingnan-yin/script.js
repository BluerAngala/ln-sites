/* 岭南印 · 交互 script.js */
(function(){
  var nav=document.getElementById('nav');
  window.addEventListener('scroll',function(){
    if(window.scrollY>8)nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  },{passive:true});

  var toggle=document.querySelector('.nav__toggle');
  var menu=document.querySelector('.nav__menu');
  if(toggle&&menu){
    toggle.addEventListener('click',function(){
      var open=menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded',open);
    });
  }

  /* Reveal on scroll */
  var items=document.querySelectorAll('.section-title,.lede,.stat,.card,.person,.works__list li,.post,.office,.quote,.awards li');
  items.forEach(function(el){el.setAttribute('data-reveal','');});
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e,i){
      if(e.isIntersecting){
        setTimeout(function(){e.target.classList.add('is-in');},i*60);
        io.unobserve(e.target);
      }
    });
  },{threshold:0.12,rootMargin:'0px 0px -60px 0px'});
  items.forEach(function(el){io.observe(el);});

  /* Counter animation */
  var counters=document.querySelectorAll('[data-to]');
  var co=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting)return;
      var el=e.target;
      var to=parseInt(el.dataset.to,10);
      var dur=1600;
      var start=performance.now();
      (function step(t){
        var p=Math.min(1,(t-start)/dur);
        var eased=1-Math.pow(1-p,3);
        el.textContent=Math.floor(to*eased).toLocaleString();
        if(p<1)requestAnimationFrame(step);
        else el.textContent=to.toLocaleString();
      })(start);
      co.unobserve(el);
    });
  },{threshold:0.4});
  counters.forEach(function(c){co.observe(c);});
})();
