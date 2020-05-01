let name = localStorage.getItem('name');
let coffees = ['Espresso', 'Traditional Drip', 'Cappuccino', 'Latte', 'Frappe', 'Mocha', 'Protein Shake', 'Smoothy']
let prices = [4.15, 6.35, 4.95, 3.65, 4.25, 3.45, 6.45, 4.15]
let quantities = [];
let discount = localStorage.getItem('discount');
let totalPrice = localStorage.getItem('totalPrice');

document.querySelector('#inner-right h1').innerHTML = name;
document.querySelector('#inner-right h4').innerHTML = `Discount: ${discount}%`
document.querySelector('#inner-right h3').innerHTML = `Total Price: $${totalPrice}`

for (let i = 0; i < coffees.length; i++){
    quantities.push(localStorage.getItem(`coffee${i}`));

    if(quantities[i] != 0){
        let ul = document.getElementsByTagName('ul');
        ul[0].innerHTML += `<li><p class="coffee">${coffees[i]}</p><p class="quantity">${quantities[i]}</p><p>$${(prices[i] * quantities[i]).toFixed(2)}</p></li>`;
    }
}

