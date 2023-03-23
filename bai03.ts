import {question} from "readline-sync";

let n: number;
n = Number(question("Nhap n: "));

for (let i: number = 1; i <= n; i++) {
    if (n % i == 0) {
        if (i % 2 == 0) {
            console.log(i);
        };
    };
};