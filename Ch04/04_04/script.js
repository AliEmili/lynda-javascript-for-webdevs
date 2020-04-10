(function(){
'use strict';
var c=document.getElementById('current-time');

setInterval(updateTime,1000);

function updateTime(){
    var d=new Date();
    var month=d.getMonth();
    var monthName='';
    switch(month){
        case 0:monthName='January';
            break;
        case 1:monthName='February';
            break;
        case 2:monthName='March';
            break;
        case 3:monthName='April';
            break;
        case 4:monthName='May';
            break;
        case 5:monthName='June';
            break;
        case 6:monthName='July';
            break;
        case 7:monthName='August';
            break;
        case 8:monthName='September';
            break;
        case 9:monthName='October';
            break;
        case 10:monthName='November';
            break;
        case 11:monthName='December';
            break;

    }


    var hours=d.getHours();
    if(hours>12){
        hours-=12;
    }
    var sepration=':';
    if(d.getSeconds()%2===1) sepration=' ';

    c.innerHTML=monthName+' '+d.getDate()+' '+hours+sepration+d.getMinutes();
}


})();