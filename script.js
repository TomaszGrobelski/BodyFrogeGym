(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function u(){const r=document.querySelectorAll(".entry-box"),n=document.querySelector(".entry-box--gym-description"),o=document.querySelector(".entry-box--fitnes-description"),s=document.querySelector(".entry-box--personal-description"),e=document.querySelector(".entry-box--sweat-description"),t=document.querySelector(".entry-box--rehabilitation-description"),c=document.querySelector(".fa-dumbbell"),a=document.querySelector(".fa-person-running"),l=document.querySelector(".fa-person"),d=document.querySelector(".fa-house-tsunami"),y=document.querySelector(".fa-hands");r.forEach(i=>{i.addEventListener("mouseenter",()=>{i.classList.contains("entry__container--gym")&&(c.style.display="none",n.style.display="block"),i.classList.contains("entry__container--fitnes")&&(a.style.display="none",o.style.display="block"),i.classList.contains("entry__container--personal-training")&&(l.style.display="none",s.style.display="block"),i.classList.contains("entry__container--sweat-room")&&(d.style.display="none",e.style.display="block"),i.classList.contains("entry__container--rehabilitation")&&(y.style.display="none",t.style.display="block")})}),r.forEach(i=>{i.addEventListener("mouseleave",()=>{i.classList.contains("entry__container--gym")&&(c.style.display="block",n.style.display="none"),i.classList.contains("entry__container--fitnes")&&(a.style.display="block",o.style.display="none"),i.classList.contains("entry__container--personal-training")&&(l.style.display="block",s.style.display="none"),i.classList.contains("entry__container--sweat-room")&&(d.style.display="block",e.style.display="none"),i.classList.contains("entry__container--rehabilitation")&&(y.style.display="block",t.style.display="none")})})}function p(){const r=document.querySelector(".head");window.addEventListener("scroll",()=>{const n=window.scrollY;r.style.top=n+"px"})}function f(){const r=document.querySelector(".bmi__box--height"),n=document.querySelector(".bmi__box--weight"),o=document.querySelector(".bmi-result"),s=document.querySelector(".weight-result"),e=(n.value/(r.value/100)**2).toFixed(2);o.innerText=e;let t="";switch(e){case e<16:t="Wygłodzenie";break;case(e>=16&&e<17):t="Wychudzenie";break;case(e>=17&&e<18.5):t="Niedowaga";break;case(e>=18.5&&e<25):t="Wartość prawidłowa";break;case(e>=25&&e<30):t="Nadwaga";break;case(e>=30&&e<35):t="I stopień otyłości";break;case(e>=35&&e<40):t="II stopień otyłości";break;default:t="Otyłość skrajna";break}s.innerText=t}function m(){document.querySelector(".bmi__box--calculate").addEventListener("click",f)}function h(){const r=document.querySelector(".head__right--nav"),n=document.querySelector(".head__list");r.addEventListener("click",()=>{n.style.display=n.style.display==="flex"?"none":"flex",n.style.display=n.style.display==="flex"?n.classList.add("head_list-phone"):n.classList.remove("head_list-phone")});let o=!1;window.addEventListener("resize",()=>{const s=window.innerWidth;s>=750&&o?(o=!1,n.classList.remove("head_list-phone"),n.style.display="none"):s<750&&!o&&(o=!0)})}function _(){const r=[...document.querySelectorAll(".head__list--li")],n="ABCDEFGHIJKLMNOPQRSTUVWXYZ";r.forEach(o=>{o.addEventListener("mouseover",s=>{let e=0;const t=setInterval(()=>{s.target.innerText=s.target.innerText.split("").map((c,a)=>a<e?s.target.dataset.value[a]:n[Math.floor(Math.random()*26)]).join(""),e>=s.target.dataset.value.length&&clearInterval(t),e+=1},30)})})}p();u();m();h();_();