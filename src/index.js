import { adjectives } from './adjectives.js';
import { surnames } from './surnames.js';


function generateName() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
    const randomNumber = Math.floor(100 + Math.random() * 900); // 3-digit number (100–999)
    return `${randomAdjective}_${randomSurname}_${randomNumber}`;
}

export default generateName;
