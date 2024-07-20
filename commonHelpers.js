import{i as l,s as h}from"./assets/vendor-5c957d73.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function d(o){const a=await fetch(`https://pixabay.com/api/?key=44796717-c9697056d5a7f56baa85540ad&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`);if(!a.ok)throw new Error(`Could not fetch ${o}, received ${response.status}`);const e=await a.json();return console.log("API response data:",e),e.hits}function u(o){return o.map(({webformatURL:s,largeImageURL:i,tags:a,likes:e,views:t,comments:n,downloads:m})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img class="gallery-image" src="${s}" alt="${a}" width="360" height="152" />
            <ul class="description">
              <li class="description-items">
                <span class="item">Likes </span>${e}
              </li>
              <li class="description-items">
                <span class="item">Views </span>${t}
              </li>
              <li class="description-items">
                <span class="item">Comments </span>${n}
              </li>
              <li class="description-items">
                <span class="item">Downloads </span>${m}
              </li>
            </ul>
          </a>
        </li>`).join("")}const r={searchForm:document.querySelector(".search-form"),input:document.querySelector(".search-input"),gallery:document.querySelector(".card-container"),loader:document.querySelector(".loader"),btnLoad:document.querySelector(".btn")};let c=1;r.searchForm.addEventListener("submit",p);function p(o){o.preventDefault(),r.gallery.innerHTML="";const s=r.input.value.trim();if(r.loader.classList.remove("visually-hidden"),s===""){l.error({iconUrl:"./img/error.svg",message:"Search field cannot be empty!",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",titleColor:"white"}),r.loader.classList.add("visually-hidden");return}d(s).then(i=>{r.loader.classList.remove("visually-hidden"),r.input.value="",i.length===0?l.error({iconUrl:"./img/error.svg",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",titleColor:"white"}):(r.gallery.innerHTML=u(i),g.refresh())}).catch(i=>{console.error("Fetch error:",i),l.error({iconUrl:"./img/error.svg",message:"An error occurred while fetching the images. Please try again later.",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",titleColor:"white"})}).finally(()=>r.loader.classList.add("visually-hidden"))}const g=new h(".card-container a",{captionsData:"alt",captionDelay:250});r.btnLoad.addEventListener("click",async()=>{try{const o=await d();u(data),c+=1,c>1&&(r.btnLoad.textContent="Fetch more posts")}catch(o){console.log(o)}});
//# sourceMappingURL=commonHelpers.js.map
