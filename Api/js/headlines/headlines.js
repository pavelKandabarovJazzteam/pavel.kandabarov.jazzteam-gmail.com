$(document).ready(() => {
    $(".category").click(function() {
        document.location.href = "/public/category";
        setLocal("param", $(this)[0].classList[2]);
        setLocal("value", $(this)[0].innerText);
    })
    $(".country").click(function()  {
        setLocal("param", $(this)[0].classList[2]);
        setLocal("value", $(this)[0].innerText);
        document.location.href = "/public/category";
    })
    $(".sources").click(function()  {
        setLocal("param", $(this)[0].classList[2]);
        setLocal("value", $(this)[0].innerText);
        document.location.href = "/public/category";
    })
});
