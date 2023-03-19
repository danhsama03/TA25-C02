import {question} from "readline-sync";

let inputNumber: number;
inputNumber = Number(question("Nhap so nguyen:"));

if (inputNumber > 9 && inputNumber < 99) {
    let number1: number = Math.floor(inputNumber / 10);
    let number2: number = inputNumber % 10;
    switch (number1) {
        case 1:
            console.log("mot ");
            break;
        case 2:
            console.log("hai ");
            break;
        case 3:
            console.log("ba ");
            break;
        case 4:
            console.log("bon ");
            break;
        case 5:
            console.log("nam ");
            break;
        case 6:
            console.log("sau ");
            break;
        case 7:
            console.log("bay ");
            break;
        case 8:
            console.log("tam ");
            break;
        case 9:
            console.log("chin ");
            break;
    }
    switch (number2) {
        case 1:
            console.log("mot ");
            break;
        case 2:
            console.log("hai ");
            break;
        case 3:
            console.log("ba ");
            break;
        case 4:
            console.log("bon ");
            break;
        case 5:
            console.log("nam ");
            break;
        case 6:
            console.log("sau ");
            break;
        case 7:
            console.log("bay ");
            break;
        case 8:
            console.log("tam ");
            break;
        case 9:
            console.log("chin ");
            break;
    }
} else {
    console.log("Nhap so khac");
};