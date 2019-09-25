import utilities from '../helpers/utilities.js'

const cheeses = [
    {id: "cheese1", name: "mozzarella", price: 50},
    {id: "cheese2", name: "parmesan", price: 50},
    {id: "cheese3", name: "cheddar", price: 50},
    {id: "cheese4", name: "romano", price: 50},
]

const printCheeseOptions = () => {
    let domString = '';
    for (let i = 0; i < cheeses.length; i++) {
        domString += `<div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id=${cheeses[i].id}>
        <label class="form-check-label" for=${cheeses[i].id}>${cheeses[i].name}</label>
        </div>`;
    } 
    utilities.printToDom(domString, 'cheese-counter');
};

export default { printCheeseOptions };