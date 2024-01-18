var e=document.querySelector(".tech__modal--1"),t=document.querySelector(".tech__modal--2"),n=document.querySelector(".tech__modal--3"),c=document.querySelector(".tech__button--1"),o=document.querySelector(".tech__button--2"),i=document.querySelector(".tech__button--3");function d(e,t){e.classList.toggle("active"),t.classList.toggle("active")}function s(e,t){e.classList.remove("active"),t.classList.remove("active")}c.addEventListener("click",function(){d(c,e),c.classList.contains("active")&&(s(o,t),s(i,n))}),o.addEventListener("click",function(){d(o,t),o.classList.contains("active")&&(s(c,e),s(i,n))}),i.addEventListener("click",function(){d(i,n),i.classList.contains("active")&&(s(c,e),s(o,t))});var u=document.getElementById("counter"),a=document.getElementById("price");u.addEventListener("input",function(){var e=1200*this.value+"$";a.textContent=e}),document.querySelector(".touch__form").addEventListener("submit",function(e){e.preventDefault(),this.reset()}),document.querySelector(".purchase__form").addEventListener("submit",function(e){e.preventDefault(),this.reset()});var l=document.getElementById("step1"),r=document.getElementById("step2"),m=document.getElementById("step3"),v=document.getElementById("tab1"),L=document.getElementById("tab2"),E=document.getElementById("tab3"),y=document.getElementById("btn1"),f=document.getElementById("btn2"),_=document.getElementById("form-first"),g=document.getElementById("img");function h(e,t,n){e.classList.contains("active")||(e.classList.add("active"),t.classList.add("active")),l!==e&&(l.classList.remove("active"),v.classList.remove("active")),r!==e&&(r.classList.remove("active"),L.classList.remove("active")),m!==e&&(m.classList.remove("active"),E.classList.remove("active")),_.style.opacity=n,g.style.opacity=n}l.addEventListener("click",function(){h(l,v,"1")}),r.addEventListener("click",function(){h(r,L,"1")}),m.addEventListener("click",function(){h(m,E,"0")}),y.addEventListener("click",function(){h(r,L,"1")}),f.addEventListener("click",function(){h(m,E,"0")}),document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("btnPrev"),t=document.getElementById("btnNext"),n=document.querySelectorAll(".about__video"),c=document.querySelectorAll(".about__number"),o=0,i=0,d=0;function s(e){n.forEach(function(t,n){t.classList.remove("active"),t.classList.add("hidden"),n===e&&(t.classList.add("active"),t.classList.remove("hidden"))}),c[0].textContent=e+1}function u(){++o>=n.length&&(o=0),s(o)}function a(){--o<0&&(o=n.length-1),s(o)}t.addEventListener("click",u),e.addEventListener("click",a),document.addEventListener("touchstart",function(e){i=e.touches[0].clientX}),document.addEventListener("touchmove",function(e){d=e.touches[0].clientX}),document.addEventListener("touchend",function(){i-d>50?u():d-i>50&&a()})});// const menu = document.querySelector('.navs__burger-btn');
// const menuBody = document.querySelector('.page__menu');
// const body = document.querySelector('.page__body');
// const menuLinks = document.querySelectorAll('.menu__link');
// function menuClose() {
//   menu.classList.remove('active');
//   menuBody.classList.remove('active');
//   body.classList.remove('lock');
// }
// if (menu) {
//   menu.addEventListener('click', function(e) {
//     menu.classList.toggle('active');
//     if (menu.classList.contains('active')) {
//       const logo = document.querySelector('.menu__logo');
//       menuBody.classList.add('active');
//       body.classList.add('lock');
//       logo.addEventListener('click', (elem) => {
//         elem.preventDefault();
//         menuClose();
//       });
//       if (menuLinks.length > 0) {
//         menuLinks.forEach(el => {
//           el.addEventListener('click', function() {
//             menuClose();
//           });
//         });
//       };
//     } else {
//       menuClose();
//     }
//   });
// };
// Отримуємо посилання на елементи DOM
var b=document.querySelector(".header__burger-btn"),k=document.querySelector(".page__body"),q=document.querySelectorAll(".menu__link"),S=document.querySelector(".menu__burger-btn"),B=document.querySelector(".menu__logo");function I(){k.classList.remove("lock")}b.addEventListener("click",function(){k.classList.add("lock")}),q.forEach(function(e){e.addEventListener("click",I)}),S.addEventListener("click",I),B.addEventListener("click",I);//# sourceMappingURL=index.75677880.js.map

//# sourceMappingURL=index.75677880.js.map
