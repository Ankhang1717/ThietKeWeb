//Code thực hiện button quay lại trang chủ
function showModal() {
    document.getElementById('confirmationModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('confirmationModal').style.display = 'none';
}

function confirmRedirect() {
    window.location.href = "../blog.html";
}

window.onclick = function(event) {
    var modal = document.getElementById('confirmationModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
