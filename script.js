(function(){
  'use strict';
  var doc=document,root=doc.documentElement;
  function qs(s){return doc.querySelector(s)}
  function qsa(s){return Array.prototype.slice.call(doc.querySelectorAll(s))}
  function mm(q){return window.matchMedia?window.matchMedia(q).matches:false}
  var menu=qs('.menu'),nav=qs('.header nav');
  if(menu&&nav){menu.addEventListener('click',function(){var open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false')});qsa('.header nav a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')})})}
  function track(name){if(typeof window.gtag==='function'){window.gtag('event',name)}}
  qsa('[data-track]').forEach(function(el){el.addEventListener('click',function(){track(el.getAttribute('data-track'))})});
  var form=qs('#leadForm');if(form){form.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(form),msg="Hi Nashy Trellis, I'd like a free quote.%0A%0AName: "+encodeURIComponent(d.get('name'))+"%0ASuburb: "+encodeURIComponent(d.get('suburb'))+"%0AProduct: "+encodeURIComponent(d.get('product'))+"%0AFinish: "+encodeURIComponent(d.get('finish'))+"%0A%0AI can send photos of the opening here.";track('quote_form_to_whatsapp');window.location.href='https://wa.me/27611792535?text='+msg})}
  var reveal=qsa('.section-intro,.product-grid article,.project-grid figure,.why-copy,.guarantee,.steps>div,.lead-form,.finish-row>div,.faq-list details,.quote-copy');
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('show');io.unobserve(entry.target)}})},{threshold:.08,rootMargin:'0px 0px -35px'});reveal.forEach(function(el){el.classList.add('reveal');io.observe(el)})}else{reveal.forEach(function(el){el.classList.add('show')})}
  var ticking=false;function updateScroll(){var max=Math.max(0,root.scrollHeight-window.innerHeight),y=window.pageYOffset||root.scrollTop||0;root.style.setProperty('--scroll',max?Math.min(100,(y/max)*100)+'%':'0%');ticking=false}
  window.addEventListener('scroll',function(){if(!ticking){if(window.requestAnimationFrame){window.requestAnimationFrame(updateScroll)}else{setTimeout(updateScroll,16)}ticking=true}},false);updateScroll();
  var spotlight=qs('.fx-spotlight');if(spotlight&&mm('(pointer:fine)')&&!mm('(prefers-reduced-motion:reduce)')){window.addEventListener('mousemove',function(e){root.style.setProperty('--mx',e.clientX+'px');root.style.setProperty('--my',e.clientY+'px');spotlight.classList.add('on')},false);doc.documentElement.addEventListener('mouseleave',function(){spotlight.classList.remove('on')})}
  if(!mm('(prefers-reduced-motion:reduce)')){var hero=qs('.hero-visual');if(hero&&mm('(pointer:fine)')){hero.addEventListener('mousemove',function(e){var r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;hero.style.transform='perspective(1000px) rotateY('+(x*1.8)+'deg) rotateX('+(-y*1.5)+'deg)'});hero.addEventListener('mouseleave',function(){hero.style.transform=''})}}
  root.classList.add('js-ready');
})();