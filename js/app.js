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