import {question} from "readline-sync";

let powerNumber: number;
powerNumber = Number(question("Nhap so quyen luc cua ban:"));

if (powerNumber >= 100 && powerNumber <= 999) {
    if (powerNumber / 9 >= 100) {
        console.log("Day la so quyen luc");
    } else {
        console.log("Day khong phai so quyen luc");
    };
} else {
    console.log("Nhap so khac ban ei");
};