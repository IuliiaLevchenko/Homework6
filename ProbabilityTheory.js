// Probability Theory Test Function
function ProbabilityTheory() {
  let random_start = 100; // Start number
  let random_end = 1000; // End Number

  let allCycles = Math.floor(
    Math.random() * (random_end - random_start + 1) + 1
  ); // Quantity of generated numbers

  let array = []; // Empty Array

  // Fill the array with numbers from 100 to 1000
  for (let i = random_start; i <= random_end; i++) {
    array.push(i);
  }

  let generatedNumbers = []; // Array to store generated numbers
  let pairs = 0; // Counter for pairs
  let unPairs = 0; // Counter for unpairs

  // Fill the array with new random generated numbers
  for (let countCycles = 1; countCycles <= allCycles; countCycles++) {
    let randomNumber = array.splice(
      Math.floor(Math.random() * array.length),
      1
    )[0];
    generatedNumbers.push(randomNumber);
    if (randomNumber % 2 === 0) {
      pairs++;
    } else {
      unPairs++;
    }
  }

  // Calculate the percentage of pairs to unpairs numbers
  let pairsPercentage = ((pairs / unPairs) * 100).toFixed(2);

  // Display the results in the output div
  let output = `Generated Numbers: ${generatedNumbers.join(", ")}<br>`;
  output += `Quantity of Numbers: ${allCycles}<br>`;
  output += `Quantity of Pairs: ${pairs}<br>`;
  output += `Quantity of Unpairs: ${unPairs}<br>`;
  output += `Percentage of Pairs to Unpairs: ${pairsPercentage}%`;

  document.getElementById("output").innerHTML = output;
}
