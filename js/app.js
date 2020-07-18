// Javascript for the nav-bar 
let navSlide = () => {
    // variable declarations
    let hamburger = document.querySelector('div .hamburger')  
    let nav_links = document.querySelector('.nav-links'); 


    hamburger.addEventListener('click', () => {
            nav_links.classList.toggle('nav-active');
    })
}

navSlide();
    
