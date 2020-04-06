$(document).ready(function(){
    let string = Cookies.get("favorites");
    let stringParam = Cookies.get("favorites-param");
    let tmp = string.split("?");
    let tmpParam = stringParam.split("?");
    for(let i in tmp){
        if (tmp[i] == "undefined") {
            continue;
        }
        if (tmpParam[i] == "undefined") {
            continue;
        }
        switch (tmpParam[i]) {
            case "country":
                $(".grid-country").append(`
                    <button type="button" data-param="${tmpParam[i]}" class="btn btn-dark favorites-link">${tmp[i]}</button>
                `);
                break;
            case "sources":
                $(".grid-sources").append(`
                    <button type="button" data-param="${tmpParam[i]}" class="btn btn-dark favorites-link">${tmp[i]}</button>
                `);
                break;
            case "category":
                $(".grid-category").append(`
                    <button type="button" data-param="${tmpParam[i]}" class="btn btn-dark favorites-link">${tmp[i]}</button>
                `);
            break;
        }
    }
    $(".btn.btn-dark.favorites-link").click( function(){
        localStorage.setItem("param", $(this)[0].dataset.param);
        localStorage.setItem("value", $(this).text());
        console.log(localStorage);
        document.location.href = "/public/category";
    });
    $(".remove-favorites").click(function(){
        Cookies.remove("favorites");
        Cookies.remove("favorites-param");
        $(".btn.btn-dark.favorites-link").remove();
        $(".btn.btn-dark.favorites-link").remove();
        $(".btn.btn-dark.favorites-link").remove();
    });
});
