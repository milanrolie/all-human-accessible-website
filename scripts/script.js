// js-more-info
const allButtons = document.querySelectorAll(".js-more-info");
const flexcon = document.querySelector(".flexcon");
const ondergrond = document.querySelector(".ondergrond");
const slide = document.querySelector(".slide");
const box = document.querySelector(".box");
const close = document.querySelector(".close-button");
const overviewBtn = document.querySelector(".js-up");
const overview = document.querySelector(".overview");
const searchBtn = document.querySelector(".js-search");
const search = document.querySelector(".search");   
const gradient = document.querySelector(".gradient");
const flexScroll = document.querySelector("#flec-scroll")





// allButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//         flecxon.classList.toggle("active")
        
//     })
// })

function slideActive() {
    ondergrond.classList.toggle("active")
    flexcon.classList.toggle("active")
    flexScroll.classList.toggle("active")
    slide.classList.toggle("active")  
    box.classList.toggle("active")
    gradient.classList.toggle("active")


}

overviewBtn.addEventListener('click', () => {
    overview.classList.toggle("active")
})

searchBtn.addEventListener('click', () => {
    search.classList.toggle("active")
})


// Functie voor de locate knop
function closeSlide() {
    if (ondergrond.classList.contains("active")) {
        ondergrond.classList.toggle("active")
        flexcon.classList.toggle("active")
        slide.classList.toggle("active")  
        box.classList.toggle("active")
        gradient.classList.toggle("active")
    }
}