const tl = gsap.timeline({ paused: true });
const tl2 = gsap.timeline({ paused: true });

useEffect(() => {

    tl.to(".register-left", {
        duration: 1,
        // delay:1,
        left: "60%",
        ease: "easeIn",
        opacity: 0,
        display:"none"
    })
    tl.to(".register-right", {
        duration: 1,
        delay: -1,
        left: 0,
        ease: "easeIn",
        opacity: 0,
        display:"none"

    })
    tl.to(".login-right", {
      duration: 1,
      delay: -1,
      left: 0,
      ease: "easeIn",
      display:"inherit"
      

  })
  tl.to(".login-left", {
    duration: 1,
    delay: -1,
    left: "60%",
    ease: "easeIn",
    display:"inherit"
   
})

    tl2.to(".login-left",{
      duration:1,
      left: "0%",
      ease: "easeIn",
      opacity: 0,
        display:"none"

    })
    tl2.to(".login-right",{
      duration:1,
      delay: -1,
      left: "40%",
      ease: "easeIn",
      opacity: 0,
        display:"none"

    })
    tl2.to(".register-left",{
      duration:1,
      left: "0%",
      delay: -1,
      ease: "easeIn",
      opacity: 1,
      display:"inherit"
    })
    tl2.to(".register-right",{
      duration:1,
      delay: -1,
      left: "40%",
      ease: "easeIn",
      opacity: 1,
      display:"inherit"
    })


}, [])

var alfa =0;
const signUpEventHandler = () => {
    // alert()
    // if (alfa == 0) {
    //       tl.play();
    //       alfa = 1;
    //     } else {
    //       tl.restart();
    //       alfa = 0;
    //     }
    tl.play();
}
const signUpDb = () =>{
  tl.restart();

}
var beta = 0;
const signInEventHandler = () => {
  // alert();
  // if (beta == 0) {
  //   tl2.restart();
  //   beta = 1;
  // } else {
  //   tl2.reverse();
  //   beta = 0;
  // }
  tl2.play();
}

const signInDb = ()=>{
tl2.restart();

}
