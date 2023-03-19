import {question} from "readline-sync";

let a: number;
a = Number(question("Nhap a:"));
let b: number;
b = Number(question("Nhap b:"));
let c: number;
c = Number(question("Nhap c:"));
let x1: number, x2: number;

const delta:number =(b*b-4*a*c)
if (delta == 0) {
    x1 = -b / (2 * a);
    x2 = -b / (2 * a);
    console.log(x1, x2);
} else if (delta < 0) {
    console.log("VN");
} else if (a == 0 && b == 0 && c == 0) {
    console.log("VSN");
} else {
    x1 = (-b - Math.sqrt(delta)) / (2 * a);
    x2 = (-b + Math.sqrt(delta)) / (2 * a);
    console.log(x1, x2);
};