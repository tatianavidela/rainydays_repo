import { productArray } from "./constants/productList.js";
const productsContainer = document.querySelector(".products");

productArray.forEach(function(product){
    productsContainer.innerHTML += 
    `
    <div class="product">
        <h3><a href="yellowclassic.html">${product.name}</a></h3>
        <a href="yellowclassic.html"> <img src="${product.image}" alt="${product.name}"> </a>
        <p>${product.description}</p>
        <div class="product-price">Price: ${product.price} NOK</div>
        <button class="product-button">Add to cart</button>
    </div>
    `
})