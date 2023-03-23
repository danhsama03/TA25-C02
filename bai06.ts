import {question} from "readline-sync";

let n: number;
n = Number(question("Nhap n: "));
let flag: number = 0;

for (let i: number = 0; i <= n; i++) {
  if (Math.pow(i, 2) == n) {   
    flag = 1;
    break;
  }
};

if (flag == 1) {
  console.log("Yes");
} else {
  console.log("No");
};

