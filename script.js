
//function to call both functions simultaneously
function action() {
  calcBMI()
  showSection()
}

//function to calculate the BMI
function calcBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let bmi = (weight/(height * height))
  bmi = bmi.toFixed(2);
  console.log(bmi)
  if (isNaN(bmi)) {
    document.getElementById("BMI-result").innerHTML = "Oops! Something's wrong with the number(s) you wrote."
  } else {
    document.getElementById("BMI-result").innerHTML = "Your BMI is: " + bmi
  }
  //document.getElementById("BMI-result").innerHTML = "Your BMI is: " + bmi
}

//function to change the display of the formerly hidden section
function showSection() {
  document.getElementById("hidden-info-section").style.display = "block"
}

//function to erase data so that new data can be typed in
function clearAll() {
  var getValue = document.getElementById("weight");
  if (getValue.value != "") {
    getValue.value = "";
  }
  var getValue = document.getElementById("height");
  if (getValue.value != "") {
    getValue.value = "";
  }
}

//instructions to click "calculate" just by pressing the enter key, on either field
var input = document.getElementById("height");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    document.getElementById("submit_button").click();
  }
});

var input = document.getElementById("weight");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    document.getElementById("submit_button").click();
  }
});
