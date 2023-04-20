import { question } from 'readline-sync';
import { Product, createProduct } from './product';

// Định nghĩa kiểu Cart
type Cart = {
    productList: Product[];
    customer: string;
    input: () => void;
    priceTotal: () => number;
};


// Factory function tạo ra đối tượng Cart
function createCart(): Cart {
    const cart: Cart = {
        // Khai báo thuộc tính
        productList: [],
        customer: "",

        // Định nghĩa phương thức
        /**
         * Phương thức nhập thông tin giỏ hàng
         */
        input() {
            // Nhập tên khách hàng
            cart.customer = question("Nhap ten khach hang: ")

            // Vòng lặp để nhập mảng sản phẩm
            while (true) {
                // Nhập tên sản phẩm và giá sản phẩm
                const productName = question("Nhap ten san pham: ")
                const productPrice = Number(question("Nhap gia san pham: "))

                // Tạo đối tượng sản phẩm mới bằng hàm createProduct
                const product = createProduct(productName, productPrice);

                // Thêm đối tượng sản phẩm (đã có dữ liệu) vào mảng productList
                cart.productList.push(product);
                console.log('Sản phẩm đã thêm thành công.');

                // Xử lý tiếp tục / dừng lại
                const next = question('Nhấn N để dừng, nhấn phím bất kỳ để tiếp tục: ');
                if (next == "N") {
                    break;
                }
            }
        },

        /**
         * Tính tổng giá của các sản phẩm trong giỏ hàng sau khi đã trừ đi khuyến mãi
         * @param discount là một số nguyên trong đoạn [0, 100] cho biết tỉ lệ phần trăm được giảm giá.
         * @returns Tổng giá
         */
        priceTotal(discount: number = 0) {
            // Nếu mảng rỗng thì tổng giá là 0
            let total: number = 0;
            let totalFinal: number = 0;
            if (cart.productList.length == 0) {
                return totalFinal;
            } else {
                // Nếu mảng không rỗng thì xử lý tiếp
                // Tính tổng giá
                for (let i: number = 1; i <= cart.productList.length; i++) {
                    total += cart.productList[i].price;
                }
                // Xử lý giảm giá
                discount = Number(question("Nhap phan tram giam gia: "))
                totalFinal = total - (total * (discount / 100))
            }
            console.log("Tong gia tri gio hang sau khi giam gia la: ")
            return totalFinal;
        }
    }
    return cart;
}

// Xuất kiểu Cart và factory function createCart
export { Cart, createCart };