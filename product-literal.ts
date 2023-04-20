import { question } from "readline-sync"

// Định nghĩa kiểu Product
type Product = {
    name: string;
    price: number;
    input: () => void
};

// Đối tượng Product
const product: Product = {
    // Khai báo thuộc tính
    name: "",
    price: 0,

    // Định nghĩa phương thức
    /**
     * Phương thức nhập thông tin của một product
     */
    input(): void {
        this.name = question("Nhap ten san pham: ");
        this.price = Number(question("Nhap gia san pham: "));
    }
};

// Test method
product.input();
console.log(product);