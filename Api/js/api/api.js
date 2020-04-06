/** //@Returns the length of the entered number
 * //@param {number} number Input number
 * //@return {number}
 */

$('#searchUser').on('keyup', function(e) {
    let search = e.target.value;
    console.log(search);
    find(search);
});
$(".goSearch").click((e) => {
    localStorage.setItem("search", $('#searchUser').val());
});


const headlineCountry = (iso) => {
    $.get(
        "http://newsapi.org/v2/top-headlines", {
            "country": iso,
            "apiKey": "c32f989c652240dcafaff00a9d107cd6"
        },
        (data) => {
            let tmp = data.articles;
            let result = "";
            for (let i in tmp) {
                result = tmp[i].urlToImage ? tmp[i].urlToImage : "//img/noImage.svg.png";
                $("#input-headlines").append(`
                     <div class="col-md-3 col-12 headlines__card">
                         <div class="card">
                             <img class="card-img-top" src="${result}" alt="Card image cap">
                             <div class="card-body">
                                 <span class="headlines__time">${tmp[i].publishedAt.substring(0,10)} </span>
                                 <h5 class="card-title"><a href="${tmp[i].url}">${tmp[i].source.name}</a></h5>
                                 <p>${tmp[i].title}</p>
                             </div>
                         </div>
                     </div>
                 `);
                result = "";
            }
        }
    );
}

// let qwe = "";
const getNextDetail = (value, url) => {
    $.get(
        "http://newsapi.org/v2/everything", {
            "q": value,
            "apiKey": "c32f989c652240dcafaff00a9d107cd6"
        },
        (data) => {
            console.log(data.totalResults);
            if (data.totalResults > 0) {
                document.location.href = "/public/detail";
                localStorage.setItem("q", value);
            } else {
                document.location.href = url;
            }
        }
    )
}
const headline = () => {
    $.get(
        "http://newsapi.org/v2/top-headlines",
        {
            "country": "us",
            "pageSize": 8,
            "apiKey": "c32f989c652240dcafaff00a9d107cd6"
        },
        (data) => {
            // console.log(data);
            let tmp = data.articles;
            let result = "";
            for (let i in tmp) {
                result = tmp[i].urlToImage ? tmp[i].urlToImage : "/img//img/noImage.svg.png";
                $("#input-headlines").append(`
                    <div class="col-md-3 col-12 headlines__card">
                        <div class="card">
                            <img class="card-img-top" src="${result}" alt="${tmp[i].source.name}">
                            <div class="card-body">
                                <span class="headlines__time">${tmp[i].publishedAt.substring(0,10)} </span>
                                <h5 class="card-title"><a href="${tmp[i].url}">${tmp[i].source.name}</a></h5>
                                <p>${tmp[i].title}</p>
                                <button class="btn btn-outline-dark main-detail" data-url="${tmp[i].url}" data-target="${tmp[i].title}">Go detail</button>
                            </div>
                        </div>
                    </div>
                `);
                result = "";
            }
            $(".main-detail").click(function() {
                console.log($(this)[0].dataset.target);
                console.log($(this)[0].dataset.url);
                getNextDetail($(this)[0].dataset.target, $(this)[0].dataset.url);
            });
        },
    );
}

const justTest = () => {
    $.get(
        "https://newsapi.org/v2/top-headlines?apiKey=c32f989c652240dcafaff00a9d107cd6", {
            // "country" : "ua",
            "sources": "nhl-news",
            "apiKey": "c32f989c652240dcafaff00a9d107cd6"
        },
        (data) => {
            console.log(data);
        }
    );
}







const source = (category) => {
    $.get(
        "http://newsapi.org/v2/sources", {
            "apiKey": "c32f989c652240dcafaff00a9d107cd6",
            "category": category
        },
        (data) => {
            let tmp = data.sources;
            for (let i = 0; i < 4; i++) {
                // console.log(tmp[i]);
                $("#input__sources-" + category).append(`
                    <div class="col-sm-6">
                      <div class="card">
                        <div class="card-body">
                          <p class="card-text">${tmp[i].description}</p>
                          <a href="${tmp[i].url}" class="btn btn-primary">Link</a>
                        </div>
                      </div>
                    </div>
                `);
            }
        }
    );
}


const getCategory = (param, value) => {
    $.ajax({
        url: "http://newsapi.org/v2/top-headlines?" + param + "=" + value,
        data: {
            "apiKey": "c32f989c652240dcafaff00a9d107cd6"
        }
    })
    .done(function(data) {
        console.log(data);
        let tmp = data.articles;
        for (let i in tmp) {
            if (tmp[i].urlToImage == null) {
                continue;
            } else {
                $(".category").append(`
                    <div class="col-md-6 detail-card">
                        <div class="card bg-dark text-white">
                          <img class="card-img" src="${tmp[i].urlToImage}" alt="Card image">
                          <div class="card-img-overlay">
                            <h5 class="card-title">${tmp[i].source.name}</h5>
                            <p class="card-text">${tmp[i].title}</p>
                            <p class="card-text">${tmp[i].publishedAt.substring(0,10)}</p>
                            <button class="btn btn-outline-light detail-link" data-url="${tmp[i].url}" data-target="${tmp[i].title}" >Detail</button>
                          </div>
                        </div>
                    </div>
                `);
            }
        }
        $(".btn.btn-outline-light.detail-link").click(function() {
            getNextDetail($(this)[0].dataset.target, $(this)[0].dataset.url);
        });
        $(".add-favorites").click(()=>{
            if (Cookies.get("favorites") == undefined) {
                Cookies.set("favorites",Cookies.get("favorites") + "?" + localStorage.value);
                Cookies.set("favorites-param",Cookies.get("favorites-param") + "?" + localStorage.param);
                $("#category-add").fadeIn("slow");
                setTimeout(($("#category-add").fadeOut("slow")),1000000);
            }else{
                if (Cookies.get("favorites").split("?").indexOf( localStorage.value ) == -1) {
                    Cookies.set("favorites",Cookies.get("favorites") + "?" + localStorage.value);
                    Cookies.set("favorites-param",Cookies.get("favorites-param") + "?" + localStorage.param);
                    $("#category-add").fadeIn("slow");
                    setTimeout(($("#category-add").fadeOut("slow")),1000000);
                }else{
                    console.log("Уже добвлено");
                    $("#alredy-add").fadeIn("slow");
                    setTimeout(($("#alredy-add").fadeOut("slow")),1000000);
                }
            }
        });
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("AAAAAa");
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
    })
};

const getDetail = (value) => {
    $.get(
        "http://newsapi.org/v2/everything", {
            "q": value,
            "apiKey": "c32f989c652240dcafaff00a9d107cd6"
        },
        (data) => {
            console.log("http://newsapi.org/v2/top-headlines?q=" + value);
            console.log(data);
            let tmp = data.articles[0];
            let result = tmp.urlToImage ? tmp.urlToImage : "//img/noImage.svg.png";
            $(".detail").append(`
                <div class="card mb-3">
                    <img src="${result}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3>${tmp.source.name}</h3>
                        <h5 class="card-title">${tmp.title}</h5>
                        <p class="card-text">${tmp.content}</p>
                        <p class="card-text">${tmp.author}</p>
                        <a href="${tmp.url}" class="btn btn-outline-dark">Go to website</a>
                    </div>
                    <div class="card-footer text-muted">${tmp.publishedAt}</div>
                </div>
            `);
        }
    );
}


const search = (value, sortBy) => {
    $.get(
        "http://newsapi.org/v2/everything", {
            // "country" : "us",
            "sortBy": sortBy,
            "pageSize": 100,
            "q": value,
            "apiKey": "c32f989c652240dcafaff00a9d107cd6"
        },
        (data) => {
            console.log(data);
            let tmp = data.articles;
            if (data.totalResults > 0) {
                let result = "";
                for (let i in tmp) {
                    result = tmp[i].urlToImage ? tmp[i].urlToImage : "//img/noImage.svg.png";
                    $(".popHere").append(`
                        <div class="col-md-3 col-12 headlines__card">
                            <div class="card">
                                <img class="card-img-top" src="${result}" alt="${tmp[i].source.name}">
                                <div class="card-body">
                                    <span class="headlines__time">${tmp[i].publishedAt.substring(0,10)} </span>
                                    <h5 class="card-title"><a href="${tmp[i].url}">${tmp[i].source.name}</a></h5>
                                    <p>${tmp[i].title}</p>
                                    <button href="#" class="btn btn-outline-dark main-detail" data-url="${tmp[i].url}" data-target="${tmp[i].title}">Go detail</button>
                                </div>
                            </div>
                        </div>
                    `);
                    result = "";
                }
            } else {
                $(".popHere").append(`<h1>ДАННЫХ НЕТ</h1>`);
            }
            $(".main-detail").click(function() {
                console.log($(this)[0].dataset.target);
                // getDetail($(this)[0].dataset.target);
                getNextDetail($(this)[0].dataset.target.substring(0, 15), $(this)[0].dataset.url);
                // console.log($(this)[0].dataset.target.substring(0,15));
                // getNextDetail($(this)[0].dataset.target.substring(0,15),$(this)[0].dataset.url);
            });
        },
    );
}


/** ПОИСК
 * ПОИСК
 * ПОИСК
 */
const find = (start) => {
    $.get(
        "http://newsapi.org/v2/everything", {
            "apiKey": "c32f989c652240dcafaff00a9d107cd6",
            "q": start,
        },
    ).done(function(start) {
        for (let show in start) {
            for (let i in start[show]) {
                if (start[show][i].title != undefined || start[show][i].title != null) {
                    mass.push(start[show][i].title);
                }
            }
        }
        console.log(mass);
        $(function() {
            mass
        });
        $("#searchUser").autocomplete({
            source: mass
        });
    })
};
