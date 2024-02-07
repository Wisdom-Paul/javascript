//loops

// while loops

var countingNumbers = 1
 //while (countingNumbers < 5){
 //console.log("Counting Number:" + countingNumbers);
 //countingNumbers++;
//}

var evenNumber = 20
var result = evenNumber/2==0;
while (evenNumber < 20){
  console.log("result:" + evenNumber)
  evenNumber++;
}


// do while loop

//do{ 
 //console.log("shawarma:" + shawarma);
// shawarma++;
//} //while(shawarma < 0)


//for loop

//for (gold = 0; gold <=5; gold++){
  //console.log("Mine Coins:"+gold);
//}


//using for to do multiplications

const number = 8;
for (i=1; i<=12; i++){
  const resultAnswer = number * i;
  console.log(`${number} x ${i} = ${resultAnswer}`)
}

const numba = 8;
for (r=1; r<=8; r--){
  const Answerresult = numba - r
  console.log(`${numba} - ${r} = ${Answerresult}`)
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