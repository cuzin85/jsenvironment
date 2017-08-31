import '../css/style.css';
import numeral from 'numeral';

const prize = numeral(1000).format('$0,0.00');
console.log(`Congratulations, you won ${prize}!`);
