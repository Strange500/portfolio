
const galleryImages = [
    "url(public/FrontPage.png)",
    "url(public/Game.png)",
    "url(public/Game2.png)"]
let cpt = 0;



document.getElementsByClassName("galleryLeftBtn")[0].addEventListener("click", function(event) {
    cpt++;
    if(cpt >= galleryImages.length) {
        cpt = 0;
    }
    event.currentTarget.parentElement.style.backgroundImage = galleryImages[cpt];

});

document.getElementsByClassName("galleryRightBtn")[0].addEventListener("click", function(event) {
    cpt--;
    if(cpt < 0) {
        cpt = galleryImages.length - 1;
    }
    event.currentTarget.parentElement.style.backgroundImage = galleryImages[cpt];
});