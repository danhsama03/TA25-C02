import {question} from "readline-sync";

let w: number;
w = Number(question("Nhap w: "));
let h: number;
h = Number(question("Nhap h: "));

for (let i: number = 0; i < h; i++) {
    for (let k: number = 0; k < w; k++) {
        if (i == 0 || k == 0 || i == h - 1 || k == w - 1) {
            console.log("*");
        }
        else {
            console.log(" ");
        };
    };
    console.log("/n");
};