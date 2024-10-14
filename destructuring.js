// array destructuring
const numbers = [43, 56, 75];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [43, 56]

const [x, y] = numbers
// console.log(x, y);

function getValues (num1, num2){
  const nums = [num1, num2];
  return nums;
}

// const [first, second] = [90, 76]
const [first, second] = getValues(90, 76);
// console.log(getValues(90, 76));
// console.log(first, second);

// object destructuring
const{name, age} = {name: 'alu', age: 14};

const employee ={
    ide: 'VS code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js', 'react'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water'
    }
}

const {machine, ide} = employee;
const {weight, height} = employee.specification;




