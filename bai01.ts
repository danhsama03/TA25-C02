import {question} from "readline-sync";

let mediumScore: number;
mediumScore = Number(question("Nhap diem trung binh:"));

if (mediumScore >= 5) {
    console.log("Dau");
} else {
    console.log("Rot");
};