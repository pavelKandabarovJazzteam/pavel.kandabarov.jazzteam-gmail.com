$(document).ready(function() {
    $(".category").click(function() {
        document.location.href = "/public/category";
        localStorage.setItem("param", $(this)[0].classList[2]);
        localStorage.setItem("value", $(this)[0].innerText);
    })
    $(".country").click(function() {
        localStorage.setItem("param", $(this)[0].classList[2]);
        localStorage.setItem("value", $(this)[0].innerText);
        document.location.href = "/public/category";
    })
    $(".sources").click(function() {
        localStorage.setItem("param", $(this)[0].classList[2]);
        localStorage.setItem("value", $(this)[0].innerText);
        document.location.href = "/public/category";
    })
});
