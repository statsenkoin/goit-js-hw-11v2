const e=document.querySelector(".js-checkbox-pagination"),t=document.querySelector(".js-observer-target");e.addEventListener("change",(function(){console.log("paginationCheckbox.checked :>> ",e.checked),e.checked?n.observe(t):n.unobserve(t)}));const n=new IntersectionObserver((function(e,t){e.forEach((async e=>{console.log("entry.isIntersecting :>> ",e.isIntersecting)}))}),{root:null,rootMargin:"500px",threshold:1});const o=document.querySelector(".js-per-page-selector");function r(){return o.value}o.addEventListener("change",r);const c=new URLSearchParams({key:"32468715-2ee7d1cef437ed65ce73ff92a",image_type:"photo",orientation:"horizontal",safesearch:!0});async function a(e,t,n){try{const o=await fetch(`https://pixabay.com/api/?q=${e}&page=${t}&per_page=${n}&${c}`);return await o.json()}catch(e){return console.log("error :>> ",e)}}const s=document.querySelector(".js-images-info");function i(e,t,n){let o=`Page: ${e}/${t}. Total images: ${n}`;s.textContent=o}const l=document.querySelector(".js-gallery");function u(e){let t=e.reduce(((e,{webformatURL:t,largeImageURL:n,tags:o,likes:r,views:c,comments:a,downloads:s})=>e+`<div class="photo-card">\n      <a href="${n}">\n        <img \n          class="card-image" \n          src="${t}" \n          alt="${o}" \n          loading="lazy"\n        />\n      </a>\n    </div>\n    `),"");l.insertAdjacentHTML("beforeend",t)}async function d(e,t,n){try{const o=await a(e,t,n),{hits:r,total:c}=o;i(t,Math.ceil(c/n),c),u(r)}catch{console.log("error :>> ",error)}}document.querySelector("#search-form").addEventListener("submit",(async function(e){e.preventDefault(),m=r(),g=e.currentTarget.elements.searchQuery.value.trim(),await d(g,h,m),h+=1}));let g="",h=1,m=24;
//# sourceMappingURL=index.c524ff3b.js.map
