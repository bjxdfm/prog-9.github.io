"use strict";

window.addEventListener("DOMContentLoaded",
    function(){
        // 

        //
        let popMessage="いらっしゃい！おみくじ引いてって！";
        window.alert(popMessage);
    },false
);

const btn1=document.getElementById("btn1")
btn1.addEventListener("click",
    function(){
        let n =Math.floor(Math.random()*3);

        switch (n){
            case 0:
                btn1.textContent="大吉！!";
                btn1.style.color="#ff0000";
                break;
            case 1:
                btn1.textContent="吉！";
                btn1.style.color="#fff001";
                break;
            case 2:
                btn1.textContent="末吉...";
                btn1.style.color="#261e1c";
                break;    

        }
    },false
);
