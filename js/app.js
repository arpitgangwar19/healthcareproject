const phoneInput = document.getElementById('bmiUserPhoneNo');
const phoneInput1 = document.getElementById('bmiUserPhoneNo1');
const phoneNumberRegex = /^[6897]\d{9}$/;

// bmi validation for phone 
phoneInput.addEventListener('input', function() {
  const phoneNumber = this.value;

  if (phoneNumberRegex.test(phoneNumber)) {
    this.classList.remove('invalid');
    this.classList.add('valid');
    this.setAttribute('data-bs-original-title', '');
  } else {
    this.classList.remove('valid');
    this.classList.add('invalid');
    this.setAttribute('data-bs-original-title', 'Please enter a valid 10-digit phone number.');
  }
  

  // Disable the calculate button if phone number is invalid
  const calculateButton = document.getElementById('calculate');
  calculateButton.disabled = !phoneNumberRegex.test(phoneNumber);

  setTimeout(() => {
    const tooltip = new bootstrap.Tooltip(phoneInput);
  }, 2000); // Delay of 2 seconds (2000 milliseconds)
});



phoneInput1.addEventListener('input', function() {
  const phoneNumber1 = this.value;

  if (phoneNumberRegex.test(phoneNumber1)) {
    this.classList.remove('invalid');
    this.classList.add('valid');
    this.setAttribute('data-bs-original-title', '');
  } else {
    this.classList.remove('valid');
    this.classList.add('invalid');
    this.setAttribute('data-bs-original-title', 'Please enter a valid 10-digit phone number.');
  }
  

  // Disable the calculate button if phone number is invalid
  const calculateButton = document.getElementById('calculate1');
  calculateButton.disabled = !phoneNumberRegex.test(phoneNumber);

  setTimeout(() => {
    const tooltip = new bootstrap.Tooltip(phoneInput);
  }, 2000); // Delay of 2 seconds (2000 milliseconds)
});

// Prevent form submission if phone number is invalid
const form = document.querySelector('.bmi-calculator form');
form.addEventListener('submit', function(event) {
  const phoneNumber = phoneInput.value;

  if (!phoneNumberRegex.test(phoneNumber)) {
    event.preventDefault();
    // Display an error message or take other actions
    alert('Please enter a valid phone number before submitting the form.');
  }
});


const cards = document.querySelectorAll('.fitness_card');

cards.forEach(card => {
  card.addEventListener('click', function() {
    this.classList.toggle('fitness_card-clickable');
  });
});




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



const colorPoint1 = document.querySelector('.color-point1');

document.getElementById('calculate1').addEventListener('click', function() {
  var name = document.getElementById('bmiUsername1').value;
  var phoneNo = document.getElementById('bmiUserPhoneNo1').value;
  var age = document.getElementById('age1').value;
  var gender = document.getElementById('gender1').value;
  var weight = parseFloat(document.getElementById('weightValue1').value);
  var height = parseFloat(document.getElementById('heightValue1').value) / 100;
  var heightInput = document.getElementById('heightValue1').value;


  var errorIndicators = document.getElementsByClassName("error");
  for (var i = 0; i < errorIndicators.length; i++) {
    errorIndicators[i].style.display = "none";
  }

  if (!name) {
    var label = document.querySelector('label[for="bmiUsername1"]');
    var errorIndicator = label.querySelector('.error');
    errorIndicator.style.display = 'inline';
  }
  if (!phoneNo) {
    var label = document.querySelector('label[for="bmiUserPhoneNo1"]');
    var errorIndicator = label.querySelector('.error');
    errorIndicator.style.display = 'inline';
  }
  if (!age) {
    var label = document.querySelector('label[for="age1"]');
    var errorIndicator = label.querySelector('.error');
    errorIndicator.style.display = 'inline';
  }
  // if (!phoneNo) {
  //   var label = document.querySelector('label[for="bmiUsername"]');
  //   var errorIndicator = label.querySelector('.error');
  //   errorIndicator.style.display = 'inline';
  // }
  if (!weight) {
    var label = document.querySelector('label[for="weightValue1"]');
    var errorIndicator = label.querySelector('.error');
    errorIndicator.style.display = 'inline';
  }
  if (!height) {

    var label = document.querySelector('label[for="heightValue1"]');
    var errorIndicator = label.querySelector('.error');
    errorIndicator.style.display = 'inline';
  
  }
  if (!gender) {
    var label = document.querySelector('label[for="gender1"]');
    var errorIndicator = label.querySelector('.error');
    errorIndicator.style.display = 'inline';
  }

  if (weight && height && name && phoneNo  && gender && age) {
    var bmi = weight / (height * height);
    // var category = getBmiCategory(bmi);
       getBmiCategory1(bmi);
       var bmiRounded = bmi.toFixed(2);
       submitForm(name, phoneNo, gender, age, weight, heightInput,bmiRounded,"BMI");
    // document.getElementById('result1').innerText = bmi.toFixed(2);
    // document.getElementById('bmi_Content').innerText =category;
  } else {
    alert("All fields are required!");
    // document.getElementById('bmi_Content').innerText = "Please enter valid weight and height.";
  }
});

function getBmiCategory1(bmi) {
  const redbox1 = document.getElementById("box-red1");
  const yellowbox1 = document.getElementById("box-yellow1");
  const bluebox1 = document.getElementById("box-blue1");
  const greenbox1 = document.getElementById("box-green1");
  colorPoint1.style.animation = 'movePoint 4s linear infinite';
  bluebox1.classList.remove("box-popup");
  redbox1.classList.remove("box-popup");
  greenbox1.classList.remove("box-popup");
  yellowbox1.classList.remove("box-popup");
  if (bmi < 18.5) {
    // return "Underweight";
  
   
    setTimeout(function() {
      // redbox.classList.remove("box-popup"); // Remove the class after 30 seconds
      colorPoint1.style.animation = '';
      redbox1.classList.add("box-popup");
      document.getElementById('result1').innerText = bmi.toFixed(2);
      scaleScaler1(0);
    }, 4000);
 
  } else if (bmi >= 18.5 && bmi < 25) {
   
    setTimeout(function() {
      // bluebox.classList.remove("box-popup"); // Remove the class after 30 seconds
      colorPoint1.style.animation = '';
      bluebox1.classList.add("box-popup");
      document.getElementById('result1').innerText = bmi.toFixed(2);
      scaleScaler1(1);
    }, 4000);
   
  } else if (bmi >= 25 && bmi < 30) {
   
    setTimeout(function() {
      colorPoint1.style.animation = '';
      greenbox1.classList.add("box-popup");
      document.getElementById('result1').innerText = bmi.toFixed(2);
      scaleScaler1(2);
      // greenbox.classList.remove("box-popup"); // Remove the class after 30 seconds
    }, 4000);
   
  } else {
  
    setTimeout(function() {
      yellowbox1.classList.add("box-popup");
      colorPoint1.style.animation = '';
      document.getElementById('result1').innerText = bmi.toFixed(2);
      scaleScaler1(3);
      // yellowbox.classList.remove("box-popup"); // Remove the class after 30 seconds
    }, 4000);
}
}
function scaleScaler1(pos)
{

  var colorLine = document.getElementById('color-line');
  var colorPoint = document.getElementById('color-point');

  var positions = [-7, -2, 2, 7]; // Positions for each color

  var position = positions[pos];
  colorPoint.style.transform = `translate(${position}rem, -0.6rem)`;
}


const colorPoint = document.querySelector('.color-point');
// inputBox.addEventListener('click', function() {
//   colorPoint.style.animation = 'movePoint 4s linear infinite';
// });

// var errorIndicators = document.getElementsByClassName('error');
// for (var i = 0; i < errorIndicators.length; i++) {
//   errorIndicators[i].classList.add('hidden');
// }
document.getElementById('calculate').addEventListener('click', function() {

  


  var name = document.getElementById('bmiUsername').value;
  var phoneNo = document.getElementById('bmiUserPhoneNo').value;
  var weight = parseFloat(document.getElementById('weightValue').value);
  var height = parseFloat(document.getElementById('heightValue').value) / 100;
  var gender = document.getElementById('gender').value;
  var age = document.getElementById('age').value;
  var heightInput = document.getElementById('heightValue').value;


  var errorIndicators = document.getElementsByClassName("error");
  for (var i = 0; i < errorIndicators.length; i++) {
    errorIndicators[i].style.display = "none";
  }

  if (!name) {
    var label = document.querySelector('label[for="bmiUsername"]');
    var errorIndicator = label.querySelector('.error');
    errorIndicator.style.display = 'inline';
  }
  if (!phoneNo) {
    var label = document.querySelector('label[for="bmiUserPhoneNo"]');
    var errorIndicator = label.querySelector('.error');
    errorIndicator.style.display = 'inline';
  }
  if (!age) {
    var label = document.querySelector('label[for="age"]');
    var errorIndicator = label.querySelector('.error');
    errorIndicator.style.display = 'inline';
  }
  // if (!phoneNo) {
  //   var label = document.querySelector('label[for="bmiUsername"]');
  //   var errorIndicator = label.querySelector('.error');
  //   errorIndicator.style.display = 'inline';
  // }
  if (!weight) {
    var label = document.querySelector('label[for="weightValue"]');
    var errorIndicator = label.querySelector('.error');
    errorIndicator.style.display = 'inline';
  }
  if (!heightInput) {

    var label = document.querySelector('label[for="heightValue"]');
    var errorIndicator = label.querySelector('.error');
    errorIndicator.style.display = 'inline';
  
  }
  if (!gender) {
    var label = document.querySelector('label[for="gender"]');
    var errorIndicator = label.querySelector('.error');
    errorIndicator.style.display = 'inline';
  }

  // formData.append('result', result);
  // formData.append('spreadsheetId', spreadsheetId);
  // formData.append('sheetName', sheetName);

  if (weight && height && name && phoneNo && gender) {
    var bmi = weight / (height * height);
    // var category = getBmiCategory(bmi);
       getBmiCategory(bmi)
       var bmiRounded = bmi.toFixed(2);
       submitForm(name, phoneNo, gender, age, weight, heightInput,bmiRounded,"BMI");
    // document.getElementById('result').innerText = bmi.toFixed(2);
    // document.getElementById('bmi_Content').innerText =category;
  } else {
    alert("All fields are required!");
    // document.getElementById('bmi_Content').innerText = "Please enter valid weight and height.";
  }
});

function submitForm(name, phone, gender, age, weight, height,bmi,platform) {
  // Prepare the form data
  // const scriptURL = 'https://script.google.com/macros/s/AKfycbwgB-90FJODNzEbuHoEhDOkgpiljw9jIFmxq0Iqzv8aSJATX3sEF83kGX1Ib1hdqKilHQ/exec';
  const scriptURL = 'https://script.google.com/macros/s/AKfycbymeNVaKigWn5yQMNLvw3iEwPUJEQCNprXNFlAlcomA1rYO6rhg4zsG1IAxaqdRtSIN/exec';
    
  var formData = new FormData();
  formData.append('Name', name);
  formData.append('Phone', phone);
  formData.append('Gender', gender);
  formData.append('Age', age);
  formData.append('Weight', weight);
  formData.append('Height', height);
  formData.append('BMI_Result', bmi);
  formData.append('Page', platform);
  // const form = document.forms['submit-to-google-sheet']

    fetch(scriptURL, { method: 'POST', body: formData})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))

}




function submitEnquiryForm(name, phone, email, message,platform) {
  // Prepare the form data
  // const scriptURL = 'https://script.google.com/macros/s/AKfycbwgB-90FJODNzEbuHoEhDOkgpiljw9jIFmxq0Iqzv8aSJATX3sEF83kGX1Ib1hdqKilHQ/exec';
  const scriptURL = 'https://script.google.com/macros/s/AKfycbymeNVaKigWn5yQMNLvw3iEwPUJEQCNprXNFlAlcomA1rYO6rhg4zsG1IAxaqdRtSIN/exec'
    
  var formData = new FormData();
  formData.append('Name', name.value);
  formData.append('Phone', phone.value);
  formData.append('Email', email.value);
  formData.append('Message', message.value);
  // formData.append('Weight', weight);
  // formData.append('Height', height);
  // formData.append('BMI_Result', bmi);
  formData.append('Page', platform);
  // const form = document.forms['submit-to-google-sheet']

    fetch(scriptURL, { method: 'POST', body: formData})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))

}


function getBmiCategory(bmi) {
  const redbox = document.getElementById("box-red");
  const yellowbox = document.getElementById("box-yellow");
  const bluebox = document.getElementById("box-blue");
  const greenbox = document.getElementById("box-green");
 
  // colorPoint.style.animation = ''; 
  colorPoint.style.animation = 'movePoint 4s linear infinite';
  bluebox.classList.remove("box-popup");
  redbox.classList.remove("box-popup");
  greenbox.classList.remove("box-popup");
  yellowbox.classList.remove("box-popup");
  if (bmi < 18.5) {
    // return "Underweight";
  
   
    setTimeout(function() {
      // redbox.classList.remove("box-popup"); // Remove the class after 30 seconds
      colorPoint.style.animation = '';
      redbox.classList.add("box-popup");
      document.getElementById('result').innerText = bmi.toFixed(2);
      scaleScaler(0);
    }, 4000);
 
  } else if (bmi >= 18.5 && bmi < 25) {
   
    setTimeout(function() {
      // bluebox.classList.remove("box-popup"); // Remove the class after 30 seconds
      colorPoint.style.animation = '';
      bluebox.classList.add("box-popup");
      document.getElementById('result').innerText = bmi.toFixed(2);
      scaleScaler(1);
    }, 4000);
   
  } else if (bmi >= 25 && bmi < 30) {
   
    setTimeout(function() {
      colorPoint.style.animation = '';
      greenbox.classList.add("box-popup");
      document.getElementById('result').innerText = bmi.toFixed(2);
      scaleScaler(2);
      // greenbox.classList.remove("box-popup"); // Remove the class after 30 seconds
    }, 4000);
   
  } else {
  
    setTimeout(function() {
      yellowbox.classList.add("box-popup");
      colorPoint.style.animation = '';
      document.getElementById('result').innerText = bmi.toFixed(2);
      scaleScaler(3);
      // yellowbox.classList.remove("box-popup"); // Remove the class after 30 seconds
    }, 4000);

  }
}
function scaleScaler(pos)
{

  var colorLine = document.querySelector('.color-line');
  var colorPoint = document.querySelector('.color-point');

  var positions = [-7, -2, 2, 7]; // Positions for each color

  var position = positions[pos];
  colorPoint.style.transform = `translate(${position}rem, -0.6rem)`;
}







document.addEventListener("DOMContentLoaded", function() {
  const select = document.getElementById("country-select");
  select.addEventListener("change", function() {
    const flag = this.options[this.selectedIndex].getAttribute("data-flag");
    this.style.backgroundImage = `url('https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/${flag}.svg')`;
  });


  const select1 = document.getElementById("country-select1");
  select1.addEventListener("change", function() {
    const flag = this.options[this.selectedIndex].getAttribute("data-flag");
    this.style.backgroundImage = `url('https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/${flag}.svg')`;
  });

});









// swipper js 


var swiper = new Swiper(".slide-content1", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: false,
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

var swiper1 = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: false,
  centerInsufficientSlides: true,
  fadeEffect: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
  breakpoints: {
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





  // var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  // (function(){
  // var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  // s1.async=true;
  // s1.src='https://embed.tawk.to/64a6a52994cf5d49dc61e4ac/1h4lfabff';
  // s1.charset='UTF-8';
  // s1.setAttribute('crossorigin','*');
  // s0.parentNode.insertBefore(s1,s0);
  // })();




















