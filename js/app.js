//Define Main Variables
const floatingBtn = document.querySelector('.floating a');
const sections = document.querySelectorAll('section');
const section1 = document.querySelector('.section-one');
const popUp = document.querySelector('.floating-popup');

//Run create nav function
createNav();

//Run show Pop Up
showPopUp();

//Create a new nav dynamically
function createNav() {
  // Create Nav element and add class
  const nav = document.createElement('nav');
  nav.classList = 'navbar';

  //Create Container and add classes
  const navContainer = document.createElement('div');
  navContainer.classList = 'navbar__container main-container';

  //Create logo box add class
  const logoBox = document.createElement('div');
  logoBox.classList = 'logo-box';

  //Insert Logo inside logoBox
  logoBox.innerHTML = '<a href="#" class="logo"><i class = "fas fa-space-shuttle"></i>MountDev</a>';

  //Create ul and give it a class
  const list = document.createElement('ul');
  list.classList = 'navbar__list';

  // Create variables for section names
  const sectionOne = 'Section 1';
  const sectionTwo = 'Section 2';
  const sectionThree = 'Section 3';
  const sectionFour = 'Section 4';

  //Insert li items with links to list
  list.innerHTML = `<li class="navbar__list-item"><a href="#section-1">${sectionOne}</a></li><li class="navbar__list-item"><a href="#section-2">${sectionTwo}</a></li><li class="navbar__list-item"><a href="#section-3">${sectionThree}</a></li><li class="navbar__list-item"><a href="#section-4">${sectionFour}</a></li>`

  //Append items
  navContainer.append(logoBox, list);
  nav.appendChild(navContainer);
  section1.appendChild(nav);
}

//Asign navBar as variable
const navBar = document.querySelector('.navbar');

//Define anchors in nav to variables
const navLinks = document.querySelectorAll('.navbar__list-item a');
const logoLink = document.querySelector('.logo-box a');


//Scroll to each section on click
navLinks.forEach(link => link.addEventListener('click', goToSection));

function goToSection(e) {
  //Prevent default behavior
  e.preventDefault();
  // Get the target attribute of each anchor
  const targetId = e.currentTarget.getAttribute('href');
  // Sroll to the section which ID equals the target attribute
  window.scrollTo({
    top: document.querySelector(targetId).offsetTop,
    behavior: 'smooth'
  })
}


//Change nav styles on scroll
document.addEventListener('scroll', scrollNav);



function scrollNav() {
  //Media Query for Mobile
  const query = window.matchMedia('(max-width: 56.25em)');

  //Run different functions depending whether on Tab Portrait & Mobile or desktop
  if (query.matches) {
    //Navbar changes immediately after scrolling
    scrollNavTabPort();
  }
  //Navbar changes after scrolling 100px
  else {
    scrollNavDesktop();
  }

  function scrollNavTabPort() {
    if (window.scrollY > 0) {
      navBar.classList.add('navbar--active');
    } else {
      navBar.classList.remove('navbar--active');
    }
  }

  function scrollNavDesktop(){
    if (window.scrollY > 100) {
      navBar.classList.add('navbar--active');
    } else {
      navBar.classList.remove('navbar--active');
    }
  }
  
}


//Scrolls to the top on click
logoLink.addEventListener('click', goToTop);
floatingBtn.addEventListener('click', goToTop);

function goToTop(e) {
  //Prevent default behavior
  e.preventDefault();

  // Scroll Function
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}


//Show pop up message after 3 seconds but not on mobile
function showPopUp (){

  //Media Query for Tablet and Desktop
  const query = window.matchMedia('(min-width: 37.5em)');

  if (query.matches) {
    //Animate popup with Anime JS Library
    anime({
      targets: '.floating-popup',
      translateX: [
        { value: 550, duration: 500, delay: 3000, },
        { value: -550, duration: 500, delay: 8000, }
      ],
      easing: 'easeInOutQuad'
    });
  }
}


// Make nav links active on scroll
window.addEventListener('scroll', switchNavLinks);

function switchNavLinks() {
  //Store how far the user has scrolled in a variable
  const fromTop = window.scrollY;
  
  //Loop through the anchors in the navbar and get each section through the hash property
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    
    //Change styling the the active class when the viewport reaches each section
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    } 
  });
}