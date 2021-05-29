import { productArray } from "./constants/productList.js";
const productsContainer = document.querySelector(".products");
const bag = document.querySelector(".bag");
const bagList = document.querySelector(".bag-list");
const totalContainer = document.querySelector(".total-bag");

const minimizeButton = document.querySelector(".minimize-button")


let bagArray= [];

productArray.forEach(function(product){
    productsContainer.innerHTML += 
    `
    <div class="product">
        <h3><a href="yellowclassic.html">${product.name}</a></h3>
        <a href="yellowclassic.html"> <img src="${product.image}" alt="${product.name}"> </a>
        <p>${product.description}</p>
        <div class="product-price">Price: ${product.price} NOK</div>
        <button class="product-button" data-product="${product.id}">Add to bag</button>
    </div>
    `
});

const buttons = document.querySelectorAll("button");

buttons.forEach(function(button){
    button.onclick= function(event) {
        const itemToAdd = productArray.find(item=> item.id === event.target.dataset.product);
        bagArray.push(itemToAdd);
        showBag(bagArray)
        localStorage.setItem("bagList",JSON.stringify(bagArray));  
    }
})

function showBag(bagItems){
    bag.style.display = "block";
    bagList.innerHTML= "";
    let total= 0;
    bagItems.forEach(function(bagElement){
        total += bagElement.price;
        bagList.innerHTML += 
        `<div class="bag-item">
        <h4>${bagElement.name}</h4>
        <img src="${bagElement.image}" alt="${bagElement.name}" class="bag-image" />
        </div>
        `
    })
    totalContainer.innerHTML = `Total: ${total}`;

}

function hideBag(){
    bag.style.display="none"
}

minimizeButton.addEventListener("click",hideBag)