
/** //@Returns the length of the entered number
 * //@param {number} number Input number
 * //@return {number}
 */

 const headlineCountry = (iso) =>{
     $.get(
         "http://newsapi.org/v2/top-headlines",
         {
             "country" : iso,
             "apiKey" : "10088b3c23004175aceb39a41134a6f7"
         },
         (data) =>{
             let tmp = data.articles;
             for( let i in tmp){
                 $("#input-headlines").append(`
                     <div class="col-md-3 col-12 headlines__card">
                         <div class="card">
                             <img class="card-img-top" src="${tmp[i].urlToImage}" alt="Card image cap">
                             <div class="card-body">
                                 <span class="headlines__time">${tmp[i].publishedAt.substring(0,10)} </span>
                                 <h5 class="card-title"><a href="${tmp[i].url}">${tmp[i].source.name}</a></h5>
                                 <p>${tmp[i].title}</p>
                             </div>
                         </div>
                     </div>
                 `);
             }
         }
     );
 }

// let qwe = "";
const getNextDetail = (value, url) =>{
    $.get(
        "http://newsapi.org/v2/everything",
        {
            "q" : value,
            "apiKey" : "10088b3c23004175aceb39a41134a6f7"
        },
        (data) =>{
            console.log(data.totalResults);
            if (data.totalResults > 0) {
                document.location.href = "file:///D:/JazzTeam/Bicycle/Api/pages/headlines/detail.html";
                localStorage.setItem("q",value);
            }else{
                document.location.href = url;
            }
        }
    )
}
const justTest = () =>{
    $.get(
        "https://newsapi.org/v2/top-headlines?apiKey=10088b3c23004175aceb39a41134a6f7",
        {
            // "country" : "ua",
            "sources" : "nhl-news",
            "apiKey" : "10088b3c23004175aceb39a41134a6f7"
        },
        (data) =>{
            console.log(data);
        }
    );
}

const headline = () =>{
    $.get(
        "http://newsapi.org/v2/top-headlines",
        {
            "country" : "us",
            "pageSize" : 8,
            "apiKey" : "10088b3c23004175aceb39a41134a6f7"
        },
        (data) =>{
            console.log(data);
            let tmp = data.articles;
            for( let i in tmp){
                $("#input-headlines").append(`
                    <div class="col-md-3 col-12 headlines__card">
                        <div class="card">
                            <img class="card-img-top" src="${tmp[i].urlToImage}" alt="${tmp[i].source.name}">
                            <div class="card-body">
                                <span class="headlines__time">${tmp[i].publishedAt.substring(0,10)} </span>
                                <h5 class="card-title"><a href="${tmp[i].url}">${tmp[i].source.name}</a></h5>
                                <p>${tmp[i].title}</p>
                                <button href="#" class="btn btn-outline-dark main-detail" data-url="${tmp[i].url}" data-target="${tmp[i].title}">Go detail</button>
                            </div>
                        </div>
                    </div>
                `);
            }
            $(".main-detail").click(function(){
                // console.log($(this)[0].dataset.target.substring(0,15));
                getNextDetail($(this)[0].dataset.target.substring(0,15),$(this)[0].dataset.url);
            });
        },
    );
}

const search = (value) =>{
    $.get(
        "http://newsapi.org/v2/everything",
        {
            // "country" : "us",
            "pageSize" : 100,
            "q" : value,
            "apiKey" : "10088b3c23004175aceb39a41134a6f7"
        },
        (data) =>{
            console.log(data);
            let tmp = data.articles;
            if (data.totalResults > 0) {
                for( let i in tmp){
                    $(".popHere").append(`
                        <div class="col-md-3 col-12 headlines__card">
                            <div class="card">
                                <img class="card-img-top" src="${tmp[i].urlToImage}" alt="${tmp[i].source.name}">
                                <div class="card-body">
                                    <span class="headlines__time">${tmp[i].publishedAt.substring(0,10)} </span>
                                    <h5 class="card-title"><a href="${tmp[i].url}">${tmp[i].source.name}</a></h5>
                                    <p>${tmp[i].title}</p>
                                    <button href="#" class="btn btn-outline-dark main-detail" data-url="${tmp[i].url}" data-target="${tmp[i].title}">Go detail</button>
                                </div>
                            </div>
                        </div>
                    `);
                }
            }else{
                $(".popHere").append(`<h1>ДАННЫХ НЕТ</h1>`);
            }
            $(".main-detail").click(function(){
                console.log($(this)[0].dataset.target.substring(0,15));
                // console.log($(this)[0].dataset.target.substring(0,15));
                // getNextDetail($(this)[0].dataset.target.substring(0,15),$(this)[0].dataset.url);
            });
        },
    );
}




const source = (category) =>{
    $.get(
        "http://newsapi.org/v2/sources",
        {
            "apiKey" : "10088b3c23004175aceb39a41134a6f7",
            "category" :category
        },
        (data) =>{
            let tmp = data.sources;
            for (let i = 0; i < 4; i++) {
                console.log(tmp[i]);
                $("#input__sources-"+category).append(`
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


const getCategory = (param, value) =>{
    $.get(
        "http://newsapi.org/v2/top-headlines?"+param + "=" +value,
        {
            "apiKey" : "10088b3c23004175aceb39a41134a6f7"
        },
        (data) =>{
            console.log(data);
            let tmp = data.articles;
            for( let i in tmp){
                if (tmp[i].urlToImage == null) {
                    continue;
                }else{
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
            $(".btn.btn-outline-light.detail-link").click(function(){
                getNextDetail($(this)[0].dataset.target.substring(0,15),$(this)[0].dataset.url);
            });
        }
    );
}

const getDetail = (value) =>{
    $.get(
        "http://newsapi.org/v2/top-headlines",
        {
            "q" : value,
            "apiKey" : "10088b3c23004175aceb39a41134a6f7"
        },
        (data) =>{
            console.log("http://newsapi.org/v2/top-headlines?q="+value);
            console.log(data);
            let tmp = data.articles[0];
            $(".detail").append(`
                <div class="card mb-3">
                    <img src="${tmp.urlToImage}" class="card-img-top" alt="...">
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


/** ПОИСК
 * ПОИСК
 * ПОИСК
 */
const find = (start) => {
    $.get(
        "http://newsapi.org/v2/everything",
            {
                "apiKey" : "10088b3c23004175aceb39a41134a6f7",
                "q" : start,
            },
    ).done(function(start) {
        for (let show in start) {
            for(let i in start[show]){
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
