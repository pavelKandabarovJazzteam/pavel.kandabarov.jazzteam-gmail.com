$(document).ready(function(){
    $(".category").click(function(){
        console.log($(this)[0].innerText);
        console.log($(this)[0].classList[2]);
        document.location.href = "/public/category";
        localStorage.setItem("param",$(this)[0].classList[2]);
        localStorage.setItem("value",$(this)[0].innerText);
    })
    $(".country").click(function(){
        console.log($(this)[0].innerText);
        localStorage.setItem("param",$(this)[0].classList[2]);
        localStorage.setItem("value",$(this)[0].innerText);
        document.location.href = "/public/category";
    })
    $(".sources").click(function(){
        console.log($(this)[0].innerText);
        localStorage.setItem("param",$(this)[0].classList[2]);
        localStorage.setItem("value",$(this)[0].innerText);
        document.location.href = "/public/category";
    })
});
