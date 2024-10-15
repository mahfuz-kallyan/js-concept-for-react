// 1.JSON--> stringify, parse
const student = {
    name: 'Kallyan',
    age: 20,
    movies: ['king khan', 'dhakar mastan']
}

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);


const studentObject = JSON.parse(studentJSON)
// console.log(studentObject);

// //2. Fetch
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch((error) => console.log(error))

// keys, values
const keys = Object.keys(student);
// console.log(keys);
const values = Object.values(student);
// console.log(values);

// for loop
const numbers =[23, 4, 56, 7, 6, 68];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of--> on array like object
// for in--> on object 


// add or remove form an array
const product=[
    {name:'laptop', price: 63000, ram: 'lenovo', color: 'silver'},
    {name:'phone', price: 8000,  ram: 'apple', color: 'black'},
    {name:'watch', price: 9000, ram: 'casio', color: 'yellow'},
    {name:'sunglass', price: 3000, ram: 'ribon', color: 'black'},
    {name:'camera', price: 11000, ram: 'canon', color: 'silver'}, 
];

const newProduct = {name: 'webcam', price: 700, color: 'black'};
// copy products array and then add new product
const newProducts = [...product, newProduct];
// console.log(newProducts);

// create a new array without  specific item
const remaining = product.filter(p => p.name !== 'phone');
console.log(remaining);







