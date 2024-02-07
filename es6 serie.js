//Array destructuring
const array = [1, 2, 3, 4, "Now"];
const [first, second, third, fourth, fifth]= array;
console.log(second)

//Object destructuring
const ayibam ={
    age: 28,
    gender: "Male",
    occupation: "NYSC",
    salary: 33000
}

const {age, gender, occupation, salary} = ayibam;
console.log(gender)

//spread operators
const imoh =[2, 3, 4, 5,];
const tryNow = [...imoh];
console.log(tryNow)

const testNow = {...ayibam}
console.log(tryNow, testNow)