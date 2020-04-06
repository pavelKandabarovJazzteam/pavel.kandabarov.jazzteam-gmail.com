$(document).ready(function(){
    console.log(localStorage);

    let willIGetNewPhone = new Promise(
        function (resolve, reject) {
            resolve(getCategory(localStorage.param, localStorage.value));
        }
    );
    let showOff = function () {
        return new Promise(
            function (resolve, reject) {
                resolve($('#loader').hide());
            }
        );
    };
    let askMom = function () {
        willIGetNewPhone
        .then(setTimeout(showOff,1500))
        .catch(function (error) {
            console.log(error.message);
        });
    };
    askMom();
});
