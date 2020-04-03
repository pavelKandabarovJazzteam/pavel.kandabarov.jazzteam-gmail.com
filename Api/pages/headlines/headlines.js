$(document).ready(function(){
    $(".category").click(function(){
        console.log($(this)[0].innerText);
        console.log($(this)[0].classList[2]);
        document.location.href = "file:///D:/JazzTeam/Bicycle/Api/pages/headlines/category.html";
        localStorage.setItem("param",$(this)[0].classList[2]);
        localStorage.setItem("value",$(this)[0].innerText);
    })
    $(".country").click(function(){
        console.log($(this)[0].innerText);
        localStorage.setItem("param",$(this)[0].classList[2]);
        localStorage.setItem("value",$(this)[0].innerText);
        document.location.href = "file:///D:/JazzTeam/Bicycle/Api/pages/headlines/category.html";
    })
    $(".sources").click(function(){
        console.log($(this)[0].innerText);
        localStorage.setItem("param",$(this)[0].classList[2]);
        localStorage.setItem("value",$(this)[0].innerText);
        document.location.href = "file:///D:/JazzTeam/Bicycle/Api/pages/headlines/category.html";
    })
});
