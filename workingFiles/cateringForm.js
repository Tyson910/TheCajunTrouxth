import menu from './menu.js';

const menu1 = Object.entries(menu);
let form = document.getElementsByTagName("form")[0];

for (const [foodTier, foodArray] of menu1) {
    makeHeader(foodTier);
    foodArray.map( item => makeCheckBox(foodTier, item.dish, item.price))
}

function setPriceHeaders(header, h2){
    let priceHeader;
    switch (header){
        case 'Salads':
        case 'Stews':
        case 'Soups':
            priceHeader = document.createElement('p');
            priceHeader.className = 'price-header';
            priceHeader.textContent = 'All $5 per person';
            h2.appendChild(priceHeader);
            break;

        case 'Sides' :
            priceHeader = document.createElement('p');
            priceHeader.className = 'price-header';
            priceHeader.textContent = 'All $1.50 per person';
            h2.appendChild(priceHeader);
            break;

        case 'Drinks' :
            priceHeader = document.createElement('p');
            priceHeader.className = 'price-header';
            priceHeader.textContent = 'Served By the Gallon $8';
            h2.appendChild(priceHeader);
            break;
        
        default:
            return '';
    }
}
function makeHeader(tier){
    let h2 = document.createElement("h2");
    h2.className = 'center';
    h2.id = tier;
    h2.textContent = (tier == 'Soups') ? 'Soups and Stews' : tier;
    form.appendChild(h2);
    setPriceHeaders(tier, h2); 
}
function makeCheckBox(category, dish, price){
    let tierHeader = document.getElementById(category);

    let label = document.createElement('LABEL');
    label.htmlFor = dish.replace(/\s+/g, '-').toLowerCase();
    label.textContent = dish + ' ' + price;
    label.className = 'flex-reverse-end'
    label.id = dish.replace(/\s+/g, '-').toLowerCase() + '-label'
    tierHeader.appendChild(label);

    let input = document.createElement('INPUT');
    input.name = category;
    input.type = 'checkbox';   
    input.id = dish.replace(/\s+/g, '-').toLowerCase();
    input.value = price;
    document.getElementById(dish.replace(/\s+/g, '-').toLowerCase()+'-label').appendChild(input);
}
/*
flex-reverse-end
*/

//let foodSet = foodGroup[i].replace(/^"(.*)"$/, '$1');