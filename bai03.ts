import {question} from "readline-sync";

let a: number;
a = Number(question("Nhap canh a:"));
let b: number;
b = Number(question("Nhap canh b:"));
let c: number;
c = Number(question("Nhap canh c:"));

if (a == b || a == c || b == c) {
    console.log("Yes");
} else {
    console.log("No");
};