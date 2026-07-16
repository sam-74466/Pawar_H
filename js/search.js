/*==========================================
PAWAR HARDWARE
SEARCH.JS
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("productSearch");

    if (!searchInput) return;

    searchInput.addEventListener("input", function () {

        const keyword = this.value.toLowerCase().trim();

        const cards = document.querySelectorAll(".product-card");

        cards.forEach(card => {

            const title = card.querySelector(".product-title")?.textContent.toLowerCase() || "";
            const category = card.querySelector(".product-category")?.textContent.toLowerCase() || "";

            if (
                title.includes(keyword) ||
                category.includes(keyword)
            ) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

});