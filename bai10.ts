import {question} from "readline-sync";

let h: number;
h = Number(question("Nhap h: "));

for (let i: number = 1; i <= h; i++)
   {
      for (let j: number = 1; j <= i; j++)
      {
         if (j == 1 || j == i || i == h)
            console.log("* ");
         else
         console.log("  ");
      }
      console.log("\n");
   }