const bagItems = JSON.parse(localStorage.getItem("bagList"));
const bagContainer = document.querySelector(".bag-list");
const totalContainer = document.querySelector(".total");

let total= 0;
bagItems.forEach(function(bagElement){
    total += bagElement.price;
    bagContainer.innerHTML += 
    `<div class="bag-item">
        <div>
            <h2>${bagElement.name}</h2>
            <h3>${bagElement.price}</h3>
            <h4>${bagElement.description}</h4>
        </div> 
        <img src="${bagElement.image}" alt="${bagElement.name}" class="bag-image" />
    </div>
    `
})

totalContainer.innerHTML = `Total: ${total}`;