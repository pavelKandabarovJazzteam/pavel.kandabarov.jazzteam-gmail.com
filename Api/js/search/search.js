$(document).ready(function() {

    let getApi = new Promise(
        function(resolve, reject) {
            resolve(search(getLocal("search")));
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
                $(".popHere").append(`<h1>NOT FOUND</h1>`);
                console.log(error.message);
            });
    };
    runPromise();
    $("#sortBy").change(() => {
        $('#loader').show();
        $(".row.popHere").empty();
        search(getLocal("search"), $("#sortBy").val())
        setTimeout(hideLoader, 2500)
    })

});
