// Variables: navigation buttons and gallery container
let backBtn = document.getElementById('backBtn')
let nextBtn = document.getElementById('nextBtn')
let scrollCnt = document.querySelector('.gallery')

// -------------------------------------------
// Event Listener: Scroll with mouse wheel
// -------------------------------------------
scrollCnt.addEventListener('wheel', (e) => {
    e.preventDefault() // Prevent vertical scrolling of page
    scrollCnt.scrollLeft += e.deltaY // Move gallery horizontally

    // Hide back button at start
    if(scrollCnt.scrollLeft == 0){
        backBtn.style.opacity = "0"
        nextBtn.style.opacity = "1"
    } 
    // Hide next button at end
    else if(scrollCnt.scrollLeft >= scrollCnt.scrollWidth - scrollCnt.clientWidth){
        backBtn.style.opacity = "1"
        nextBtn.style.opacity = "0"
    }
})

// -------------------------------------------
// Event Listener: Click next button
// -------------------------------------------
nextBtn.addEventListener('click', () => {
    scrollCnt.style.scrollBehavior = "smooth" // smooth scrolling
    scrollCnt.scrollLeft += 900 // move gallery to the right
    backBtn.style.opacity = "1"
    nextBtn.style.opacity = "0"
})

// -------------------------------------------
// Event Listener: Click back button
// -------------------------------------------
backBtn.addEventListener('click', () => {
    scrollCnt.style.scrollBehavior = "smooth" // smooth scrolling
    scrollCnt.scrollLeft -= 900 // move gallery to the left
    backBtn.style.opacity = "0"
    nextBtn.style.opacity = "1"
})

