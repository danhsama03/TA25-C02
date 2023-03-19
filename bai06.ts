import {question} from "readline-sync";

let characters: string;
characters = question("Nhap ki tu:");

if (characters >= "a" && characters <= "z") {
  console.log("Ki tu thuong");
} else if (characters >= "A" && characters <= "Z") {
  console.log("Ki tu hoa");
} else if (Number(characters) >= 0 && Number(characters) <= 9) {
  console.log("Ki tu so");
} else {
  console.log("Ki tu dac biet");
};

