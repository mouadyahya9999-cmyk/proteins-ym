console.log("Website Loaded Successfully!");
// =============================
//   YM PROTEINS - MAIN SCRIPT
//   Search + UI Enhancements
// =============================

// Run after page load
document.addEventListener("DOMContentLoaded", () => {
    console.log("YM PROTEINS Website Loaded");
    setupSearch();
    centerProducts();
});


// =============================
//  SEARCH SYSTEM (Filter Cards)
// =============================

function setupSearch() {
    const searchInput = document.getElementById("searchInput");

    if (!searchInput) {
        console.warn("Search bar not found in HTML!");
        return;
    }

    searchInput.addEventListener("keyup", function () {
        let keyword = searchInput.value.toLowerCase().trim();
        let products = document.querySelectorAll(".product-card");

        products.forEach(card => {
            let text = card.innerText.toLowerCase();

            if (text.includes(keyword)) {
                card.style.display = "block";  // show card
            } else {
                card.style.display = "none";   // hide card
            }
        });
    });
}


// =============================
//  AUTO CENTER PRODUCTS (MOBILE)
// =============================

function centerProducts() {
    const container = document.querySelector(".products-container");

    if (!container) return;

    container.style.display = "grid";
    container.style.justifyItems = "center";
}


// =============================
//  SIMPLE EFFECT ON SCROLL (OPTIONAL)
// =============================

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add("small-header");
        } else {
            header.classList.remove("small-header");
        }
    }
});
