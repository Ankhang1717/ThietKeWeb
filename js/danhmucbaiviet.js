document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('ul li a[data-blog]');
    
    listItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const filterValue = item.getAttribute('data-blog');
            const articles = document.querySelectorAll('article[data-blog]');
            
            articles.forEach(article => {
                if (article.getAttribute('data-blog') === filterValue) {
                    article.classList.remove('hidden');
                } else {
                    article.classList.add('hidden');
                }
            });
        });
    });
});




// Lấy tất cả các phần tử <li> trong danh mục bài viết
const categoryLinks = document.querySelectorAll('.post_category_widget .cat-list li a');
// Lấy tất cả các bài viết
const blogItems = document.querySelectorAll('.blog_item');
// Thêm sự kiện click cho các phần tử <li>
categoryLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
// Lấy giá trị của thuộc tính "blog" trong <li>
const selectedCategory = this.getAttribute('blog');
// Ẩn tất cả các bài viết
blogItems.forEach(item => {
item.style.display = 'none';
});
// Hiển thị các bài viết thuộc danh mục được chọn
blogItems.forEach(item => {
      const itemCategory = item.getAttribute('data-blog');
        if (itemCategory === selectedCategory) {
              item.style.display = 'flex';
              }
        });
  });
});

