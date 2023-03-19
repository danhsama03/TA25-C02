import {question} from "readline-sync";

let year: number;
year = Number(question("Nhap nam:"));

if (year % 4 == 0 && year % 100 != 0 && year % 400 != 0) {
    console.log("Yes");
} else {
    console.log("No");
};