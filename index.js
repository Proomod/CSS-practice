const changingdiv = document.querySelectorAll('.share__border')
const contact = document.querySelector('.contact')
const lastGaroKaam = document.querySelector('.share__content')
const shareContent = document.querySelector('.share__content__box')

function changecontent(e) {
    // const image = contact.firstElementChild
    contact.style.display = (contact.style.display === "none") ? "flex" : "none";
    shareContent.style.display = (shareContent.style.display === "flex") ? "none" : "flex"
    if (shareContent.style.display === "flex") {
        lastGaroKaam.style.cssText = "--pseudo-class-color: #48556a";
    }
    else {
        lastGaroKaam.style.cssText = "--pseudo-class-color: transparent";
    }

    contact.classList.toggle('changing__contact')
}

let mql = window.matchMedia('(min-width: 815px)');
if (mql.matches) {
    changingdiv[1].classList.add('share__border_desktop')

}

changingdiv.forEach(div => div.addEventListener('click', changecontent))