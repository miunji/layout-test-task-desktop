/*
let timeMore = document.getElementById("time-more");
let timeBlock = document.getElementsByClassName("time-block");

timeMore.onclick = function() {
    timeMore.style.display = "none";
    
    for (i = 0; i < timeBlock.length; i++) {
        timeBlock[i].style.display = "block";
    }
}
*/

$("#time-more").click(function() {
    $("#time-more").css({ display: "none" });
    $(".time-block").css({ display: "block" });
});
