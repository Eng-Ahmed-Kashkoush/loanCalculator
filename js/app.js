// form variable
const inputForm =document.getElementById("loan-form");
const calcBtn = document.querySelector(".btn");
const resultForm = document.getElementById("ressult");

// calculate results event
calcBtn.addEventListener('click', function(e){
  // Hide results
  
resultForm.style.display = "none"


  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);
  
  e.preventDefault();
});

// calculate results function

function calculateResults(){
console.log("Calculating...");

// UI; vars
// * form 
const amount = document.getElementById("amount");

const interest = document.getElementById("interest");
const years = document.getElementById("yearly-repay");

// * Results
const monthlyPayment = document.getElementById("monthly-payment");


const totalPayment = document.getElementById("Total-payment");

const  totalInterest = document.getElementById("total-interest");


// the formula

const principal = parseFloat(amount.value);

const calculatedInterest = parseFloat(interest.value)/100 / 12;
 
const calculatedPayment = parseFloat(years.value)* 12;

// Compute monthly payment
const x = Math.pow(1 + calculatedInterest, calculatedPayment);

const monthly = (principal*x*calculatedInterest)
/(x-1);

if(isFinite(monthly)){
  monthlyPayment.value = monthly.toFixed(2);
  totalPayment.value = (monthly* calculatedPayment).toFixed(2);
  totalInterest.value = ((monthly * calculatedPayment)- principal).toFixed(2);
  resultForm.style.display = "block";
}else{
  showError("please Check you numbers");
  
}

// show results, hide the loader
document.getElementById("loading").style.display = "none";

// show error
function showError(error){
  resultForm.style.display = "none";
  // create a div
  const errorDiv = document.createElement("div");

  // add class
  errorDiv.className ="alert alert-danger";
  // create text node and append it to the div
 errorDiv.innerText= `${error}`

 const container = document.querySelector(".container");
 container.insertAdjacentElement("afterbegin", errorDiv);
 
//  clear erroe after 3s
setTimeout(function(){
  document.querySelector(".alert").remove();
}, 3000)
  

  

}


  
}