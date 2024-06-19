document.addEventListener("DOMContentLoaded", function() {
    // Lấy danh sách các sản phẩm
    var products = document.querySelectorAll('.single-product');

    // Đối tượng để lưu trữ số lượng sản phẩm theo brand
    var brandCounts = {
        'nike': 0,
        'adidas': 0,
        'puma': 0
    };

    // Đếm số lượng sản phẩm cho từng brand
    products.forEach(function(product) {
        var brand = product.getAttribute('data-brand');
        if (brand in brandCounts) {
            brandCounts[brand]++;
        }
    });

    // Cập nhật số lượng sản phẩm vào các thẻ <span> tương ứng
    for (var brand in brandCounts) {
        var countSpan = document.getElementById(brand + '-count');
        if (countSpan) {
            countSpan.textContent = ' (' + brandCounts[brand] + ')';
        }
    }
});
