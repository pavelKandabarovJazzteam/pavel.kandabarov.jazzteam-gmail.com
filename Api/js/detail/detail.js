$(document).ready(function(){

    let willIGetNewPhone = new Promise(
        function (resolve, reject) {
            resolve(getDetail(localStorage.q));
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
        .then(setTimeout(showOff,1000))
        .catch(function (error) {
            console.log(error.message);
        });
    };
    askMom();
});
