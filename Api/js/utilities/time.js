$(document).ready(() => {
    let timer = () => {
        let now = moment();
        now.subtract({
            "hours": sessionStorage.getItem("hours"),
            "minutes": sessionStorage.getItem("minutes"),
            "seconds": sessionStorage.getItem("second"),
        }).format('HH:mm:ss');
        $(".time").text(now.format('HH:mm:ss').toString());
    }
    setInterval(timer, 1000);
});
