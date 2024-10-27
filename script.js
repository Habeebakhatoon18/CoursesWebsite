let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".nav-links");


hamburger.addEventListener("click",()=>{
    console.log("start");
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    console.log("hey")
})
