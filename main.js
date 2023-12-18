"use strict";
// navbar animation
const headerLinks = document.querySelectorAll(".headerLinks");
const footerLinks = document.querySelectorAll(".footerLinks");
// header links

headerLinks.forEach(function(e,index){
    e.onclick = function(){
        let idx = index;
        headerLinks.forEach(function(e){
            e.classList.remove("active");
        });
        footerLinks.forEach(function(e){
            e.classList.remove("active");
        })
        this.classList.add("active");
        footerLinks[idx].classList.add("active");
    }
});

// footer links

footerLinks.forEach(function(e,index){
    let idx = index;
    e.onclick = function(){
        footerLinks.forEach(function(e){
            e.classList.remove("active");
        });
        headerLinks.forEach(function(e){
            e.classList.remove("active");
        });
        this.classList.add("active");
        headerLinks[idx].classList.add("active");
    }
})

// cards animation
const iconViewMore = document.querySelectorAll(".iconViewMore");
const viewMoreBtn = document.querySelectorAll(".viewMoreBtn");
let tab = [];
viewMoreBtn.forEach(function (e, index) {
    const cards = document.querySelectorAll(`.card:nth-child(${index + 1}) .info > .miniCards > .card`);
    const hideCards = document.querySelectorAll(".miniCards > .card");
    e.onclick = function () {
        if (index != tab[0]) {
            //organize showing and hiding cards
            hideCards.forEach(function (e) {
                e.classList.add("hide");
            });
            iconViewMore.forEach(function(e){
                e.classList.add("plus");
            })
        }   
        tab.shift();
        tab.push(index);
        //showing and hiding cards
        cards.forEach(function (e) {
            e.classList.toggle("hide");
        });
        iconViewMore[index].classList.toggle("plus");
   
    };
});
iconViewMore.forEach(function(e,index){
    e.onclick = function(){
        viewMoreBtn[index].click();
    }
});
let getImageSrc1 =  document.getElementById("url1");

let getImageSrc2 =  document.getElementById("url2");

function getUrl (Elm){
    let computeStyle = getComputedStyle(Elm);

    let backgroundImage = computeStyle.getPropertyValue("background-image");
    let imageUrl = backgroundImage.match(/url\("?(https?:\/\/[^"]+)"?\)/i);
    if(imageUrl){
        return imageUrl[1];
    }   
}

function exchangingRols(ele1,ele2,url1,url2){
 ele1.style.backgroundImage = `url("${url2}")`;
 ele2.style.backgroundImage = `url("${url1}")`;
}

let imageCards = document.querySelectorAll(".miniCards  .boxImage");

let mainImages = document.querySelectorAll(`.products > .cards > .card > .boxImage`);

    imageCards.forEach(function(e){
        e.onclick = function(){
           exchangingRols(mainImages[tab[0]],e,getUrl(mainImages[tab[0]]),getUrl(e))
        }
    })

const btnUp = document.querySelector(".btnUp");
window.onscroll = function(){
    window.scrollY >= 700 ? btnUp.classList.add("show") : btnUp.classList.remove("show");
}

btnUp.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

// loader
window.addEventListener("load",function(){
    document.querySelector(".loader").remove();

});