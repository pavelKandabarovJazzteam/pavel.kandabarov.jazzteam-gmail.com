let mass = [];
$(document).ready(function(){
    // headline();
    source("technology");
    source("sports");
    source("science");
    source("general");
    // justTest();
    $('#searchUser').on('keyup', function(e){
        let search = e.target.value;
        console.log(search);
        find(search);
    });
    $(".goSearch").click((e)=>{
        // e.preventDefault();
        // console.log($('#searchUser').val());
        localStorage.setItem("search",$('#searchUser').val());
    });
    // $('.myForm').submit();
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
