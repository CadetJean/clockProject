function realTimeClock(){
    var rtClock=new Date();
    var hours=rtClock.getHours();
    var minutes=rtClock.getMinutes();
    var second=rtClock.getSeconds();

    //add AM and PM 
    var amPm=(hours<12)? "AM" : "PM";

    //covert the hours component to 12hr format
    hours=(hours>12)? hours-12: hours;

    //pad the hours, minute and second with leading zero
    hours=("0"+hours).slice(-2);
    minutes=("0"+minutes).slice(-2);
    second=("0"+second).slice(-2);

    //display our clock with
    document.getElementById('clock').innerHTML = 
    hours+" : "+minutes+" : "+second+" "+amPm;

    var t=setTimeout(realTimeClock,500);


}