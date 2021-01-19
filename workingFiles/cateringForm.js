import menu from './menu.js';
let cost = 0;
const eventFood = [ ];
const menu1 = Object.entries(menu);
let form = document.getElementsByTagName("form")[0];

const contact_info = { };
const event_info = { };

var element = document.querySelectorAll(".contact-input");
for (let i=0; i < element.length; i++){
    element[i].addEventListener('change', function(){saveContactInfo(this.name, this.value)})
}
var element2 = document.querySelectorAll('.event-input');
for (let i=0; i < element.length; i++){
    element2[i].addEventListener('change', function(){saveEventInfo(this.name, this.value)})
}


let costDisplay = document.createElement("h2");
costDisplay.className = 'center';
costDisplay.id = 'costDisplay';
costDisplay.textContent = cost;

let sectionHeader = document.createElement('div');
sectionHeader.className= 'section';
sectionHeader.textContent = 'Food Options';
let span = document.createElement('span');
span.textContent= '3';
sectionHeader.prepend(span);

form.appendChild(sectionHeader)
for (const [foodTier, foodArray] of menu1) {
    create_detailsSummary(foodTier);
    foodArray.map( item => makeCheckBox(foodTier, item.dish, item.price));
}
form.appendChild(costDisplay);

function setPriceHeaders(tier){
    let priceHeader = document.createElement('p');
    priceHeader.className = 'price-header';
    let detailsID = document.getElementById(tier + '-details');
    switch (tier){
        case 'Salads':
        case 'Stews':
        case 'Soups':
            priceHeader.textContent = 'All $5 per person';
            detailsID.appendChild(priceHeader);
            break;

        case 'Sides' :
            priceHeader.textContent = 'All $1.50 per person';
            detailsID.appendChild(priceHeader);
            break;

        case 'Drinks' :
            priceHeader.textContent = 'Served By the Gallon $8';
            detailsID.appendChild(priceHeader);
            break;
        
        default:
            return '';
    }
}
function changeFoodTotal(food, price){
    let checkBox = document.getElementById(food);
    if (checkBox.checked){
    cost = parseFloat(price) + cost;    
  } else{
    cost = cost - parseFloat(price);
  }  
  costDisplay.textContent = cost.toFixed(2);
}
function change_eventFood(dishID,dish){
    let checkBox = document.getElementById(dishID);
    if (checkBox.checked){
        eventFood.push(dish);
    }
    else{
        let index = eventFood.indexOf(dish);
        eventFood.splice(index, 1);
        if(!eventFood.length){
            costDisplay.textContent = 0 ;
        }
    }
}
function create_detailsSummary(tier){
    let details = document.createElement("details");
    details.id = tier + '-details';
    form.appendChild(details);
    
    let summary = document.createElement('summary');
    summary.textContent = (tier == 'Soups') ? 'Soups and Stews' : tier;
    summary.className = 'center';
    form.appendChild(summary);
    setPriceHeaders(tier); 
    
    document.getElementById(tier+'-details').appendChild(summary);
}
function makeCheckBox(category, dish, price){
        let tierHeader = document.getElementById(category + '-details');
    
        let label = document.createElement('LABEL');
        label.htmlFor = dish
                        .replace(/\s+/g, '-')
                        .toLowerCase();
        label.textContent = dish + ' ' + price;
        label.style.display = 'flex';
        label.style.flexFlow = 'row-reverse';
        label.style.justifyContent = 'flex-end';
        label.className = 'flex-reverse-end'
        label.id = dish
                    .replace(/\s+/g, '-')
                    .toLowerCase() 
                    + '-label';
        
        tierHeader.appendChild(label);
    
        let input = document.createElement('INPUT');
        input.name = category;
        input.type = 'checkbox';   
        input.id = dish
                    .replace(/\s+/g, '-')
                    .toLowerCase();
        input.value = price;
        //input.attributes = 'read-only';
        input.addEventListener('click', function(){console.log(input.id)}); 
        input.addEventListener('click', function(){changeFoodTotal(input.id, price)});
        input.addEventListener('click', function(){change_eventFood(input.id, dish)})  ;
        document.getElementById(input.id +'-label').appendChild(input);
    }
function saveContactInfo(name, value ){
    contact_info[name] = value;
    console.log(contact_info);
}
function saveEventInfo(name, value){
    event_info[name] = value;
    console.log(event_info);
}
/*

let eventFoodDisplay = document.createElement("h2");
eventFoodDisplay.className = 'center';
eventFoodDisplay.id = 'eventFoodDisplay';
eventFoodDisplay.textContent = eventFood[i];
document.getElementById('footer').appendChild(eventFoodDisplay);

const contact_info = { };
const event_info = { };

function saveContactInfo(e){
    console.log(e.target.name);
    //contact_info[e.target.name] = e.target.name;
}
function saveEventInfo(e){
    console.log(e.target.name);
    //event_info['e.target.name'] = e.target.name;
}
*/
