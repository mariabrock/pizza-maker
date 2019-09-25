import cheese from './components/cheese.js'
import order from './components/order.js';

console.log("make all the pizza");

const init = () => {
    cheese.printCheeseOptions();
    order.printOrderButton();
};

init();