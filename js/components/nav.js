function nav(){

    const nav = document.querySelectorAll('nav > a');

    // document.getElementById("and").addEventListener("mouseover", () => {
    //     document.getElementById("and").style.opacity="0.7"
    // })

    // document.getElementById("and").addEventListener("mouseout", () => {
    //     document.getElementById("and").style.opacity="1"
    // })

    nav.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.classList.add("nav-hover");
            nav.forEach(link => {
                link.style.opacity="0.7"
            })
            document.getElementById("and").style.opacity="0.7"
            link.style.opacity="1";

        })  
       link.addEventListener("mouseout", () => {
            link.classList.remove("nav-hover");
            nav.forEach(link => {
                link.style.opacity="1"
            })
            document.getElementById("and").style.opacity="1"
            // link.style.opacity="1";

        })  
    })

}

export { nav };