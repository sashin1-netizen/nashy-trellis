const liveStyles=`
.hero-bg{background-image:linear-gradient(90deg,rgba(5,5,5,.97) 0%,rgba(5,5,5,.82) 38%,rgba(5,5,5,.25) 72%,rgba(5,5,5,.08) 100%),linear-gradient(0deg,rgba(0,0,0,.48),transparent 44%),url('assets/hero.svg')!important;background-size:cover!important;background-position:center 52%!important;transform:scale(1.015);transition:transform 8s ease-out}
.hero.is-ready .hero-bg{transform:scale(1)}
header{transition:background .3s ease,box-shadow .3s ease,border-color .3s ease}
header.scrolled{background:rgba(5,5,5,.985);box-shadow:0 14px 36px rgba(0,0,0,.25);border-color:rgba(184,135,75,.28)}
.hero-copy>*{opacity:0;transform:translateY(18px);animation:ntReveal .75s ease forwards}.hero-copy>*:nth-child(2){animation-delay:.08s}.hero-copy>*:nth-child(3){animation-delay:.16s}.hero-copy>*:nth-child(4){animation-delay:.24s}.hero-copy>*:nth-child(5){animation-delay:.32s}
@keyframes ntReveal{to{opacity:1;transform:none}}
.section,.trust{--reveal:0;transition:opacity .7s ease,transform .7s ease}.section.reveal-pending{opacity:0;transform:translateY(28px)}.section.reveal-visible{opacity:1;transform:none}
.cards article,.finishes button,.project,.why aside{transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}.cards article:hover,.finishes button:hover{transform:translateY(-5px);box-shadow:0 16px 40px rgba(0,0,0,.12)}.why aside:hover{transform:translateY(-4px);border-color:#d2a46c}.project:hover{transform:translateY(-3px)}
.navcta,.btn.gold{box-shadow:0 0 0 0 rgba(184,135,75,.35);transition:transform .2s ease,box-shadow .2s ease,background .2s ease}.navcta:hover,.btn.gold:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(184,135,75,.26);background:#c09257;color:#fff}
.photo{width:max-content;max-width:100%;padding:10px 14px;border-left:2px solid var(--bronze);background:rgba(0,0,0,.2);backdrop-filter:blur(6px)}
.trust{backdrop-filter:blur(14px)}
@media(max-width:720px){.hero{min-height:710px}.hero-bg{background-image:linear-gradient(180deg,rgba(0,0,0,.02) 0%,rgba(0,0,0,.2) 30%,rgba(8,8,8,.96) 71%,#080808 100%),url('assets/hero.svg')!important;background-position:62% 18%!important;background-size:auto 500px!important;background-repeat:no-repeat!important}.hero-copy{padding-top:255px}.hero-copy .eyebrow{font-size:9px}.hero-copy h1{letter-spacing:-.02em}.actions .btn{min-height:50px}.trust div{min-height:74px;display:flex;flex-direction:column;justify-content:center}.cards article{overflow:hidden}.cards article:hover{transform:none}.dock{backdrop-filter:blur(16px);background:rgba(7,7,7,.95)}}
@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important}.hero-bg,.hero-copy>*,.section,.cards article,.project{animation:none!important;transition:none!important;transform:none!important;opacity:1!important}}
`;
const style=document.createElement('style');style.textContent=liveStyles;document.head.appendChild(style);

const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');}));

const finishes=document.querySelectorAll('.finishes button'),selected=document.querySelector('#selected');
finishes.forEach(b=>b.addEventListener('click',()=>{finishes.forEach(x=>x.classList.remove('active'));b.classList.add('active');selected.textContent=b.dataset.name;}));

const header=document.querySelector('header');
const updateHeader=()=>header?.classList.toggle('scrolled',window.scrollY>18);
updateHeader();window.addEventListener('scroll',updateHeader,{passive:true});

const sections=document.querySelectorAll('.section');
if('IntersectionObserver' in window){sections.forEach(s=>s.classList.add('reveal-pending'));const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('reveal-pending');entry.target.classList.add('reveal-visible');observer.unobserve(entry.target);}}),{threshold:.08,rootMargin:'0px 0px -50px'});sections.forEach(s=>observer.observe(s));}else{sections.forEach(s=>s.classList.add('reveal-visible'));}
window.requestAnimationFrame(()=>document.querySelector('.hero')?.classList.add('is-ready'));

document.querySelector('#quoteForm')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const m=['Hi Nashy Trellis, I would like a free quote.','',`Name: ${f.get('name')}`,`Phone: ${f.get('phone')}`,`Suburb: ${f.get('suburb')}`,`Product: ${f.get('product')}`,`Colour: ${f.get('colour')}`,`Message: ${f.get('message')||'—'}`,'','I can send photos of the opening here on WhatsApp.'].join('\n');location.href=`https://wa.me/27611792535?text=${encodeURIComponent(m)}`;});