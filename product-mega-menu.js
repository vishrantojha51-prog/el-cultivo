(()=>{'use strict';
const header=document.querySelector('.ec-header');if(!header)return;
const nav=header.querySelector('.nav-links'),toggle=header.querySelector('.menu-toggle');
const items=[...header.querySelectorAll('.nav-mega-item')];
const isMobile=()=>window.matchMedia('(max-width:900px)').matches;
function closeItems(except=null){items.forEach(item=>{if(item!==except){item.classList.remove('is-open');item.querySelector('.nav-mega-trigger')?.setAttribute('aria-expanded','false')}})}
items.forEach(item=>{
 const trigger=item.querySelector('.nav-mega-trigger');
 trigger.addEventListener('click',e=>{
  if(isMobile()){e.preventDefault();const willOpen=!item.classList.contains('is-open');closeItems(item);item.classList.toggle('is-open',willOpen);trigger.setAttribute('aria-expanded',String(willOpen));}
  else {const willOpen=!item.classList.contains('is-open');closeItems(item);item.classList.toggle('is-open',willOpen);trigger.setAttribute('aria-expanded',String(willOpen));}
 });
 item.addEventListener('mouseenter',()=>{if(!isMobile()){closeItems(item);item.classList.add('is-open');trigger.setAttribute('aria-expanded','true')}});
 item.addEventListener('mouseleave',()=>{if(!isMobile()){item.classList.remove('is-open');trigger.setAttribute('aria-expanded','false')}});
});
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=!nav.classList.contains('is-open');nav.classList.toggle('is-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.innerHTML=open?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>';if(!open)closeItems()})}
document.addEventListener('click',e=>{if(!header.contains(e.target))closeItems()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeItems();nav?.classList.remove('is-open');toggle?.setAttribute('aria-expanded','false')}});
items.forEach(item=>item.querySelectorAll('.mega-menu a').forEach(a=>a.addEventListener('click',()=>{closeItems();nav?.classList.remove('is-open');toggle?.setAttribute('aria-expanded','false')})));
window.addEventListener('resize',()=>{if(!isMobile()){nav?.classList.remove('is-open');toggle?.setAttribute('aria-expanded','false')}});
// Small, user-controlled hero image selector. No video or external media is loaded.
const hero=document.querySelector('.ec-hero-image img'),dots=[...document.querySelectorAll('[data-hero-image]')];
dots.forEach(dot=>dot.addEventListener('click',()=>{if(hero){hero.src=dot.dataset.heroImage;dots.forEach(d=>d.classList.toggle('is-active',d===dot))}}));
})();