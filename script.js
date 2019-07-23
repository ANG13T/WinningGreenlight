window.onscroll = function(){
    stick();
};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function stick(){
    console.log("scroll stick")
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }
else{
         if(navbar.classList.contains("sticky"))
         {
            navbar.classList.remove("sticky");
         }
    }
}