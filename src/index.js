import { adjectives } from './data/adjectives.js';
import { surnames } from './data/surnames.js';


export function generateUserName() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
    const randomNumber = Math.floor(100 + Math.random() * 900); // 3-digit number (100–999)
    return `${randomAdjective}_${randomSurname}_${randomNumber}`;
}
