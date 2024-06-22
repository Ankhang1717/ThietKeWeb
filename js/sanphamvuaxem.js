                            // Function to save the viewed post to localStorage
                            function saveViewedPost(postTitle, postUrl, postImage) {
                                const viewedPosts = JSON.parse(localStorage.getItem('viewedPosts')) || [];
                        
                                // Check if the post already exists in the array
                                const exists = viewedPosts.some(post => post.url === postUrl);
                        
                                if (!exists) {
                                    // Add new post to the beginning of the array
                                    viewedPosts.unshift({ title: postTitle, url: postUrl, image: postImage });
                        
                                    // Limit the array to 4 items
                                    if (viewedPosts.length > 4) {
                                        viewedPosts.pop();
                                    }
                        
                                    // Save back to localStorage
                                    localStorage.setItem('viewedPosts', JSON.stringify(viewedPosts));
                                }
                            }
                        
                            // Code sản phầm vừa xem javascript
                            
                            function displayViewedPosts() {
                                const viewedPosts = JSON.parse(localStorage.getItem('viewedPosts')) || [];
                        
                                const container = document.querySelector('.popular_post_widget');
                                container.innerHTML = '<h3 class="widget_title styled-title">BÀI VIẾT VỪA XEM</h3>';
                        
                                viewedPosts.forEach(post => {
                                    const postItem = document.createElement('div');
                                    postItem.classList.add('media', 'post_item');
                        
                                    postItem.innerHTML = `
                                        <img src="${post.image}" alt="${post.title}" style="width: 80px; height: 80px; margin-right: 15px;">
                                        <div class="media-body">
                                            <a href="${post.url}">
                                                <h3>${post.title}</h3>
                                            </a>
                                        </div>
                                    `;
                        
                                    container.appendChild(postItem);
                                });
                        
                                const br = document.createElement('div');
                                br.classList.add('br');
                                container.appendChild(br);
                            }
                        
                            document.addEventListener('DOMContentLoaded', function () {
                                // Save the current post when viewing its details
                                const postTitle = document.querySelector('.blog_details h2').innerText;
                                const postUrl = window.location.href;
                                const postImage = document.querySelector('.blog_post img').src;
                        
                                saveViewedPost(postTitle, postUrl, postImage);
                        
                                // Display the viewed posts
                                displayViewedPosts();
                            });
                        
                            // Event listener to update viewed posts on clicking a new post link
                            document.querySelectorAll('.blog_post a.white_bg_btn').forEach(link => {
                                link.addEventListener('click', function() {
                                    const postTitle = this.closest('.blog_post').querySelector('.blog_details h2').innerText;
                                    const postUrl = this.href;
                                    const postImage = this.closest('.blog_post').querySelector('img').src;
                        
                                    saveViewedPost(postTitle, postUrl, postImage);
                                    displayViewedPosts();
                                });
                            });
