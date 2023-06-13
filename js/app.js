

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);




const calculator = document.querySelector('.bmi-calculatormobileDesign');
const toggleButton = document.getElementById('toggle-bmi-calculator');
const crossbutton = document.getElementById('cross-button');



if (window.innerWidth >1) {
  calculator.classList.add('minimized');
}

toggleButton.addEventListener('click', () => {
  calculator.classList.toggle('minimized');
  toggleButton.style.display="none";
});
crossbutton.addEventListener('click', () => {
  calculator.classList.toggle('minimized');
  toggleButton.style.display="block";
});



document.getElementById('calculate1').addEventListener('click', function() {
  var name = document.getElementById('bmiUsername1').value;
  var phoneNo = document.getElementById('bmiUserPhoneNo1').value;
  var weight = parseFloat(document.getElementById('weightValue1').value);
  var height = parseFloat(document.getElementById('heightValue1').value) / 100;

  if (weight && height && name && phoneNo) {
    var bmi = weight / (height * height);
    // var category = getBmiCategory(bmi);
       getBmiCategory(bmi)
    document.getElementById('result1').innerText = bmi.toFixed(2);
    // document.getElementById('bmi_Content').innerText =category;
  } else {
    alert("All fields are required!");
    // document.getElementById('bmi_Content').innerText = "Please enter valid weight and height.";
  }
});


document.getElementById('calculate').addEventListener('click', function() {
  var name = document.getElementById('bmiUsername').value;
  var phoneNo = document.getElementById('bmiUserPhoneNo').value;
  var weight = parseFloat(document.getElementById('weightValue').value);
  var height = parseFloat(document.getElementById('heightValue').value) / 100;

  if (weight && height && name && phoneNo) {
    var bmi = weight / (height * height);
    // var category = getBmiCategory(bmi);
       getBmiCategory(bmi)
    document.getElementById('result').innerText = bmi.toFixed(2);
    // document.getElementById('bmi_Content').innerText =category;
  } else {
    alert("All fields are required!");
    // document.getElementById('bmi_Content').innerText = "Please enter valid weight and height.";
  }
});



function getBmiCategory(bmi) {
  if (bmi < 18.5) {
    // return "Underweight";
    scaleScaler(0);
  } else if (bmi >= 18.5 && bmi < 25) {
    scaleScaler(1);
  } else if (bmi >= 25 && bmi < 30) {
    scaleScaler(2);
  } else {
    scaleScaler(3);
  }
}
function scaleScaler(pos)
{

  var colorLine = document.querySelector('.color-line');
  var colorPoint = document.querySelector('.color-point');

  var positions = [-7, -2, 2, 7]; // Positions for each color

  var position = positions[pos];
  colorPoint.style.transform = `translateX(${position}rem)`;
}


// var fadeBox = document.querySelector('.left-div');
// var lastScrollPosition = 0;

// window.addEventListener('scroll', function() {
//   var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

//   if (currentScrollPosition > lastScrollPosition) {
//     // Scroll down
//     fadeBox.classList.remove('fade-left');
//     fadeBox.classList.add('fade-right');
//     window.addEventListener("scroll", reveal);
//   } else {
//     // Scroll up
//     fadeBox.classList.remove('fade-right');
//     fadeBox.classList.add('fade-left');
//     window.addEventListener("scroll", reveal);
//   }

//   lastScrollPosition = currentScrollPosition;
// });
// var lastScrollPosition = 0;
// window.addEventListener('scroll', function() {
//   var homeSection = document.getElementById('home');
//   var aboutSection = document.getElementById('about');

//   // var fadeBox = document.querySelector('.left-div');

  
//   var homeLeft = this.document.querySelector('.left-div');
//   var homeRight = this.document.querySelector('.right-div');
//   var aboutLeft = this.document.querySelector('.about-section');
//   var aboutRight = this.document.querySelector('.image-section');
  
//   var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
//   var homeHeight = 363;
  
//   if (scrollPosition > homeHeight && scrollPosition > lastScrollPosition) {
//     var aboutOffset = scrollPosition - homeHeight;

//     homeLeft.classList.add('fadeout-left');
//     homeLeft.classList.add('active');
//     homeLeft.classList.remove('active');

//     homeRight.classList.add('fadeout-right');
//     homeRight.classList.add('active');
//     homeRight.classList.remove('active');
    
//     aboutLeft.classList.remove('fade-right');
//     aboutLeft.classList.remove('fade-left');
//     aboutLeft.classList.add('fade-left');
//     aboutLeft.classList.add('active');
//     aboutLeft.classList.remove('active');
    
//     aboutRight.classList.remove('fade-left');
//     aboutRight.classList.remove('fade-right');
//     aboutRight.classList.add('fade-right');
//     aboutRight.classList.add('active');
//     aboutRight.classList.remove('active');
//     // window.addEventListener("scroll", reveal);
//   }
//      else{

//       aboutLeft.classList.add('fadeout-left');
//       aboutLeft.classList.add('active');
//       aboutLeft.classList.remove('active');
  
//       aboutRight.classList.add('fadeout-right');
//       aboutRight.classList.add('active');
//       aboutRight.classList.remove('active');
      
//       homeLeft.classList.remove('fade-right');
//       homeLeft.classList.remove('fade-left');
//       homeLeft.classList.add('fade-right');
//       homeLeft.classList.add('active');
//       homeLeft.classList.remove('active');
      
//       homeRight.classList.remove('fade-left');
//       homeRight.classList.remove('fade-right');
//       homeRight.classList.add('fade-left');
//       homeRight.classList.add('active');
//       homeRight.classList.remove('active');
//       // window.addEventListener("scroll", reveal);
      
//         // homeLeft.classList.remove('fade-left');
//         // homeLeft.classList.remove('fade-right');
//         // homeLeft.classList.add('fade-right');
//         // aboutRight.classList.remove('active');
//         // window.addEventListener("scroll", reveal);
//         // homeRight.classList.remove('fade-right');
//         // homeRight.classList.remove('fade-left');
//         // homeRight.classList.add('fade-left');
//         // window.addEventListener("scroll", reveal);
//         // aboutLeft.classList.remove('fade-left');
//         // aboutLeft.classList.remove('fade-right');
//         // aboutLeft.classList.add('fade-right');
//         // window.addEventListener("scroll", reveal);
//         // aboutRight.classList.remove('fade-right');
//         // aboutRight.classList.remove('fade-left');
//         // aboutRight.classList.add('fade-left');
//         // window.addEventListener("scroll", reveal);
   
//   }
//   window.addEventListener("scroll", reveal);
//   lastScrollPosition = scrollPosition;
// });




// active section

// document.addEventListener("DOMContentLoaded", function() {
//   let sections = document.querySelectorAll(".section");
//   let currentSectionIndex = 0;
//   let isScrolling = false;
  
//   function scrollToNextSection() {
//     if (isScrolling) return;
//     isScrolling = true;
    
//     currentSectionIndex++;
//     if (currentSectionIndex >= sections.length) {
//       currentSectionIndex = 0;
//     }
    
//     sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
    
//     setTimeout(function() {
//       isScrolling = false;
//     }, 1000);
//   }
  
//   document.addEventListener("wheel", scrollToNextSection);
// });


// scroll view 
// document.addEventListener("DOMContentLoaded", function() {
//   const sections = document.querySelectorAll("section");
//   const navLinks = document.querySelectorAll("nav a");

//   window.addEventListener("scroll", function() {
//     let current = "";

//     sections.forEach(function(section) {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.clientHeight;

//       if (pageYOffset >= sectionTop - sectionHeight / 3) {
//         current = section.getAttribute("id");
//       }
//     });

//     navLinks.forEach(function(link) {
//       link.classList.remove("active");
//       if (link.classList.contains(current)) {
//         link.classList.add("active");
//       }
//     });
//   });
// });



//scroll view test 

// let didScroll = false;
// let paralaxTitles = document.querySelectorAll('.paralax-title1');
// let paralaxTitles1 = document.querySelectorAll('.paralax-title1');

// const scrollInProgress = () => {
//   didScroll = true
// }

// const raf = () => {
//   if(didScroll) {
//     paralaxTitles.forEach((element, index) => {
//       element.style.transform = "translateX("+ window.scrollY / 10 + "%)";
      
//     })
//     // paralaxTitle1.forEach((element, index) => {
//     //   element.style.transform = "translateX("+ window.scrollY / 10 + "%)"
//     // })
//     didScroll = false;
//   }
//   requestAnimationFrame(raf);
// }



// requestAnimationFrame(raf);
// window.addEventListener('scroll', scrollInProgress)





// document.addEventListener("DOMContentLoaded", function() {
 
// });
document.addEventListener("DOMContentLoaded", function() {
  const select = document.getElementById("country-select");
  select.addEventListener("change", function() {
    const flag = this.options[this.selectedIndex].getAttribute("data-flag");
    this.style.backgroundImage = `url('https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/${flag}.svg')`;
  });




  const navbar = document.querySelector('.navbar');
  const navbarLinks = navbar.querySelectorAll('.nav-link');

  function updateNavText() {
    const homeSection = document.querySelector('#home');
    const homeSectionRect = homeSection.getBoundingClientRect();

    if (homeSectionRect.top > 0 || homeSectionRect.bottom < window.innerHeight) {
      navbarLinks.forEach(function(link) {
        link.classList.remove('white-text');
      });
    } else {
      navbarLinks.forEach(function(link) {
        link.classList.add('white-text');
      });
    }
  }

  updateNavText();
  window.addEventListener('scroll', updateNavText);
});

// document.addEventListener("DOMContentLoaded", function() {
//   const navbar = document.querySelector('.navbar');
//   const navbarLinks = navbar.querySelectorAll('.nav-link');

//   function updateNavText() {
//     const homeSection = document.querySelector('#home');
//     const homeSectionRect = homeSection.getBoundingClientRect();
//     const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

//     if (scrollPosition > homeSectionRect.bottom) {
//       navbarLinks.forEach(function(link) {
//         link.classList.add('white-text');
//       });
//     } else {
//       navbarLinks.forEach(function(link) {
//         link.classList.remove('white-text');
//       });
//     }
//   }

//   updateNavText();
//   window.addEventListener('scroll', updateNavText);
// });









// swipper js 


var swiper = new Swiper(".slide-content1", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});