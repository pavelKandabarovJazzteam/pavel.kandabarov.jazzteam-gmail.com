$(document).ready(function() {

    let getApi = new Promise(
        function(resolve, reject) {
            resolve(getCategory(getLocal("param"), getLocal("value")));
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
            .then(setTimeout(hideLoader, 2500))
            .catch(function(error) {
                $(".category").append(`
                <div class="col-md-6 detail-card">
                    <h1>Something went wrong</h1>
                </div>
            `);
                console.log(error.message);
            });
    };
    runPromise();
});
