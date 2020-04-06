$(document).ready(function(){
    source("technology");
    source("sports");
    source("science");
    source("general");
    let m = moment();
    if (sessionStorage.length == 0) {
        sessionStorage.setItem("hours",m.hours());
        sessionStorage.setItem("minutes",m.minutes());
        sessionStorage.setItem("second",m.second());
    }
});


let willIGetNewPhone = new Promise(
    function (resolve, reject) {
        resolve(headline());
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
