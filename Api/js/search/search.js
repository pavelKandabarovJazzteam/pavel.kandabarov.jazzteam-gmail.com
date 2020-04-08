$(document).ready(() => {

    let getApi = new Promise(
        (resolve, reject) => {
            resolve(search(getLocal("search")));
        }
    );
    let hideLoader = () => {
        return new Promise(
            (resolve, reject) => {
                resolve($('#loader').hide());
            }
        );
    };
    let runPromise = () => {
        getApi
            .then(setTimeout(hideLoader, 2000))
            .catch((error) => {
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
