
// Get all values
function getValues(){
  let loanAmount = parseInt(document.getElementById("loanAmount").value);
  let loanMonths = parseInt(document.getElementById("loanMonths").value);
  let loanRate = parseFloat(document.getElementById("loanRate").value).toFixed(2);

  // Call generate data
  let data = generateData(loanAmount, loanMonths, parseFloat(loanRate));

  // Call displayresults
}

// Generate Data based on values
function generateData(loanAmount, loanMonths, loanRate){
  // Find Total monthy payment
  let totalMonthlyPayment = (loanAmount * (loanRate/1200)) / 1 - (1 + loanRate/1200) - loanMonths;
  // Find remaining balance
  let totalRemain = loanAmount;
  // Find interest payment
  let totalInterest = totalRemain * (loanRate/1200);
  // Find principle payment
  let totalPrincipal = totalMonthlyPayment - totalInterest;
  console.log(totalMonthlyPayment);
}

// Display results
function displayResults(){

}