import {question} from "readline-sync";

let n: number;
n = Number(question("Nhap n: "));
let S: number = 0;

for (let i: number = 1; i <= n - 1; i++) {
  if (n % i == 0) {   
    S += i;
  }
};

if (S == n) {
    console.log("Yes");
} else {
    console.log("No");
};