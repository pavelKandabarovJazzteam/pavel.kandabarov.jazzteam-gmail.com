
$(document).ready(function(){
    $(".category").click(function(){
        console.log($(this)[0].innerText);
        console.log($(this)[0].classList[2]);
        document.location.href = "file:///D:/JazzTeam/Bicycle/Api/pages/headlines/detail.html";
        localStorage.setItem("param",$(this)[0].classList[2]);
        localStorage.setItem("value",$(this)[0].innerText);
    })
    $(".country").click(function(){
        console.log($(this)[0].innerText);
        localStorage.setItem("param",$(this)[0].classList[2]);
        localStorage.setItem("value",$(this)[0].innerText);
        document.location.href = "file:///D:/JazzTeam/Bicycle/Api/pages/headlines/detail.html";
    })
    $(".sources").click(function(){
        console.log($(this)[0].innerText);
        localStorage.setItem("param",$(this)[0].classList[2]);
        localStorage.setItem("value",$(this)[0].innerText);
        document.location.href = "file:///D:/JazzTeam/Bicycle/Api/pages/headlines/detail.html";
    })
});

const detail = (param, value) =>{
    $.get(
        "http://newsapi.org/v2/top-headlines?"+param + "=" +value,
        {
            // param : value,
            "apiKey" : "d0ab85c29c5545959dfd2c3d694e18ee"
        },
        (data) =>{
            console.log(data);
            let tmp = data.articles;
            for( let i in tmp){
                $(".detail").append(`
                    <div class="col-md-6">
                        <div class="card bg-dark text-white">
                          <img class="card-img" src="${tmp[i].urlToImage}" alt="Card image">
                          <div class="card-img-overlay">
                            <h5 class="card-title">${tmp[i].source.name}</h5>
                            <p class="card-text">${tmp[i].title}</p>
                            <p class="card-text">Last updated 3 mins ago</p>
                          </div>
                        </div>
                    </div>
                `);
            }
        }
    );
}
// const headlineCountry = (iso) =>{
//     $.get(
//         "http://newsapi.org/v2/top-headlines",
//         {
//             "country" : iso,
//             "apiKey" : "dd9a8c5837fd4204a014214106de16f0"
//         },
//         (data) =>{
//             let tmp = data.articles;
//             for( let i in tmp){
//                 $("#input-headlines").append(`
//                     <div class="col-md-3 col-12 headlines__card">
//                         <div class="card">
//                             <img class="card-img-top" src="${tmp[i].urlToImage}" alt="Card image cap">
//                             <div class="card-body">
//                                 <span class="headlines__time">${tmp[i].publishedAt.substring(0,10)} </span>
//                                 <h5 class="card-title"><a href="${tmp[i].url}">${tmp[i].source.name}</a></h5>
//                                 <p>${tmp[i].title}</p>
//                             </div>
//                         </div>
//                     </div>
//                 `);
//             }
//         }
//     );
// }
