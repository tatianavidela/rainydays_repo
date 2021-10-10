const baseUrl = "https://rainydays.tatianavidela.online/wp-json/wc/store/products";
const productContainer = document.querySelector(".products")
let bagArray =[];

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();

    productContainer.innerHTML="";

    products.forEach(function(product){
        productContainer.innerHTML += `
        <div class= "product">
            <a href="specific-product.html?id=${product.id}">
            <h3>${product.name}</h3>
            <img src="${product.images[0].src}" />
            </a> 
            <p> ${product.price_html}</p>
           <button class="product-button" data-product ="${product.id}">Add to bag</button> 
        </div>`
    })

// const buttons = document.querySelectorAll("button");
// buttons.forEach(function(button){
//     button.onclick = function(event){
//         const itemToAdd = products.find(item => item.id === event.target.dataset.product)
//         bagArray.push(itemToAdd);
//         
//
//         console.log(itemToAdd);
//     }
// })


}

getProducts(baseUrl);
