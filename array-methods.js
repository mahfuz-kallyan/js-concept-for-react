const product=[
    {name:'laptop', price: 63000, ram: 'lenovo', color: 'silver'},
    {name:'phone', price: 8000,  ram: 'apple', color: 'black'},
    {name:'watch', price: 9000, ram: 'casio', color: 'yellow'},
    {name:'sunglass', price: 3000, ram: 'ribon', color: 'black'},
    {name:'camera', price: 11000, ram: 'canon', color: 'silver'}, 
];

const brands = product.map(product => product.ram);
// console.log(brands);
const price = product.map(product => product.price);
// console.log(price);


// product.forEach(product => console.log(product))
// product.forEach(product => console.log(product.color))

// filter
const cheap = product.filter(product => product.price < 20000);
// console.log(cheap);
const specific = product.filter(p => p.name.includes('n'));
// console.log(specific);

// find
const special = product.find(p => p.name.includes('n'));
console.log(special);




