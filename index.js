// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
let title = 'Learn Regular Expressions';
appDiv.innerHTML = `<h1>${title}</h1>`;
const resultDiv = document.getElementById('result');



const string1 = `CONTAINS([COLOUR_CD],"NAVY")&&[BRAND]= "FOR LIVING" 
[ASSEMBLED_HEIGHT_CM_QTY] >=15 && [ASSEMBLED_HEIGHT_CM_QTY]<30`;

const string2 = `I expect five hundred dollars ($500)`;


let regexp = /\[(\w+)\]/gim;

// let reg2 = /[\[|\]]/ig;


let result = string1.match(regexp);
// let result = string1.match(regexp).map( str => str.replace(reg2, '') );
resultDiv.innerHTML = `<h1>${result}</h1>`;
console.log(result)