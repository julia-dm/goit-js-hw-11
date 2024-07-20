import{i as l,s as d}from"./assets/vendor-5c957d73.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function u(i){const a=await fetch(`https://pixabay.com/api/?key=44796717-c9697056d5a7f56baa85540ad&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true`);if(!a.ok)throw new Error(`Could not fetch ${i}, received ${response.status}`);const e=await a.json();return console.log("API response data:",e),e.hits}function m(i){return i.map(({webformatURL:t,largeImageURL:s,tags:a,likes:e,views:r,comments:n,downloads:c})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img class="gallery-image" src="${t}" alt="${a}" width="360" height="152" />
            <ul class="description">
              <li class="description-items">
                <span class="item">Likes </span>${e}
              </li>
              <li class="description-items">
                <span class="item">Views </span>${r}
              </li>
              <li class="description-items">
                <span class="item">Comments </span>${n}
              </li>
              <li class="description-items">
                <span class="item">Downloads </span>${c}
              </li>
            </ul>
          </a>
        </li>`).join("")}const o={searchForm:document.querySelector(".search-form"),input:document.querySelector(".search-input"),gallery:document.querySelector(".card-container"),loader:document.querySelector(".loader")};o.searchForm.addEventListener("submit",h);function h(i){i.preventDefault(),o.gallery.innerHTML="";const t=o.input.value.trim();if(o.loader.classList.remove("visually-hidden"),t===""){l.error({iconUrl:"./img/error.svg",message:"Search field cannot be empty!",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",titleColor:"white"}),o.loader.classList.add("visually-hidden");return}u(t).then(s=>{o.loader.classList.remove("visually-hidden"),o.input.value="",s.length===0?l.error({iconUrl:"./img/error.svg",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",titleColor:"white"}):(o.gallery.innerHTML=m(s),p.refresh())}).catch(s=>{console.error("Fetch error:",s),l.error({iconUrl:"./img/error.svg",message:"An error occurred while fetching the images. Please try again later.",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",titleColor:"white"})}).finally(()=>o.loader.classList.add("visually-hidden"))}const p=new d(".card-container a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
