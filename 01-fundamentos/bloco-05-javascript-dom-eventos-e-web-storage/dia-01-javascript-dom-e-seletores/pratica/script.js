let x = document.getElementById("container");
    x.style.backgroundColor = "gray";
document.getElementById("header-container").style.backgroundColor = "green";
document.getElementById("footer-container").style.backgroundColor = "Aquamarine";

let y = document.getElementsByClassName("emergency-tasks");
y[0].style.backgroundColor = "#E9967A";

document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "#ffcc00";

let xa = document.querySelectorAll(".emergency-tasks h3");
    let i = 0;
    for (i = 0; i < xa.length; i += 1){
        xa[i].style.backgroundColor = "#663399";        
    }
let ya = document.querySelectorAll(".no-emergency-tasks h3");
    let ia = 0;
    for (ia = 0; ia < ya.length; ia += 1){
        ya[ia].style.backgroundColor = "black";        
    }