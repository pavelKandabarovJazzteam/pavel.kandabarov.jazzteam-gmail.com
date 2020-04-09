/** //@Returns the length of the entered number
 * //@param {number} number Input number
 * //@return {number}
 */
const APIKEY = "c32f989c652240dcafaff00a9d107cd6";
const EVERYTHING = "http://newsapi.org/v2/everything";
const HEADLINES = "http://newsapi.org/v2/top-headlines";
const SOURCES = "http://newsapi.org/v2/sources";
const NO_IMAGE = "/img/noImage.svg.png";



$('#searchUser').on('keyup', (e) => {
    let search = e.target.value;
    find(search);
});
$(".goSearch").click(function(e) {
    localStorage.setItem("search", $('#searchUser').val());
});


const getNextDetail = (value, url) => {
    $.get(
        EVERYTHING, {
            "q": value,
            "apiKey": APIKEY
        },
        (data) => {
            if (data.totalResults > 0) {
                document.location.href = "/public/detail";
                localStorage.setItem("q", value);
            } else {
                document.location.href = url;
            }
        }
    )
}

const getDetail = (value) => {
    $.get(
        EVERYTHING, {
            "q": value,
            "apiKey": APIKEY
        },
        (data) => {
            if (data.totalResults > 0) {
                let tmp = data.articles[0];
                let result = tmp.urlToImage ? tmp.urlToImage : NO_IMAGE;
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
            } else {
                $(".detail").append(`
                    <div class="card mb-3">
                        <h1>SERVER WAS BROKEN</h1>
                    </div>
                `);
            }

        }
    );
}
const getHedline = () => {
    $.get(
        HEADLINES, {
            "country": "us",
            "pageSize": 8,
            "apiKey": APIKEY
        },
        (data) => {
            if (data.totalResults > 0) {
                let tmp = data.articles;
                let result = "";
                for (let i in tmp) {
                    result = tmp[i].urlToImage ? tmp[i].urlToImage : NO_IMAGE;
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
                    getNextDetail($(this)[0].dataset.target, $(this)[0].dataset.url);
                });
            } else {
                $("#input-headlines").append(`
                    <div class="col-md-3 col-12 headlines__card">
                        <h1>SERVER WAS BROKEN</h1>
                    </div>
                `);
            }
        }
    )
}


const getSource = (category) => {
    $.get(
        SOURCES, {
            "apiKey": APIKEY,
            "category": category
        },
        (data) => {
            if (data.status == "ok") {
                let tmp = data.sources;
                for (let i = 0; i < 4; i++) {
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
            } else {
                $("#input__sources-" + category).append(`
                    <div class="col-sm-6">
                        <h1>SERVER WAS BROKEN</h1>
                    </div>
                `);
            }
        }
    );
}


const getCategory = (param, value) => {
    $.ajax({
            url: HEADLINES + "?" + param + "=" + value,
            data: {
                "apiKey": APIKEY
            }
        })
        .done((data) => {
            let tmp = data.articles;
            let result = "";
            if (data.totalResults > 0) {
                for (let i in tmp) {
                    if (tmp[i].urlToImage == "null" || tmp[i].urlToImage == null || tmp[i].urlToImage == "") {
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
                $(".add-favorites").click(function() {
                    if (getCookie("favorites") == undefined) {
                        setCookie("favorites", getCookie("favorites") + "?" + getLocal("value"));
                        setCookie("favorites-param", getCookie("favorites-param") + "?" + getLocal("param"));
                        $("#category-add").fadeIn("slow");
                        setTimeout(($("#category-add").fadeOut("slow")), 1000000);
                    } else {
                        if (getCookie("favorites").split("?").indexOf(getLocal(value)) == -1) {
                            setCookie("favorites", getCookie("favorites") + "?" + getLocal("value"));
                            setCookie("favorites-param", getCookie("favorites-param") + "?" + getLocal("param"));
                            $("#category-add").fadeIn("slow");
                            setTimeout(($("#category-add").fadeOut("slow")), 1000000);
                        } else {
                            $("#alredy-add").fadeIn("slow");
                            setTimeout(($("#alredy-add").fadeOut("slow")), 1000000);
                        }
                    }
                });
            } else {
                $(".category").append(`
                <div class="col-md-6 detail-card">
                    <h1>SERVER WAS BROKEN</h1>
                </div>
            `);
            }

        })
};




const search = (value, sortBy) => {
    $.get(
        EVERYTHING, {
            "sortBy": sortBy,
            "pageSize": 100,
            "q": value,
            "apiKey": APIKEY
        },
        (data) => {
            let tmp = data.articles;
            if (data.totalResults > 0) {
                let result = "";
                for (let i in tmp) {
                    result = tmp[i].urlToImage ? tmp[i].urlToImage : NO_IMAGE;
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
                $(".popHere").append(`<h1>NOT FOUND</h1>`);
            }
            $(".main-detail").click( function() {
                getNextDetail($(this)[0].dataset.target, $(this)[0].dataset.url);
            });
        },
    );
}


/** ПОИСК
 */
const find = (start) => {
    $.get(
        EVERYTHING, {
            "apiKey": APIKEY,
            "q": start,
        },
    ).done((start) => {
        let mass = [];
        for (let show in start) {
            for (let i in start[show]) {
                if (start[show][i].title != undefined || start[show][i].title != null) {
                    mass.push(start[show][i].title);
                }
            }
        }
        $(() => {
            mass
        });
        $("#searchUser").autocomplete({
            source: mass
        });
    })
};
