import {formatCurrency} from "../../scripts/utils/money.js";

console.log("test name : formatCurrency");

console.log('convert cents into dollar');

if (formatCurrency(2065)==='20.65'){
    console.log('passed');
}else{
    console.log("failed");
}

console.log('working with zero');

if (formatCurrency(0)==='0.00'){
    console.log('passed');
}else{
    console.log("failed");
}

console.log('working with nearset round offs');

if (formatCurrency(2000.5)==='20.01'){
    console.log('passed');
}else{
    console.log("failed");
}