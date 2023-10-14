var hr=0;
var min=0;
var sec=0;
var ms=0;
var timer=false;
function start(){
  timer=true;
  stopwatch();
}
function stop(){
    timer=false;
}
function reset(){
    timer=false;
    hrString="00";
    minString="00";
    secString="00";
    msString="00";
    document.getElementById("ms").innerHTML=msString;
    document.getElementById("sec").innerHTML=secString;
    document.getElementById("min").innerHTML=minString;
    document.getElementById("hr").innerHTML=hrString;
}
function stopwatch(){
    var hrString=hr;
    var minString=min;
    var secString=sec;
    var msString=ms;

    if(timer==true)
    {
        if(hr<10)
        {
            hrString="0"+hrString;
        }
        if(min<10)
        {
            minString="0"+minString;
        }
        if(sec<10)
        {
            secString="0"+secString;
        }
        if(ms<10)
        {
            msString="0"+msString;
        }
        ms=ms+1;
        if(ms>=60)
        {
            sec=sec+1;
            ms=0;
        }
        if(sec>=60)
        {
            min=min+1;
            sec=0;
        }
        if(min>=60)
        {
            hr=hr+1;
            min=0;
        }
        document.getElementById("ms").innerHTML=msString;
        document.getElementById("sec").innerHTML=secString;
        document.getElementById("min").innerHTML=minString;
        document.getElementById("hr").innerHTML=hrString;
        setTimeout("stopwatch()",10);
    }
}