$(document).ready(function(){
    function test(){
        let m = moment();
        m.subtract({
            "hours" : sessionStorage.getItem("hours"),
            "minutes" : sessionStorage.getItem("minutes"),
            "seconds" : sessionStorage.getItem("second"),
        });
        $(".time").text(m.toString().substr(16, 8))
    }
    setInterval(test, 1000);
});
