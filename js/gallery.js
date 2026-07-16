/*==========================================
PAWAR HARDWARE
GALLERY.JS
==========================================*/

document.addEventListener("DOMContentLoaded",()=>{

const images=document.querySelectorAll(".gallery-item img");

images.forEach(image=>{

image.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.inset="0";
overlay.style.background="rgba(0,0,0,.92)";
overlay.style.display="flex";
overlay.style.alignItems="center";
overlay.style.justifyContent="center";
overlay.style.zIndex="999999";
overlay.style.cursor="zoom-out";

const img=document.createElement("img");

img.src=image.src;

img.style.maxWidth="90%";
img.style.maxHeight="90%";
img.style.borderRadius="20px";
img.style.boxShadow="0 25px 60px rgba(0,0,0,.5)";

overlay.appendChild(img);

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

});

});

});