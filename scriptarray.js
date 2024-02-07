//using the array constructor = new Array
const testArray = new Array ('me', 3, false, "house");
console.log(testArray[2])

//using array literal
const myArray = [1, 2, 3, 4, 5, 6];
console.log(myArray[myArray.length-1])
myArray[2] = "Wealth";
console.log(myArray)
myArray.push("billionaire")
console.log(myArray)

//using for loop
for(i=0; i<myArray.length; i++){
   console.log(myArray[i])
}

console.log(myArray)

//array concartination
var yourArray = [1, 3, 6, 9,'new', "in"]

aryResult = myArray.concat(yourArray)
console.log(typeof yourArray)
console.log(myArray.toString())

console.log(aryResult)
console.log(myArray.join('"'))
myArray.unshift("month")
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.shift()
console.log(myArray)
myArray.reverse
console.log(myArray)


//object
var student = {
  firstName: "John",
  lastName: "Imoh",
  age: 21,
  gender: "male",
  occupation: "sporty",
  isMarried: true,
  hobbies: ["Reading", "Writing", "Coding"],
  address:{
    streetAddress: "123 MIN St.",
    city: "New Your",
    state: "Ny",
    zipCode: "0023",
  }
  
}
console.log(student.hobbies[2])
console.log(student.address.streetAddress)
