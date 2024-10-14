const numbers = [2, 4, 556, 7, 432, 8, 9];
const student = {
    name: 'Kallyan',
    age: 20,
    movies: ['king khan', 'dhakar mastan']
}

// template string
const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movie ${student.movies[1]}`;
console.log(about);

// arrow function

const getFiftyFive = () => 55;
const add =(num)=> num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z)=> x + y + z;
const multiLine = (num1, num2)=>{
    const sum = num1 + num2
    return sum;
}

// spread operator
const newNumbers = [...numbers];
numbers.push(99);
numbers.push(99);
numbers.push(99);


// create a new array from an older array and add an element
const createArray = [...numbers, 100];
console.log(numbers, newNumbers, createArray);

