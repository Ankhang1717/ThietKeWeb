document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.querySelector(".products-container");
    const products = Array.from(document.querySelectorAll(".single-product"));
    const brandFilterForm = document.getElementById("brand-filter");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const pageLinks = document.querySelectorAll('.page-link');
    let filteredProducts = products; // Khởi tạo mảng với tất cả sản phẩm

    brandFilterForm.addEventListener("change", filterAndSearchProducts);
    searchButton.addEventListener('click', filterAndSearchProducts);
    searchInput.addEventListener('input', filterAndSearchProducts);

    function filterAndSearchProducts() {
        const selectedBrand = document.querySelector('input[name="brand"]:checked')?.value;
        const searchTerm = searchInput.value.trim().toLowerCase();

        // Lọc sản phẩm dựa trên thương hiệu và từ khóa tìm kiếm
        filteredProducts = products.filter(product => {
            const brand = product.getAttribute('data-brand');
            const title = product.querySelector('h6').textContent.toLowerCase();
            const matchesBrand = !selectedBrand || brand === selectedBrand;
            const matchesSearch = title.includes(searchTerm);
            return matchesBrand && matchesSearch;
        });

        // Hiển thị sản phẩm đã lọc và cập nhật phân trang
        showFirstPageProducts();
        updatePagination();
    }

    function clearProducts() {
        products.forEach(product => {
            product.parentElement.style.display = 'none';
        });
    }

    function showFirstPageProducts() {
        const itemsPerPage = 6;
        clearProducts(); // Ẩn tất cả các sản phẩm trước khi hiển thị các sản phẩm đã lọc

        // Hiển thị tối đa 6 sản phẩm đã lọc trên trang đầu tiên
        for (let i = 0; i < itemsPerPage; i++) {
            if (filteredProducts[i]) {
                filteredProducts[i].parentElement.style.display = 'block';
            }
        }

        markCurrentPageActive(pageLinks[0]); // Đánh dấu trang đầu tiên là active
    }

    pageLinks.forEach(link => {
        link.addEventListener('click', paginate);
    });

    function paginate(e) {
        e.preventDefault();
        const page = parseInt(this.textContent);
        const startIndex = (page - 1) * 6;
        const endIndex = startIndex + 6;

        clearProducts(); // Ẩn tất cả các sản phẩm trước khi hiển thị các sản phẩm đã lọc ở trang tương ứng

        // Hiển thị các sản phẩm đã lọc ở trang tương ứng
        for (let i = startIndex; i < endIndex; i++) {
            if (filteredProducts[i]) {
                filteredProducts[i].parentElement.style.display = 'block';
            }
        }

        markCurrentPageActive(this); // Đánh dấu trang hiện tại là active
    }

    function updatePagination() {
        // Ẩn tất cả các liên kết trang
        pageLinks.forEach(link => {
            link.style.display = 'none';
        });

        // Hiển thị các sản phẩm đã được hiển thị và đánh dấu lại phân trang
        const totalPages = Math.ceil(filteredProducts.length / 6);
        for (let i = 0; i < totalPages; i++) {
            pageLinks[i].style.display = 'inline-block';
        }

        // Đánh dấu lại trang đầu tiên là active
        markCurrentPageActive(pageLinks[0]);
    }

    function markCurrentPageActive(currentLink) {
        pageLinks.forEach(link => {
            link.classList.remove('active');
        });
        currentLink.classList.add('active');
    }

    // Ban đầu hiển thị các sản phẩm trên trang đầu tiên và cập nhật phân trang
    filterAndSearchProducts();
});
