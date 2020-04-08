$(document).ready(() => {
    getSource("technology");
    getSource("sports");
    getSource("science");
    getSource("general");
    let now = moment();
    if (sessionStorage.length == 0) {
        setSession("hours", now.hours());
        setSession("minutes", now.minutes());
        setSession("second", now.second());
    }
});

let getApi = new Promise(
    (resolve, reject) => {
        resolve(getHedline());
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
            $("#input-headlines").append(`
                <div class="col-md-3 col-12 headlines__card">
                    <h1>Something went wrong</h1>
                </div>
            `);
            console.log(error.message);
        });
};
runPromise();
