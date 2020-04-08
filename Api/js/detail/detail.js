$(document).ready(() => {

    let getApi = new Promise(
        (resolve, reject) => {
            resolve(getDetail(getLocal("q")));
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
