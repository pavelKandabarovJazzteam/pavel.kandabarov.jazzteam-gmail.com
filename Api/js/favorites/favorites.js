$(document).ready(function() {
    let favorites = getCookie("favorites");
    let favoritesParam = getCookie("favorites-param");
    let tmp = getMass(favorites, "?");
    let tmpParam = getMass(favoritesParam, "?");
    for (let i = 1; i < tmp.length; i++) {
        switch (tmpParam[i]) {
            case "country":
                $(".add-category1").remove();
                showBtn(tmp[i], tmpParam[i]);
                break;
            case "sources":
                $(".add-category2").remove();
                showBtn(tmp[i], tmpParam[i]);
                break;
            case "category":
                $(".add-category3").remove();
                showBtn(tmp[i], tmpParam[i]);
                break;
        }
    }
    $(".btn.btn-dark.favorites-link").click(function() {
        setLocal("param", $(this)[0].dataset.param);
        setLocal("value", $(this).text());
        document.location.href = "/public/category";
    });
    $(".remove-favorites").click(function() {
        removeCookies("favorites");
        removeCookies("favorites-param");
        $(".btn.btn-dark.favorites-link").remove();
    });
});
