const specificProductContainer = document.querySelector(".specific-product-container")

const queryString = document.location.search;

console.log (queryString);

const params = new URLSearchParams(queryString);

console.log(params);

const id = params.get("id")

console.log(id)

const url = "https://rainydays.tatianavidela.online/wp-json/wc/store/products/" + id;

async function fetchProduct() {
    const response = await fetch(url);
    const specificProduct = await response.json();

    specificProductContainer.innerHTML ="";

    createHtml(specificProduct);
}

fetchProduct();

function createHtml(specificProduct) {
    specificProductContainer.innerHTML =
    `<div class="specific-product-container-1">
        <h2>${specificProduct.name}</h2>
        <img src="${specificProduct.images[0].src}" />
    </div>
    <div class="specific-product-container-2">
       ${specificProduct.description}
        ${specificProduct.price_html}
        <div class="specific-product_cta">
            <button type="button">Add to bag</button>
            <button type="button"> <a href="checkout.html">Buy now</button>
        </div>
    </div>
    `
}