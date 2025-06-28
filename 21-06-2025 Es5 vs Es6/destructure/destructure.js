const nameArr =["saravanan","snega","santhosh"];

const[name1,name2,name3]=nameArr;

console.log("name:",name1);
console.log("name:",name2);
console.log("name:",name3);

// number array
const num = [200,300,400]
const [a,b,c] =num;
console.log(a,b,c);

const [x,,z] =num
console.log(z,x);

// object
const personDetails = {name:"Saravanan",city:"Chennai",country:"India"}

// const name = personDetails.name

const {nam1,city,country} =personDetails
console.log("Objects destructure");
console.log("Object destructure :",name1,city,country);

// Array of objects

const users = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'John', age: 53 },
];
console.log("Array of Objects Destructure");

const[,{name:userName},{age:userAge}] = users
console.log(userName,"second Element Age:", userAge)

console.log("Array of Objects Destructure and rest operator");
const [{name:customerName},...patients] = users
console.log(customerName);
console.log(patients);


const employees = [
  { empId: 101, details: { firstName: 'John', lastName: 'Doe' } },
  { empId: 102, details: { firstName: 'Jane', lastName: 'Smith' } },
];
console.log("Array of Objects with Nested Object Destructure");

const [{details:{lastName:userLastName}},{details:{firstName:empFristName,lastName:empLastName}}] = employees

console.log(userLastName,empFristName,empLastName)