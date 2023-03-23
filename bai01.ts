import {question} from "readline-sync";

let n: number;
n = Number(question("Nhap n:"));

for (let i: number = 1; i <= n; i++) {
    console.log("Kmin " + i);
};