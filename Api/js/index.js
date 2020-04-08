$(document).ready(function() {
    getSource("technology");
    getSource("sports");
    getSource("science");
    getSource("general");
    let now = moment();
    if (sessionStorage.length == 0) {
        sessionStorage.setItem("hours", now.hours());
        sessionStorage.setItem("minutes", now.minutes());
        sessionStorage.setItem("second", now.second());
    }
});

let getApi = new Promise(
    function(resolve, reject) {
        resolve(getHedline());
    }
);
let hideLoader = function() {
    return new Promise(
        function(resolve, reject) {
            resolve($('#loader').hide());
        }
    );
};
let runPromise = function() {
    getApi
        .then(setTimeout(hideLoader, 2000))
        .catch(function(error) {
            $("#input-headlines").append(`
                <div class="col-md-3 col-12 headlines__card">
                    <h1>Something went wrong</h1>
                </div>
            `);
            console.log(error.message);
        });
};
runPromise();
