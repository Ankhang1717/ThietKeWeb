document.addEventListener("DOMContentLoaded", function() {
				
    const products = document.querySelectorAll(".single-product");
    const brandFilterForm = document.getElementById("brand-filter");
    const pageLinks = document.querySelectorAll('.page-link');
    const sortSelect = document.getElementById('sort-select');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    let filteredProducts = Array.from(products); // Initialize with all products
    let currentSortOption = null;
    let currentPage = 1;
    const itemsPerPage = 6; // Adjust the number of items per page

    brandFilterForm.addEventListener("change", filterAndSearchProducts);
    sortSelect.addEventListener('change', sortProducts);
    searchButton.addEventListener('click', filterAndSearchProducts);

    pageLinks.forEach(link => {
        link.addEventListener('click', paginate);
    });

    function filterAndSearchProducts() {
        const selectedBrand = document.querySelector('input[name="brand"]:checked')?.value;
        const searchTerm = searchInput.value.trim().toLowerCase();

        filteredProducts = Array.from(products).filter(product => {
            const brand = product.getAttribute('data-brand');
            const productName = product.querySelector('h6').innerText.toLowerCase();
            return (!selectedBrand || brand === selectedBrand) && productName.includes(searchTerm);
        });

        currentPage = 1; // Reset to the first page on new search
        sortProducts(); // Apply the current sort option if any
        showPageProducts(currentPage); // Show the first page of search results
    }

    function sortProducts() {
        currentSortOption = sortSelect.value;

        filteredProducts.sort((a, b) => {
            const priceA = parseInt(a.getAttribute('data-price'));
            const priceB = parseInt(b.getAttribute('data-price'));

            if (currentSortOption === 'asc') {
                return priceA - priceB;
            } else if (currentSortOption === 'desc') {
                return priceB - priceA;
            } else {
                return 0; // Default: no sorting
            }
        });

        // Update the filtered products after sorting
        showPageProducts(currentPage); // Show the current page of sorted products
    }

    function showPageProducts(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        products.forEach(product => {
            product.parentElement.style.display = 'none';
        });

        for (let i = startIndex; i < endIndex && i < filteredProducts.length; i++) {
            filteredProducts[i].parentElement.style.display = 'block';
        }

        markCurrentPageActive(pageLinks[page - 1]); // Mark the current page as active
        updatePaginationControls(page); // Update pagination controls
    }

    function paginate(e) {
        e.preventDefault();
        const page = parseInt(this.textContent);
        currentPage = page;
        showPageProducts(currentPage); // Show the products for the selected page
    }

    function markCurrentPageActive(currentLink) {
        pageLinks.forEach(link => {
            link.classList.remove('active');
        });
        currentLink.classList.add('active');
    }

    function updatePaginationControls(page) {
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        pageLinks.forEach((link, index) => {
            if (index < totalPages) {
                link.style.display = 'inline-block';
            } else {
                link.style.display = 'none';
            }
        });
    }

    // Initial display of products on the first page
    showPageProducts(currentPage);
});