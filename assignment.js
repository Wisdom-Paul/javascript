var first = 20;
number =first%2
if (first ==0){
console.log(even)
}else console.log(odd)
    

 var eligibleAge = 18;
  var woman = 19;
 var man = 17;
 if (woman >=18)
   console.log("eligible to vote;")
   if (man <18);
   console.log("not eligible;")


var the = 10;
var he = 25;
 if ("he > the;")
  console.log(true)


 
 var leapYear = 366;
 var year1 = 366;
 var year2 = 365;
 if ("year1 is a leapYear;"){
console.log (true)
if ("year2 is not a leapYear;")
console.log ("not a leap year;")
 }

 var queen = -2;
 var king = 0;
var prince = 3;
if ("queen has negative sign && < king;"){
console.log("true;")
if ("king  > prince;")
console.log("queen;")
}

var range = "50 to 100"
var today = 5;
var notToday = 60;
if ("today >==  50"){
  console.log("out of range;")
  if ("notToday <== to 50;")
  console.log("within range;")
}
 

//loops

// while loops

var countingNumbers = 1
 //while (countingNumbers < 5){
 //console.log("Counting Number:" + countingNumbers);
 //countingNumbers++;
//}

//}
  
  // do while loop

//do{ 
 //console.log("shawarma:" + shawarma);
// shawarma++;
//} //while(shawarma < 0)


//for loop

for (gold = 1; gold <=5; gold++);{
  console.log("Mine Coins:"+gold);
}


//using for to do multiplications

const number = 8;
for (i=1; i<=12; i++){
  const resultAnswer = number * i;
  console.log(`${number} x ${i} = ${resultAnswer}`)
}

// JAVASCRIPT FUNCTION
function myFunction () {
// statements 

}

function myFirstFunction (name, age){
  console.log(`${name} is ${age} years old`)
}

myFirstFunction('Nkechi', 20);

function street (sex, complexion){
  let output;
  output = `Adaobi is ${sex} and is ${complexion}`,
  console.log(output)
  return output;
}
street('female', 'fair')

function rectangle (length, breadth){
  const area = length * breadth
  console.log(`${area}cm`)
}
rectangle(10,5)


function celsiusToF (c){
  var F = (9/5 *c) +32;
  console.log(`${c} degree celsius is equal to ${F} fahrenheit`)
}
celsiusToF(1)