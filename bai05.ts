import {question} from "readline-sync";

let kw: number;
kw = Number(question("Nhap so kw dien:"));

if (kw < 200) {
    const total: number = kw * 2000;
    console.log(total);
} else if (100 <= kw && kw < 200) {
    const total: number = kw * 2500;
    console.log(total);
} else {
    const total: number = kw * 3500;
    console.log(total);
};

