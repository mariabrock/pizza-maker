import utilities from '../helpers/utilities.js'

const printCheeseOptions = () => {
    const domString = 'cheese';
    utilities.printToDom(domString, 'cheese-counter')
};

export default { printCheeseOptions };