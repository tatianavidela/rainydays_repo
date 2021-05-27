const bagItems = JSON.parse(localStorage.getItem("bagList"));
const bagContainer = document.querySelector(".bag-list");
const totalContainer = document.querySelector(".total");

let total= 0;
bagItems.forEach(function(bagElement){
    total += bagElement.price;
    bagContainer.innerHTML += 
    `<div class="bag-item">
        <div>
            <h4>${bagElement.name}</h4>
            <div>${bagElement.price}</div>
        </div>
        <img src="${bagElement.image}" alt="${bagElement.name}" class="bag-image" />
    </div>
    `
})

totalContainer.innerHTML = `Total: ${total}`;