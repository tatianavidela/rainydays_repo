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

    createHtml(specificProduct);
}

fetchProduct();

function createHtml(specificProduct) {
    specificProductContainer.innerHTML =
    `
    <div>
        <h2>${specificProduct.name}</h2>
        <p>${specificProduct.description}</p>
        <p>${specificProduct.price_html}</p>
        <div class="specific-product_cta">
            <button type="button">Add to bag</button>
        </div>
    </div>
    <div>
        <img src="${specificProduct.images[0].src}" />
    </div>
    `
}