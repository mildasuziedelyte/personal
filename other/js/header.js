function headerEvents(){
    addEventListener('scroll', () => {
        if (scrollY > 70) {
            document.querySelector('header').classList.add('scroll');
            document.querySelector('nav').classList.add('nav-scroll');
            // document.querySelector('.info-container').classList.add('info-scroll');
            // if(document.querySelector('nav').classList.contains('nav-show')){
            //     document.querySelector('nav').classList.remove('nav-show');
            //     document.querySelector('.header-burger').classList.remove("change")
            //     document.querySelector('.info-container').classList.remove('info-scroll');
            // }
        } else {
            document.querySelector('header').classList.remove('scroll');
            document.querySelector('nav').classList.remove('nav-scroll');
            // document.querySelector('.info-container').classList.remove('info-scroll');
        }
    })
}

export { headerEvents };