function burgerTransitions () {

    let sandwichIcon = document.querySelector(".header-burger")
    const mobileNavBar = document.querySelector(".nav");
    let burgerBars = document.querySelectorAll('.burger');

    sandwichIcon.addEventListener("click", () => {
        if(!mobileNavBar.classList.contains('nav-show')){
            mobileNavBar.classList.add('nav-show');
            sandwichIcon.classList.add("change");
            document.querySelector('.info-container').classList.add('info-scroll');
        } else {
            mobileNavBar.classList.remove('nav-show');
            sandwichIcon.classList.remove("change")
            document.querySelector('.info-container').classList.remove('info-scroll');
        }
    })

    window.onclick = function(event) {
        if (event.target != sandwichIcon && event.target != burgerBars[0] && event.target != burgerBars[1] && event.target != burgerBars[2]) {
            if(mobileNavBar.classList.contains('nav-show')){
                mobileNavBar.classList.remove('nav-show');
                sandwichIcon.classList.remove("change")
                document.querySelector('.info-container').classList.remove('info-scroll');
            }
        } 
    }
}

export { burgerTransitions };
