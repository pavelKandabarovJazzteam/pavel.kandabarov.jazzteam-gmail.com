$(document).ready(function() {
    let favorites = Cookies.get("favorites");
    let favoritesParam = Cookies.get("favorites-param");
    let tmp = favorites.split("?");
    let tmpParam = favoritesParam.split("?");
    for (let i = 1; i < tmp.length; i++) {
        switch (tmpParam[i]) {
            case "country":
                $(".add-category1").remove();
                $(".grid-country").append(`
                    <button type="button" data-param="${tmpParam[i]}" class="btn btn-dark favorites-link">${tmp[i]}</button>
                `);
                break;
            case "sources":
                $(".add-category2").remove();
                $(".grid-sources").append(`
                    <button type="button" data-param="${tmpParam[i]}" class="btn btn-dark favorites-link">${tmp[i]}</button>
                `);
                break;
            case "category":
                $(".add-category3").remove();
                $(".grid-category").append(`
                    <button type="button" data-param="${tmpParam[i]}" class="btn btn-dark favorites-link">${tmp[i]}</button>
                `);
                break;
        }
    }
    $(".btn.btn-dark.favorites-link").click(function() {
        localStorage.setItem("param", $(this)[0].dataset.param);
        localStorage.setItem("value", $(this).text());
        document.location.href = "/public/category";
    });
    $(".remove-favorites").click(function() {
        Cookies.remove("favorites");
        Cookies.remove("favorites-param");
        $(".btn.btn-dark.favorites-link").remove();
    });
});
