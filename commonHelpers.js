import{i as l,s as h}from"./assets/vendor-5c957d73.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function d(r){const a=await fetch(`https://pixabay.com/api/?key=44796717-c9697056d5a7f56baa85540ad&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true`);if(!a.ok)throw new Error(`Could not fetch ${r}, received ${response.status}`);const e=await a.json();return console.log("API response data:",e),e.hits}function u(r){return r.map(({webformatURL:o,largeImageURL:s,tags:a,likes:e,views:t,comments:n,downloads:m})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img class="gallery-image" src="${o}" alt="${a}" width="360" height="152" />
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
        </li>`).join("")}const i={searchForm:document.querySelector(".search-form"),input:document.querySelector(".search-input"),gallery:document.querySelector(".card-container"),loader:document.querySelector(".loader"),button:document.querySelector(".btn")};let c=1;i.searchForm.addEventListener("submit",p);function p(r){r.preventDefault(),i.gallery.innerHTML="";const o=i.input.value.trim();if(i.loader.classList.remove("visually-hidden"),o===""){l.error({iconUrl:"./img/error.svg",message:"Search field cannot be empty!",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",titleColor:"white"}),i.loader.classList.add("visually-hidden");return}d(o).then(s=>{i.loader.classList.remove("visually-hidden"),i.input.value="",s.length===0?l.error({iconUrl:"./img/error.svg",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",titleColor:"white"}):(i.gallery.innerHTML=u(s),g.refresh())}).catch(s=>{console.error("Fetch error:",s),l.error({iconUrl:"./img/error.svg",message:"An error occurred while fetching the images. Please try again later.",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",titleColor:"white"})}).finally(()=>i.loader.classList.add("visually-hidden"))}const g=new h(".card-container a",{captionsData:"alt",captionDelay:250});fetchImgBtn.addEventListener("click",async()=>{try{const r=await d();u(data),c+=1,c>1&&(fetchImgBtn.textContent="Fetch more posts")}catch(r){console.log(r)}});
//# sourceMappingURL=commonHelpers.js.map
