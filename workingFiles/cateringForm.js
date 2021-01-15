import menu from './menu.js';

console.log(menu);
const foodGroup = Object.keys(menu) ;
console.log( foodGroup );

const starters = menu.starters;
console.log(starters);

//access props of a specific object
console.log(starters[1].price);

console.log(starters.length);
const showDishes = starters.map( x =>{
    console.log(x.dish);
});


const showMeatballOptions = starters.map( x =>{
    if(x.options){
        console.log(x.options);
        for (let i in x.options){
            console.log(x.options[i]);
        }
    }
});


var htmlForm = document.getElementById('js-forms');

let h2 = document.createElement("h2");

let milkTxt = document.createTextNode('milk');
h2.appendChild(milkTxt);

htmlForm.appendChild(h2);

for (let i in foodGroup){
    console.log(foodGroup[i]);

    h2 = document.createElement("h2");

    let foodHeader = document.createTextNode(foodGroup[i]);
    h2.appendChild(foodHeader);

    htmlForm.appendChild(h2);
}