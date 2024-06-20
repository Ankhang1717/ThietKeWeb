document.addEventListener("DOMContentLoaded", function() {
    // Function to count products by id and brand
    function countProductsByIdAndBrand(id, brand = null) {
        let selector = brand ? `.single-product[id='${id}'][data-brand='${brand}']` : `.single-product[id='${id}']`;
        return document.querySelectorAll(selector).length;
    }

    // Count all football products
    let totalFootballCount = countProductsByIdAndBrand("football");
    document.getElementById("total-football-count").textContent = ` (${totalFootballCount})`;

    // Count football products by brand
    let nikeFootballCount = countProductsByIdAndBrand("football", "nike");
    document.getElementById("nike-football-count").textContent = ` (${nikeFootballCount})`;

    let adidasFootballCount = countProductsByIdAndBrand("football", "adidas");
    document.getElementById("adidas-football-count").textContent = ` (${adidasFootballCount})`;

    let pumaFootballCount = countProductsByIdAndBrand("football", "puma");
    document.getElementById("puma-football-count").textContent = ` (${pumaFootballCount})`;

    // Count all basketball products
    let totalBasketballCount = countProductsByIdAndBrand("basketball");
    document.getElementById("total-basketball-count").textContent = ` (${totalBasketballCount})`;

    // Count basketball products by brand
    let nikeBasketballCount = countProductsByIdAndBrand("basketball", "nike");
    document.getElementById("nike-basketball-count").textContent = ` (${nikeBasketballCount})`;

    let adidasBasketballCount = countProductsByIdAndBrand("basketball", "adidas");
    document.getElementById("adidas-basketball-count").textContent = ` (${adidasBasketballCount})`;

    let pumaBasketballCount = countProductsByIdAndBrand("basketball", "puma");
    document.getElementById("puma-basketball-count").textContent = ` (${pumaBasketballCount})`;

        // Count all runner products
        let totalRunnerCount = countProductsByIdAndBrand("runner");
        document.getElementById("total-runner-count").textContent = ` (${totalRunnerCount})`;
    
        // Count runner products by brand
        let nikeRunnerCount = countProductsByIdAndBrand("runner", "nike");
        document.getElementById("nike-runner-count").textContent = ` (${nikeRunnerCount})`;
    
        let adidasRunnerCount = countProductsByIdAndBrand("runner", "adidas");
        document.getElementById("adidas-runner-count").textContent = ` (${adidasRunnerCount})`;
    
        let pumaRunnerCount = countProductsByIdAndBrand("runner", "puma");
        document.getElementById("puma-runner-count").textContent = ` (${pumaRunnerCount})`;
});
