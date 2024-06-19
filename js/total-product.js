document.addEventListener("DOMContentLoaded", function() {
    // Lấy danh sách các sản phẩm
    var products = document.querySelectorAll('.single-product');

    // Lấy thẻ span để hiển thị tổng số sản phẩm
    var totalProductsSpan = document.getElementById('total-products-span');

    // Đếm số lượng sản phẩm
    var totalProducts = products.length;

    // Hiển thị tổng số sản phẩm trong thẻ span
    totalProductsSpan.textContent = ' (' + totalProducts + ')';
});
