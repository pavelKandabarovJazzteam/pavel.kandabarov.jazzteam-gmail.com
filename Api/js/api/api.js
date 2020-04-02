
/** //@Returns the length of the entered number
 * //@param {number} number Input number
 * //@return {number}
 */

 const headlineCountry = (iso) =>{
     $.get(
         "http://newsapi.org/v2/top-headlines",
         {
             "country" : iso,
             "apiKey" : "d0ab85c29c5545959dfd2c3d694e18ee"
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

let qwe = "";
const justTest = () =>{
    $.get(
        "https://newsapi.org/v2/top-headlines?apiKey=d0ab85c29c5545959dfd2c3d694e18ee",
        {
            // "country" : "ua",
            "sources" : "nhl-news",
            "apiKey" : "d0ab85c29c5545959dfd2c3d694e18ee"
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
            "country" : "ua",
            "pageSize" : 8,
            "apiKey" : "d0ab85c29c5545959dfd2c3d694e18ee"
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


const source = (category) =>{
    $.get(
        "http://newsapi.org/v2/sources",
        {
            "apiKey" : "d0ab85c29c5545959dfd2c3d694e18ee",
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
                          <h5 class="card-title">${tmp[i].name}</h5>
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


/** ПОИСК
 * ПОИСК
 * ПОИСК
 */
const find = (start) => {
    $.get(
        "http://newsapi.org/v2/everything",
            {
                "apiKey" : "d0ab85c29c5545959dfd2c3d694e18ee",
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
