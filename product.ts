import { question } from "readline-sync"

// Định nghĩa kiểu Product
type Product = {
    name: string;
    price: number;
    input: () => void
};

function createProduct(name: string, price: number): Product {
    // Đối tượng Product
    const product: Product = {
        name,
        price,
        input() {
            this.name = question("Nhap ten san pham: ");
            this.price = Number(question("Nhap gia san pham: "));
        }
    };
    return product;
}

// Xuất kiểu Product và đối tượng product
export { Product, createProduct };