/* The Counsel · 交互 script.js */
(function(){
  /* reveal */
  var els=document.querySelectorAll('.display,.lede,.ptile,.prof,.arch,.dcard,.addr,.sidebar');
  els.forEach(function(el){el.setAttribute('data-reveal','');});
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e,i){
      if(e.isIntersecting){setTimeout(function(){e.target.classList.add('is-in');},i*50);io.unobserve(e.target);}
    });
  },{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(el){io.observe(el);});

  /* counter */
  var cs=document.querySelectorAll('[data-to]');
  var co=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting)return;
      var el=e.target,to=parseInt(el.dataset.to,10),dur=1600,start=performance.now();
      (function s(t){var p=Math.min(1,(t-start)/dur);el.textContent=Math.floor(to*(1-Math.pow(1-p,3))).toLocaleString();if(p<1)requestAnimationFrame(s);else el.textContent=to.toLocaleString();})(start);
      co.unobserve(el);
    });
  },{threshold:0.4});
  cs.forEach(function(c){co.observe(c);});
})();
