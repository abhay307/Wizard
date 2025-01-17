function page1Animation(){
    var tl =  gsap.timeline()
tl.from("nav h1,nav h4, nav button",{
    y:-30,
    opacity:0,
    delay:0.5,
    duration:0.7,
    stagger:0.15
})

tl.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.5

})
tl.from(".center-part1 p",{
    x:-200,
    opacity:0,
    duration:0.4

})

tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4
})

tl.from(".center-part2 img",{
    opacity:0,
    duration:0.5,
    x:200
},"-=1")

tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6
})
}
function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            start:"top 50%",
            end: "top -10%",
            scrub:2,
        }
     })
    
     tl2.from(".services",{
        y:30,
        opacity:0,
        duration:0.5
     })
     tl2.from(".elem.white.left",{
        x:-300,
        opacity:0,
        duration:0.5
    
     },"anim")
     tl2.from(".elem.black.right",{
        x:300,
        opacity:0,
        duration:0.5
    
     },"anim")
     tl2.from(".elem.black.left",{
        x:-300,
        opacity:0,
        duration:0.5
    
     },"anim2") //this anim2 trick is used when we perform 2 animations at same time
     tl2.from(".elem.white.right",{
        x:300,
        opacity:0,
        duration:0.5
    
     },"anim2")
}

page1Animation()
page2Animation()
 