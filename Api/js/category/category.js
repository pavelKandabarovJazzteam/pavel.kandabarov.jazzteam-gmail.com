$(document).ready(() => {

    let getApi = new Promise(
        (resolve, reject) => {
            resolve(getCategory(getLocal("param"), getLocal("value")));
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
            .then(setTimeout(hideLoader, 2500))
            .catch((error) => {
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
