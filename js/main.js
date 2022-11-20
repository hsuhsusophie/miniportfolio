/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SWIPER PROJECTS ===============*/


 var swiperProjects = new Swiper(".projects__container", {
   loop: true,
   spaceBetween:24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
          1200: {
            slidesPerView: 2,
            spaceBetween: -56,
      
     
          },
        },
  });
  console.log(swiperProjects);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, {delay: 500})
sr.reveal(`.profile__profesion`, {delay: 600})
sr.reveal(`.profile__social`, {interval:100,delay: 700})
sr.reveal(`.contact__container`, {interval:100,delay: 700})
sr.reveal(`.profile__info`, {origin: 'right',delay: 800})
sr.reveal(`.section__title`, {origin: 'left'})
sr.reveal(`.skills__area,.projects__container ` , {origin: 'right'})
 /*=============== EMAIL JS ===============*/
//  const contactForm = document.getElementById('contact-form')
//        contactName = document.getElementById('contact-name')
//        contactEmail = document.getElementById('contact-email')
//        contactMessage = document.getElementById('contact-message')
//        contactMessages = document.getElementById('contact-messages')

//  const sendEmail = (e) =>{
//   e.preventDefault()

//   if(contactName.value === ''|| contactEmail.value === '' || contactMessage.value === ''){
//     //Add and remove color
//     contactMessages.classList.remove('color-blue')
//     contactMessages.classList.remove('color-red')

//     //Show message
//     contactMessages.textContent = 'Write all the input fields'
//   }else{ //serviceID-templateID-#form-publicKEY
//     emailjs.sendForm('service_0cn0wog','template_bob2tlr','#contact-form','XqHDyBDMAp3WLOzpp')
//     .then(() =>{
//       //show message and add color
//       contactMessages.classList.add('color-blue')
//       contactMessages.textContect = 'Message sent'

//       //Remove message after five seconds
//       setTimeout(()=>{
//         contactMessages.textContect = ''
//       },5000)

//     })
//   }




//   }

//   contactForm.addEventListener('submit',sendEmail)
 


  
