// phân trang
		document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".single-product");
    const pageLinks = document.querySelectorAll('.page-link');

    // Lắng nghe sự kiện click trên từng liên kết trang
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = parseInt(this.textContent);

            // Ẩn tất cả các sản phẩm
            products.forEach(product => {
                product.style.display = 'none';
            });

            // Hiển thị các sản phẩm ở trang tương ứng
            const startIndex = (page - 1) * 6; // 6 là số sản phẩm hiển thị trên mỗi trang
            const endIndex = startIndex + 6;
            for (let i = startIndex; i < endIndex; i++) {
                if (products[i]) {
                    products[i].style.display = 'block';
                }
            }

            // Đánh dấu trang hiện tại là active
            markCurrentPageActive(this);
        });
    });

    // Hàm để đánh dấu trang hiện tại là active
    function markCurrentPageActive(currentLink) {
        pageLinks.forEach(link => {
            link.classList.remove('active');
        });
        currentLink.classList.add('active');
    }

    // Ban đầu chỉ hiển thị trang đầu tiên và làm cho trang đầu tiên là active
    const firstPageLink = pageLinks[0];
    markCurrentPageActive(firstPageLink);
});

// giá


    document.addEventListener('DOMContentLoaded', function() {
    var selectElement = document.getElementById('sort-select');

    selectElement.addEventListener('change', function() {
        var selectedOption = this.value;
        sortProducts(selectedOption);
    });

    function sortProducts(option) {
        var productList = document.getElementById('product-list');
        var products = Array.from(productList.querySelectorAll('.single-product'));

        products.sort(function(a, b) {
            var priceA = parseInt(a.getAttribute('data-price'));
            var priceB = parseInt(b.getAttribute('data-price'));

            if (option === 'asc') {
                return priceA - priceB;
            } else if (option === 'desc') {
                return priceB - priceA;
            }
        });

        // Clear current product list
        while (productList.firstChild) {
            productList.removeChild(productList.firstChild);
        }

        // Append sorted products
        products.forEach(function(product) {
            productList.appendChild(product);
        });

        setupPagination(products);
    }

    function setupPagination(products) {
        const productsPerPage = 6;
        const totalPages = Math.ceil(products.length / productsPerPage);
        const pagination = document.querySelector(".pagination");

        // Clear previous pagination
        pagination.querySelectorAll('.page-number').forEach(function(el) {
            el.remove();
        });

        function showPage(page) {
            products.forEach((product, index) => {
                if (index >= (page - 1) * productsPerPage && index < page * productsPerPage) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        }

        function createPagination() {
            for (let i = 1; i <= totalPages; i++) {
                const pageLink = document.createElement("a");
                pageLink.href = "#";
                pageLink.className = "page-number";
                pageLink.textContent = i;
                pageLink.addEventListener("click", (e) => {
                    e.preventDefault();
                    document.querySelector(".page-number.active").classList.remove("active");
                    pageLink.classList.add("active");
                    showPage(i);
                });
                pagination.insertBefore(pageLink, pagination.querySelector(".next-arrow"));
            }
        }
        // Set the first page as active and show products
        if (totalPages > 0) {
            showPage(1);
            pagination.querySelector(".page-number").classList.add("active");
        }
        createPagination();
    }

    // Initialize pagination on page load
    var products = Array.from(document.getElementById('product-list').querySelectorAll('.single-product'));
    setupPagination(products);
});
