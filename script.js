let cats = document.getElementById("cats")
var container = document.querySelector(".container");
var video = document.querySelector(".cats video")

container.addEventListener('click', function(){
    if(!container.classList.contains('anim')){
        container.classList.add('anim');
        video.play();
    }
    cats.style.visibility = "visible";
});

video.addEventListener("ended", function(){
    container.classList.remove("anim");
    cats.style.visibility = "hidden";
});
