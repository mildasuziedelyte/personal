function nav(){

    const nav = document.querySelectorAll('nav > a');

    nav.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.classList.add('nav-hover');
            nav.forEach(link => {
                link.style.opacity="0.7"
            })
            link.style.opacity="1";

        })  
       link.addEventListener("mouseout", () => {
            link.classList.remove('nav-hover');
            nav.forEach(link => {
                link.style.opacity="1"
            })
            // link.style.opacity="1";

        })  

    })

}

export { nav };