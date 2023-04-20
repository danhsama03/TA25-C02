/**
 * Hàm cho phép tạo mảng mới bằng cách mở rộng mảng có trước.
 * @param arr Mảng cần được mở rộng
 * @param elements Rest parameter chứa các phần tử sẽ được dùng để mở rộng mảng arr
 * @returns Mảng mới là tổng hợp từ mảng arr và các giá trị trong tham số elements.
 */
export function extendArray(arr: number[], elements: number[]): number[] {
    const tmp: number[] = [...arr, ...elements];
    return tmp;
}
