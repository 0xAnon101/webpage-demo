document.getElementById("femail").onfocus= function() {changeColor() };
document.getElementById("fpass").onfocus= function() {changeColor() };



function changeColor() {
    var x = document.getElementById("second-content");
    x.style.backgroundColor = "rgba(0,0,0,0.7)";
}

