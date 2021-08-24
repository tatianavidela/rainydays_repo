const baseUrl = "https://tatianavidela.online/wp-json/wc/store/products";
const productContainer = document.querySelector(".products")

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();

    console.log(products)

    products.forEach(function(product){
        productContainer.innerHTML += `
        <div class= "product">
            <a href="specific-product.html?id=${product.id}">
            <h3>${product.name}</h3>
            <img src="${product.images[0].src}" />
            </a> 
            <p><button class="product-button" type="button">Add to bag</button>${product.price_html}</p>
        </div>`
    })
}

getProducts(baseUrl);