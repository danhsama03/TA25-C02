import { Product } from "./product";

/**
 * Hàm kiểm tra thông tin của một sản phẩm có hợp lệ không.
 * @param product Sản phẩm cần kiểm tra
 * @returns true nếu sản phẩm hợp lệ, false nếu không hợp lệ
 */
export function isValid(product: Product): boolean {
    let flag: boolean = true;
    const {name, price} = product;
    if (name == "") {
        flag = false;
    }
    if (price <= 0) {
        flag = false;
    }
    return flag
}