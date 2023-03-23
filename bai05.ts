import {question} from "readline-sync";

let n: number;
n = Number(question("Nhap n: "));
let dem: number = 0;

for (let i: number = 1; i <= n; i++) {
    if (n % i == 0) {
        dem++;
    };
};
console.log(dem);

