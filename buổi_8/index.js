// const obj = {
//     firstName = 'John',
//     lastName = 'Doe',
//     age: 20,
//     fullName: function ()
// }

// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };

// 1. Write the command to add the language "Go" to the end of the languages array.
// 2. Change the difficulty to the value of 7.
// 3. Using the delete keyword, write the command to remove the jokes key from the programming object.
// 4. Write the command to add a new key called isFun and a value of true to the programming object.
// 5. Using a loop, iterate through the languages array and console.log all of the languages.
// 6. Using a loop, console.log all of the keys in the programming object.
// 7. Using a loop, console.log all of the values in the programming object.

// programming.languages.push("go");
// programming.difficulty = 7;
// programming.isFun = true;
// delete programming.jokes;
// console.log(programming);

// for ( key in programming.languages ) {
//     console.log(programming.languages[key]);
// }

// for ( key in programming ) {
//     console.log(key);
// }

// for ( key in programming ) {
//     console.log(programming[key]);
// }

// programming.languages.forEach ((item) => {console.log("item")});

// Bài 1:
// const people = [
//     { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
//     { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
//     { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
//     { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
//     { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
//     { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
//     { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
//     { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
//     { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
//     { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
//     { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
//     { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
// ];

// 1) What is the average income of all the people in the array?
// 2) Who are the people that are currently older than 30?
// 3) Get a list of the people's full name (firstName and lastName).
// 4) Get a list of people in the array ordered from youngest to oldest.
// 5) How many people are there in each department?

// Bài 2: Sử dụng vòng lặp để xóa phần tử trùng lặp trong mảng.
// input: [ 25, 50, 43, 36, 31, 26, 24, 19, 28, 24,  4, 18, 16, 48, 47, 49, 42, 15,  3, 16 ]
// output: [ 25, 50, 43, 36, 31, 26, 24, 19, 28,  4, 18, 16, 48, 47, 49, 42, 15,  3 ]

const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

//1.
const average = people.reduce((a, i) => a + parseInt(i.salary), 0) / (people.length + 0.0);
console.log("average =",average);

//2,
for(let i = 0; i<people.length; i++){ 
    if(2020 - Number(people[i].DOB.slice(6,10)) >= 30){
         console.log(people[i].lastName + " "+ people[i].firstName); 
    } 
}

//3,
for (let i = 0; i < people.length; i++) {
    console.log(people[i].firstName + " " + people[i].lastName);
}

//bài 2
var input = [25, 50, 43, 36, 31, 26, 24, 19, 28, 24,  4, 18, 16, 48, 47, 49, 42, 15,  3, 16];
function unique(input) {
    var output = []
    for (var i = 0; i < input.length; i++) {
      if (!output.includes(input[i])) {
        output.push(input[i])
      }
    }
    return output;
  }
console.log(unique);