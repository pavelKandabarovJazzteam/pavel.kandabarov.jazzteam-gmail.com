$(document).ready(function() {

    let getApi = new Promise(
        function(resolve, reject) {
            resolve(getDetail(localStorage.q));
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
                $(".detail").append(`
                <div class="card mb-3">
                    <h1>Something went wrong</h1>
                </div>
            `);
                console.log(error.message);
            });
    };
    runPromise();
});
