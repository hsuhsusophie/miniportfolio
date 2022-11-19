/*=============== FILTERS TABS ===============*/


/*=============== DARK LIGHT THEME ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

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




/*=============== SCROLL REVEAL ANIMATION ===============*/



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

 /*=============== EMAIL JS ===============*/
 const contactForm = document.getElementById('contact-form')
       contactName = document.getElementById('contact-name')
       contactEmail = document.getElementById('contact-email')
       contactMessage = document.getElementById('contact-message')
       contactMessages = document.getElementById('contact-messages')

 const sendEmail = (e) =>{
  e.preventDefault()

  if(contactName.value === ''|| contactEmail.value === '' || contactMessage.value === ''){
    //Add and remove color
    contactMessages.classList.remove('color-blue')
    contactMessages.classList.remove('color-red')

    //Show message
    contactMessages.textContent = 'Write all the input fields'
  }else{ //serviceID-templateID-#form-publicKEY
    emailjs.sendForm('service_0cn0wog','template_bob2tlr','#contact-form','XqHDyBDMAp3WLOzpp')
    .then(() =>{
      //show message and add color
      contactMessages.classList.add('color-blue')
      contactMessages.textContect = 'Message sent'

      //Remove message after five seconds
      setTimeout(()=>{
        contactMessages.textContect = ''
      },5000)

    })
  }




  }

  contactForm.addEventListener('submit',sendEmail)
 


  