//question 1 for
var sumOfSquaresLimit =  5;
var SumOfSquare = 0;

for(j=1; j<=sumOfSquaresLimit; j++){
    SumOfSquare += j **2;
}
console.log(`${SumOfSquare}`)


//question3 while loop
var integerLimit = 20;
var starInt = 2;

while (starInt <=integerLimit){
    console.log(starInt);

    starInt +=2;
}

//question2
var factorialNumber = 5;
var factorialOutput = 1;

var k = 1;

do{
    factorialOutput *=k;
    k++;
}while(k<=factorialNumber);
console.log(factorialOutput)

//question4 for
var CountDownNumber = 20
for(m=20; m>=1; m--){
  console.log(m);
}

//question6
function reversedString (a){
var reversedString = '';
for (i = a.length - 1; i >= 0; i--) {
reversedString += a[i];

}
return reversedString;
}
console.log ('REversed String: ' + reversedString('hello'));


