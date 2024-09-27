function checkNumber(number) {
    if (number > 0) {
      console.log("The number is positive.");
    } else if (number < 0) {
      console.log("The number is negative.");
    } else {
      console.log("The number is zero.");
    }
  }
  
  // Example usage:
  checkNumber(5);   // Output: The number is positive.
  checkNumber(-3);  // Output: The number is negative.
  checkNumber(0);   // Output: The number is zero.

  function printDayOfTheWeek(number) {
    switch (number) {
      case 1:
        console.log("Monday");
        break;
      case 2:
        console.log("Tuesday");
        break;
      case 3:
        console.log("Wednesday");
        break;
      case 4:
        console.log("Thursday");
        break;
      case 5:
        console.log("Friday");
        break;
      case 6:
        console.log("Saturday");
        break;
      case 7:
        console.log("Sunday");
        break;
      default:
        console.log("Invalid number. Please enter a number between 1 and 7.");
    }
  }
  
  // Example usage:
  printDayOfTheWeek(3); // Output: Wednesday

  // Using a for loop
console.log("Using a for loop:");
for (let i = 1; i <= 5; i++) {
  if(i === 3){
  break;
  }
  if(i === 3){
    continue;
  }
    console.log(i);
}

// Using a while loop
console.log("Using a while loop:");
let j = 1;
while (j <= 5) {
    if(j === 3){
        break;
        }
        if(j === 3){
          continue;
        }
    console.log(j);
  j++;
}

// Using a do...while loop
console.log("Using a do...while loop:");
let k = 1;
do {
    if(k === 3){
        break;
        }
        if(k === 3){
          continue;
        }
  
    console.log(k);
  k++;
} while (k <= 5);

var person = {
    firstName: "Kerlan",
    lastName: "Augustine",
    age: 23
};

with (person) {
    console.log(firstName + " " + lastName + " is " + age + " years old");
}