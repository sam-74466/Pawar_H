/*==========================================
PAWAR HARDWARE V1
PRODUCTS.JS
==========================================*/

const productContainer = document.querySelector("[data-product-render]");

if (productContainer) {

fetch("data/products.json")
.then(response => response.json())
.then(products => {

let html = "";

products.forEach(product => {

html += `

<div class="product-card fade-up">

<div class="product-image">

<img src="${product.image}" alt="${product.name}" loading="lazy">

</div>

<div class="product-body">

<div class="product-category">

${product.category}

</div>

<h3 class="product-title">

${product.name}

</h3>

<p>

${product.brand}

</p>

<div class="product-buttons">

<a href="product-details.html?id=${product.id}"

class="btn btn-primary">

View Details

</a>

</div>

</div>

</div>

`;

});

productContainer.innerHTML = html;

})
.catch(error => {

productContainer.innerHTML =

"<h3>Unable to load products.</h3>";

console.error(error);

});

}

/*==========================================
CATEGORY FILTER
==========================================*/

const filterButtons = document.querySelectorAll("[data-filter]");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const category=button.dataset.filter;

document.querySelectorAll(".product-card").forEach(card=>{

if(category==="all"){

card.style.display="block";

return;

}

const text=card.querySelector(".product-category").innerText;

card.style.display=text===category?"block":"none";

});

});

});

/*==========================================
SEARCH
==========================================*/

const searchInput=document.querySelector("#productSearch");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

document.querySelectorAll(".product-card").forEach(card=>{

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"block":"none";

});

});

}