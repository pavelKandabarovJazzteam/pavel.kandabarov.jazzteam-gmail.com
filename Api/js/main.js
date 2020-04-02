let mass = [];
$(document).ready(function(){
    headline();
    source("technology");
    source("sports");
    source("science");
    source("general");
    justTest();
    $('#searchUser').on('keyup', function(e){
        let search = e.target.value;
        find(search);
    });
    $(".badge.badge-dark").click((e)=>{
        console.log($(this)[0].activeElement.text);
    });
});
