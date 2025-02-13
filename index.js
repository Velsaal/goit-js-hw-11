import{a as c,S as p,i}from"./assets/vendor-BWiIACaD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const u="48807004-9385a8cdcbe3c5aa2453a42f7",f="https://pixabay.com/api/";function d(s){return c.get(f,{params:{key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>{throw console.error("Error fetching images:",t),t})}function m(s){const t=document.querySelector(".gallery");t.innerHTML=s.map(o=>`
     <li class="gallery-item">
            <a href="${o.largeImageURL}" class="gallery-link">
                <img src="${o.webformatURL}" alt="${o.tags}"/>
                <div class="info">
                <p>Likes</p>
                <p>Views</p>
                <p>Comments</p>
                <p>Downloads</p>
                    <span> ${o.likes}</span>
                    <span> ${o.views}</span>
                    <span> ${o.comments}</span>
                    <span> ${o.downloads}</span>
                </div>
            </a>
     </li>
    `).join(""),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const y=document.querySelector("#search-form"),l=document.querySelector(".loader"),h=document.querySelector(".gallery");y.addEventListener("submit",function(s){s.preventDefault();const t=s.target.elements.searchQuery.value.trim();if(!t){i.error({title:"Error!",message:"Please enter a search term!",position:"topRight"});return}l.style.display="block",h.innerHTML="",d(t).then(a=>{a.length===0?i.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):m(a)}).catch(()=>{i.error({message:"Failed to fetch images. Try again later!"})}).finally(()=>{l.style.display="none"})});
//# sourceMappingURL=index.js.map
