// const heightRange = document.getElementById('heightRange');
// const heightValue = document.getElementById('heightValue');

// // Update the height value display when the range input value changes
// heightRange.addEventListener('input', function() {
//   heightValue.value = this.value;
// });


// var age = document.getElementById("age");
// var height = document.getElementById("heightRange");
// var weight = document.getElementById("weightRange");
// var male = document.getElementById("m");
// var female = document.getElementById("f");
// var form = document.getElementById("form");
// let resultArea = document.querySelector(".comment");

// modalContent = document.querySelector(".modal-content");
// modalText = document.querySelector("#modalText");
// var modal = document.getElementById("myModal");
// var span = document.getElementsByClassName("close")[0];


// function calculate(){
 
//   if(height.value=='' || weight.value==''){
//     // modal.style.display = "block";
//     modalText.innerHTML = `All fields are required!`;

//   }else{
//     countBmi();
//   }

// }


// function countBmi(){
//   var p = [height.value, weight.value];
//   // if(male.checked){
//   //   p.push("male");
//   // }else if(female.checked){
//   //   p.push("female");
//   // }

//   var bmi = Number(parseFloat(p[2]))/(Number(parseFloat(p[1]))/100*Number(parseFloat(p[1]))/100);
      
//   var result = '';
//   if(bmi<18.5){
//     result = 'Underweight';
//      }else if(18.5<=bmi&&bmi<=24.9){
//     result = 'Healthy';
//      }else if(25<=bmi&&bmi<=29.9){
//     result = 'Overweight';
//      }else if(30<=bmi&&bmi<=34.9){
//     result = 'Obese';
//      }else if(35<=bmi){
//     result = 'Extremely obese';
//      }



// // resultArea.style.display = "block";
// // document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
// // document.querySelector("#result").innerHTML = bmi.toFixed(2);
// document.querySelector("#result").innerHTML = result;

// }





// // When the user clicks on <span> (x), close the modal
// // span.onclick = function() {
// //   modal.style.display = "none";
// // }

// // // When the user clicks anywhere outside of the modal, close it
// // window.onclick = function(event) {
// //   if (event.target == modal) {
// //     modal.style.display = "none";
// //   }
// // }


document.getElementById('calculate').addEventListener('click', function() {
  var name = parseFloat(document.getElementById('bmiUsername').value);
  var phoneNo = parseFloat(document.getElementById('bmiUserPhoneNo').value);
  var weight = parseFloat(document.getElementById('weightValue').value);
  var height = parseFloat(document.getElementById('heightValue').value) / 100;

  if (weight && height) {
    var bmi = weight / (height * height);
    var category = getBmiCategory(bmi);

    document.getElementById('result').innerText = bmi.toFixed(2);
    document.getElementById('bmi_Content').innerText =category;
  } else {
    document.getElementById('bmi_Content').innerText = "Please enter valid weight and height.";
  }
});

function getBmiCategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// window.addEventListener("scroll", reveal);


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

let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};


// scroll view 
// var sections = document.querySelectorAll('.section');
// var currentSectionIndex = 0;
// var isScrolling = false;

// function scrollToNextSection(event) {
//   if (isScrolling) return;
//   isScrolling = true;

//   if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
//     currentSectionIndex++;
//     sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
//   } else if (event.deltaY < 0 && currentSectionIndex > 0) {
//     currentSectionIndex--;
//     sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
//   }

//   setTimeout(function() {
//     isScrolling = false;
//   }, 1000);
// }

// window.addEventListener('wheel', scrollToNextSection);

//scroll view test 

let didScroll = false;
let paralaxTitles = document.querySelectorAll('.paralax-title1');
// let paralaxTitles1 = document.querySelectorAll('.paralax-title1');

const scrollInProgress = () => {
  didScroll = true
}

const raf = () => {
  if(didScroll) {
    paralaxTitles.forEach((element, index) => {
      element.style.transform = "translateX("+ window.scrollY / 10 + "%)";
      
    })
    // paralaxTitle1.forEach((element, index) => {
    //   element.style.transform = "translateX("+ window.scrollY / 10 + "%)"
    // })
    didScroll = false;
  }
  requestAnimationFrame(raf);
}



requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)
