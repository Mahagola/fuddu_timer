function timeNow() {
    let time = new Date(),
        hrs = time.getHours(),
        min = time.getMinutes(),
        sec = time.getSeconds()
    document.getElementsByClassName("clock")[0].innerHTML = add0(hrs) + ":" + add0(min) + ":" + add0(sec)
    function add0(temp) {
        if (temp < 10) {
            temp = '0' + temp;
        }
        return temp;
    }
}
setInterval(timeNow, 1000)

function set_timer() {
    let gethr = parseInt(document.querySelector(".hr").value)*3600;
    let getmin =parseInt(document.querySelector(".min").value)*60;
    let getsec =parseInt(document.querySelector(".sec").value);
    let total_time=(gethr+getmin+getsec);
    setTimeout(() => {
        document.getElementById("timer_audio").play();
        document.querySelector(".hr").value = "0";
        document.querySelector(".min").value = "0";
        document.querySelector(".sec").value = "0";
    }, total_time*1000);
}