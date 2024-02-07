function sumOfNumbers (me, we, he, to, go){
    const sumOfNumbers=(me + we + he + to + go)
    console.log(`${sumOfNumbers}`)
  }
  sumOfNumbers(6, 7, 8, 9, 10)


//question 9
function simpleInterest (principal, rate, time){
  const simpleInterest = (principal * rate * time) /100
  console.log (`${simpleInterest}`)
}
simpleInterest(1000, 10, 5)

// quesition 5
function sumOfInteger (integer) {
  var sum = 0;
  var number =1;
  while (number <=integer){ 
    sum = sum + number; // 0r => sum += number;
    number++;
  }
  console.log(`The sum of numbers from 1 to ${sum}`);
}
sumOfInteger(10)

// question 8
function multiplication (nothing){
  
    for (r = 1; r <=12; r++){
const mathsAnswer = nothing * r;
console.log(`${nothing} x ${r} = ${mathsAnswer}`)
    }
}
multiplication(10)


// question 7
function isPrime (number){
if (number <= 1){
  return false;
}
for (let i = 2; i <= Math.sqrt(number); i++)
if (number %i ===0){
  return false;
}
}
return true;
isPrime(17)