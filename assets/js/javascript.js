function menuShow() {
    let menuMobile = document.querySelector(".header-ul_mobile")
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
    } else {
        menuMobile.classList.add('open')
    }
    
}