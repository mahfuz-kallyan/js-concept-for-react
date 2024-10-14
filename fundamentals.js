// how to declare variable (var, let, const)
const fathersName = 'Rafiq';
let season = 'rainy';
season = 'winter';

// 6 basic condition >, <, ===, !==, <=, >=
// multiple conditions: &&, ||

if(fathersName === 'Rafiq' || season === 'rainy'){
    console.log('kallyan');
}
else if(fathersName === 'rafiq'){

}
else{

}

// 3. Array declare
// index, length, push, pop, 
const numbers = [2, 4, 556, 7, 432, 8, 9];
numbers[0] = 56;

// 4. loop(for loop, for-of loop, for-in loop )
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
    
}

// 5. Function
function multiply(num1, num2){
const result = num1 * num2
return result
}

const output = multiply(5, 7);
console.log(output);

// 6 object
// 3 ways to access property
const student = {
    name: 'Kallyan',
    age: 20,
    movies: ['king khan', 'dhakar mastan']
}
const myVariable = 'age'

console.log(student.age); 
console.log(student['age']);
console.log(student[myVariable]);



