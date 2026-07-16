/*==========================================
PAWAR HARDWARE V1
PRODUCT-DETAILS.JS
==========================================*/

const detailsContainer = document.querySelector("#productDetails");
const relatedContainer = document.querySelector("#relatedProducts");

// Get Product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

if (detailsContainer) {

    fetch("data/products.json")
        .then(response => response.json())
        .then(products => {

            const product = products.find(p => p.id === productId);

            if (!product) {

                detailsContainer.innerHTML = `
                    <div class="text-center">
                        <h2>Product Not Found</h2>
                        <p>The requested product does not exist.</p>
                        <a href="products.html" class="btn btn-primary">
                            Back to Products
                        </a>
                    </div>
                `;

                return;
            }

            detailsContainer.innerHTML = `

<section class="product-details">

<div class="container">

<div class="grid-2">

<div class="product-image fade-left">

<img src="${product.image}"

alt="${product.name}">

</div>

<div class="fade-right">

<span class="badge">

${product.category}

</span>

<h2>

${product.name}

</h2>

<h4 style="margin:20px 0;color:var(--secondary);">

Brand : ${product.brand}

</h4>

<p>

${product.description}

</p>

<div style="margin-top:40px;display:flex;gap:15px;flex-wrap:wrap;">

<a href="contact.html"

class="btn btn-primary">

Enquire Now

</a>

<a target="_blank"

href="https://wa.me/919226948412?text=Hello%20Pawar%20Hardware,%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}"

class="btn btn-outline">

WhatsApp

</a>

</div>

</div>

</div>

</div>

</section>

`;

            if (relatedContainer) {

                let html = "";

                products
                    .filter(p => p.category === product.category && p.id !== product.id)
                    .slice(0, 4)
                    .forEach(item => {

                        html += `

<div class="product-card">

<div class="product-image">

<img src="${item.image}"

alt="${item.name}">

</div>

<div class="product-body">

<div class="product-category">

${item.category}

</div>

<h3 class="product-title">

${item.name}

</h3>

<div class="product-buttons">

<a href="product-details.html?id=${item.id}"

class="btn btn-primary">

View Details

</a>

</div>

</div>

</div>

`;

                    });

                relatedContainer.innerHTML = html;

            }

        })
        .catch(error => {

            console.error(error);

            detailsContainer.innerHTML = `
                <h2 class="text-center">
                    Unable to load product.
                </h2>
            `;

        });

}