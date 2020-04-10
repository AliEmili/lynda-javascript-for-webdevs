(function() {
"use strict";

var state = document.getElementById('s-state');

document.addEventListener('DOMContentLoaded',function(){
    var btnEstimate=document.getElementById('btn-estimate');

    btnEstimate.setdisable=false;

    state.addEventListener('change',function(){
       if(state.value===''){
           btnEstimate.desabled=true;
       }else{
           btnEstimate.setdisable=false;
       }
    });

});




})();