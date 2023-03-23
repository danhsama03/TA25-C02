import {question} from "readline-sync";

let m: number;
m = Number(question("Nhap m: "));
let n: number;
n = Number(question("Nhap n: "));

for ( ; m <= n; m++) {
  let k: number = Math.floor(Math.sqrt(m));
  if (m == Math.pow(k, 2)) {
    console.log(m);
    break;
  };
};
