var upvote = 0;
var uplabel = document.getElementById("uplabel");

function upclick(){
    upvote++;
    uplabel.setInnerHTML(upvote);
}


const bigRobot = document.getElementById("bigimg");

bigRobot.addEventListener("click", ()=>{
    window.location.href = "project.html";
});





