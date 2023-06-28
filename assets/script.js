var iconShare = document.getElementById("iconShare");
var pathIconShare = document.getElementById("pathIconShare");
var itemsShare = document.getElementById("itemsShare");
var avatar = document.getElementById("avatar");
var nameAndDate = document.getElementById("nameDate");
var check = false;
var width;

iconShare.addEventListener("click", function() {
    width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (width > 725 && check === false) {
        iconShare.style.background = "#698199";
        pathIconShare.style.fill = "rgb(255, 255, 255)";
        itemsShare.style.visibility = "visible";
        check = true;
    }else if(width <= 725 && check === false){
        avatar.style.display = "none";
        nameAndDate.style.display = "none";
        pathIconShare.style.fill = "rgb(255, 255, 255)";
        iconShare.style.background = "#698199";
        itemsShare.style.visibility = "visible";
        check = true;
    }else if (width <= 725 && check === true){
        avatar.style.display = "block";
        nameAndDate.style.display = "block";
        iconShare.style.background = "hsl(210, 46%, 95%)";
        pathIconShare.style.fill = "#6E8098";
        itemsShare.style.visibility = "hidden";
        check = false;
    }else if (width > 725 && check === true){
        iconShare.style.background = "hsl(210, 46%, 95%)";
        pathIconShare.style.fill = "#6E8098";
        itemsShare.style.visibility = "hidden";
        check = false;
    }
});