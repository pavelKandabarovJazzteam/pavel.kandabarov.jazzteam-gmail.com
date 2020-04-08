$(document).ready(() => {
    $(".category").click(() => {
        document.location.href = "/public/category";
        setLocal("param", $(this)[0].classList[2]);
        setLocal("value", $(this)[0].innerText);
    })
    $(".country").click(() => {
        setLocal("param", $(this)[0].classList[2]);
        setLocal("value", $(this)[0].innerText);
        document.location.href = "/public/category";
    })
    $(".sources").click(() => {
        setLocal("param", $(this)[0].classList[2]);
        setLocal("value", $(this)[0].innerText);
        document.location.href = "/public/category";
    })
});
