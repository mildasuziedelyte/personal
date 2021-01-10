
function pageTransition(){
    
    let t1 = gsap.timeline();

    t1.to('ul.transition li', {duration: .5, scaleX: 1, transformOrigin: "bottom left", stagger: .2})
    t1.to('ul.transition li', {duration: .5, scaleX: 0, transformOrigin: "bottom right", stagger: .1, delay: .1,  ease: 'power1.out'})
}

// function contentAnimation(){
    
//     let t1 = gsap.timeline();
//     t1.from('.left', { duration: 1.5, tarsnlateY: 50, opacity: 0})
//     t1.to('img', { clipPatch: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"})
// }

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({

    sync: true, 

    transitions: [{

        async leave(data){

            const done = this.async();

            pageTransition();
            await delay(1500);
            done();
        },

        // async enter(data){
        //     contentAnimation();
        // },

        // async once(data){
        //     contentAnimation();
        // }
    }]
})